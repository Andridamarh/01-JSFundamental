-- create table

create table t_agent(
	agent_code char (5),
	agent_name varchar (20),
	agent_office varchar (20),
	basic_commission numeric,
	constraint agent_code_pk primary key (agent_code)
);

create table t_client(
	client_number char (5),
	client_name varchar (50),
	birth_date date,
	constraint client_number_pk primary key (client_number)
);

create table t_policy(
	policy_number serial,
	policy_submit_date date,
	premium numeric (10,2),
	discount numeric,
	commission numeric(10,2),
	client_number char (5),
	agent_code char (5),
	policy_status varchar(20),
	policy_due_date date,
	constraint policy_number_pk primary key (policy_number),
	constraint client_number_fk foreign key (client_number) references t_client(client_number),
	constraint agent_code_fk foreign key (agent_code) references t_agent(agent_code)
);


-- insert into

insert into t_agent(agent_code, agent_name, agent_office) values ('AG001', 'LIDYA', 'JAKARTA');
insert into t_agent(agent_code, agent_name, agent_office) values ('AG002', 'RUDI', 'BALI');
insert into t_agent(agent_code, agent_name, agent_office) values ('AG003', 'DICKY', 'BALI');
insert into t_agent(agent_code, agent_name, agent_office) values ('AG004', 'DAVID', 'SURABAYA');
insert into t_agent(agent_code, agent_name, agent_office) values ('AG005', 'FARIZ', 'SURABAYA');

insert into t_client(client_number, client_name, birth_date) values ('CL001', 'WAYNE ROONEY', '5/11/1956');
insert into t_client(client_number, client_name, birth_date) values ('CL002', 'RYAN GIGGS', '9/3/1972');
insert into t_client(client_number, client_name, birth_date) values ('CL003', 'DAVID BECKHAM', '9/3/1985');
insert into t_client(client_number, client_name, birth_date) values ('CL004', 'MICHAEL OWEN', '9/3/2012');

insert into t_policy(policy_submit_date, premium, discount, commission, client_number, agent_code, policy_status)
values ('1/5/2018', 18600000, 10, 930000, 'CL001', 'AG001', 'INFORCE');
insert into t_policy(policy_submit_date, premium, discount, commission, client_number, agent_code, policy_status)
values ('1/5/2018', 2500000, 10, 125000, 'CL002', 'AG002', 'INFORCE');
insert into t_policy(policy_submit_date, premium, discount, commission, client_number, agent_code, policy_status)
values ('1/10/2018', 2500000, 10, 125000, 'CL003', 'AG003', 'TERMINATE');
insert into t_policy(policy_submit_date, premium, discount, commission, client_number, agent_code, policy_status)
values ('1/25/2018', 4000000, 10, 200000, 'CL003', 'AG002', 'PROPOSAL');
insert into t_policy(policy_submit_date, premium, discount, commission, client_number, agent_code, policy_status)
values ('1/25/2018', 2625000, 10, 131250, 'CL004', 'AG002', 'PROPOSAL');


-- soal a

select policy_number, policy_submit_date, premium, discount, commission, c.client_number, client_name, birth_date, agent_code, policy_status
from t_client c join t_policy p on c.client_number = p.client_number
where extract(month from birth_date) = 9 and policy_submit_date > '1/15/2018'

-- soal b

select policy_number, policy_submit_date, premium, discount, commission, a.agent_code, agent_name, agent_office, policy_status
from t_agent a join t_policy p on a.agent_code = p.agent_code
where agent_office = 'JAKARTA' and policy_status = 'INFORCE'

-- soal c

select a.agent_code, agent_name, agent_office, trunc(((commission/premium) * 100),2)"basic commission", policy_number
from t_agent a join t_policy p on a.agent_code = p.agent_code
order by a.agent_code

-- soal d

update t_policy
set policy_due_date =(
	make_date(
	extract(year from (policy_submit_date + interval '30 day')) :: int,
	extract(month from (policy_submit_date + interval '30 day')) :: int,
	1
	)
	+ interval '1 month - 1 day'
)

-- soal e

select * from (
	select policy_number, premium, discount, ((premium * (discount/100)) :: numeric(10,2))discount_premium 
	from t_policy )t
where discount_premium < 1000000
order by discount_premium
