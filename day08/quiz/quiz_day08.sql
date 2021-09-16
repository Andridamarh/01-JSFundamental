-- no 1

select r.region_id, region_name, country_id, country_name
from regions r join countries c on r.region_id = c.region_id 
where r.region_id = 1

-- no 2

select r.region_id, region_name, count(country_id)total_countries
from regions r join countries c on r.region_id = c.region_id
group by r.region_id
order by r.region_id

-- no 3

select c.country_id, country_name, l.location_id, street_address, postal_code, city, state_province
from regions r 
join countries c on r.region_id = c.region_id
join locations l on c.country_id = l.country_id
where r.region_id = 1
order by c.country_id

-- no 4

select department_id, department_name, d.location_id
from regions r 
join countries c on r.region_id = c.region_id
join locations l on c.country_id = l.country_id
join departments d on l.location_id = d.location_id
where r.region_id = 2

-- no 5

select region_name, count(r.region_id)total_department
from regions r 
join countries c on r.region_id = c.region_id
join locations l on c.country_id = l.country_id
join departments d on l.location_id = d.location_id
group by r.region_id

-- no 6

select country_name, count(c.country_id)total_department
from countries c
join locations l on c.country_id = l.country_id
join departments d on l.location_id = d.location_id
group by c.country_id
order by c.country_id

-- no 7

select country_name, total from 
(
	select country_name, count(c.country_id)total
	from countries c
	join locations l on c.country_id = l.country_id
	join departments d on l.location_id = d.location_id
	group by c.country_id)t
where total = (
	select max(total)
	from(
	select country_name, count(c.country_id)total
	from countries c
	join locations l on c.country_id = l.country_id
	join departments d on l.location_id = d.location_id
	group by c.country_id)t)

-- no 8

select d.department_id, department_name, count(e.employee_id)total_emps
from departments d
join employees e on d.department_id = e.department_id
group by d.department_id
order by total_emps asc

-- no 9

select department_id, department_name, total_emps
from (
	select d.department_id, department_name, count(e.employee_id)total_emps, r.region_id, region_name
	from regions r 
	join countries c on r.region_id = c.region_id
	join locations l on c.country_id = l.country_id
	join departments d on l.location_id = d.location_id
	join employees e on d.department_id = e.department_id
	group by d.department_id,r.region_id
	order by total_emps)t
where region_id = 2
order by department_id

-- hasil review dari bapak

select d.department_id, d.department_name, count(d.department_id)total_emps
from employees e
join departments d on e.department_id = d.department_id
where d.location_id in (select location_id from regions r
	join countries c on r.region_id = c.region_id
	join locations l on c.country_id = l.country_id
	where r.region_id = 2)
group by d.department_id, d.department_name
order by d.department_id


-- no 10

select employee_id, first_name, last_name, salary, extract(year from age(now(),hire_date))masa_kerja,
	case when extract(year from age(now(),hire_date)) >= 25 then salary * 5 
		 else salary * 3
	end bonus
from employees

-- no 11

select masa_kerja, sum(bonus)bonus_per_masa_kerja
from (
	select employee_id, first_name, last_name, salary, extract(year from age(now(),hire_date))masa_kerja,
		case when extract(year from age(now(),hire_date)) >= 25 then salary * 5 
			 else salary * 3
		end bonus
	from employees
	order by masa_kerja
)t
group by masa_kerja

-- no 12

select sum(a)"15 <= masa kerja <= 25", sum(b)"25 < masa kerja <= 30", sum(c)"30 < masa kerja <= 35"
from (
	select case when extract(year from age(now(),hire_date)) >=15 and extract(year from age(now(),hire_date)) <=25 
		then count(employee_id) end a,
		case when extract(year from age(now(),hire_date)) >25 and extract(year from age(now(),hire_date)) <=30
		then count(employee_id) end b,
		case when extract(year from age(now(),hire_date)) >30 and extract(year from age(now(),hire_date)) <=35 
		then count(employee_id) end c
	from employees
	group by employee_id
)t

-- no 13

select department_id, 
	department_name,
	sum(coalesce(a,0))"15 <= masa kerja <= 25",
	sum(coalesce(b,0))"25 < masa kerja <= 30",
	sum(coalesce(c,0))"30 < masa kerja <= 35"
from (
	select d.department_id, department_name,
		case when extract(year from age(now(),hire_date)) >=15 and extract(year from age(now(),hire_date)) <=25 
		then count(employee_id) end a,
		case when extract(year from age(now(),hire_date)) >25 and extract(year from age(now(),hire_date)) <=30
		then count(employee_id) end b,
		case when extract(year from age(now(),hire_date)) >30 and extract(year from age(now(),hire_date)) <=35 
		then count(employee_id) end c
	from employees e join departments d on d.department_id = e.department_id
	group by employee_id, d.department_id
	order by d.department_id)t
group by department_id, department_name
order by department_name
