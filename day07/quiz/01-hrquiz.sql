-- no 1 create table projects & project_assignment

create table projects(
	proj_id serial,
	proj_name varchar (100),
	proj_createdon date,
	proj_duedate date,
	proj_cust_name varchar(100),
	constraint proj_id_pk primary key (proj_id)
);

CREATE TABLE project_assignment (
	pras_proj_id INTEGER,
	pras_employee_id INTEGER,
	pras_startdate DATE,
	pras_enddate DATE,
	pras_status VARCHAR (15),
	constraint pras_proj_employee_pk primary key (pras_proj_id,pras_employee_id),
	constraint pras_proj_id_fk foreign key (pras_proj_id) references projects(proj_id),
	constraint pras_employee_id_fk foreign key (pras_employee_id) references employees(employee_id)
);

-- no 2

ALTER TABLE projects
ADD COLUMN proj_description VARCHAR (255),
ADD COLUMN proj_status VARCHAR (15),
ADD COLUMN proj_amount NUMERIC;

--  no 3

ALTER TABLE projects
ADD COLUMN proj_account_mgr INTEGER;

ALTER TABLE projects 
ADD CONSTRAINT proj_account_mgr_fk
FOREIGN KEY (proj_account_mgr) 
REFERENCES employees (employee_id);

-- no 4

INSERT INTO projects(proj_name,proj_createdon,proj_duedate,proj_cust_name,proj_status,proj_amount,proj_account_mgr)
VALUES ('E-COMMERCE', now(), now() + interval '30 days', 'TELKOMSEL', 'INPROGRESS', 5000, 103);

INSERT INTO projects(proj_name,proj_createdon,proj_duedate,proj_cust_name,proj_status,proj_amount,proj_account_mgr)
VALUES ('TRAVELOKA', now(), now() + interval '30 days', 'XL', 'INPROGRESS', 10000, 103);

INSERT INTO projects(proj_name,proj_createdon,proj_duedate,proj_cust_name,proj_status,proj_amount,proj_account_mgr)
VALUES ('TIKET.COM', now(), now() + interval '30 days', 'INDOSAT', 'INPROGRESS', 8000, 103);

INSERT INTO projects(proj_name,proj_createdon,proj_duedate,proj_cust_name,proj_status,proj_amount,proj_account_mgr)
VALUES ('TOKOPEDIA', now(), now() + interval '30 days', 'PT TOKOPEDIA', 'COMPLETED', 25000, 103);

INSERT INTO projects(proj_name,proj_createdon,proj_duedate,proj_cust_name,proj_status,proj_amount,proj_account_mgr)
VALUES ('LIVIN BY MANDIRI', now(), now() + interval '30 days', 'BANK MANDIRI', 'COMPLETED', 30000, 103);

-- no 5

select * from project_assignment

INSERT INTO project_assignment(pras_proj_id,pras_employee_id,pras_startdate,pras_enddate,pras_status)
VALUES (1,104,now(),null,'ASSIGNED');

INSERT INTO project_assignment(pras_proj_id,pras_employee_id,pras_startdate,pras_enddate,pras_status)
VALUES (1,105,now(),now() + interval '33 day','COMPLETED');

INSERT INTO project_assignment(pras_proj_id,pras_employee_id,pras_startdate,pras_enddate,pras_status)
VALUES (1,106,now(),null,'INPROGRESS');

INSERT INTO project_assignment(pras_proj_id,pras_employee_id,pras_startdate,pras_enddate,pras_status)
VALUES (
	2,
	104,
	now(),
	null,
	'ASSIGNED'
);

INSERT INTO project_assignment(pras_proj_id,pras_employee_id,pras_startdate,pras_enddate,pras_status)
VALUES (
	2,
	105,
	now(),
	now() + interval '33 days',
	'COMPLETED'
);

INSERT INTO project_assignment(pras_proj_id,pras_employee_id,pras_startdate,pras_enddate,pras_status)
VALUES (
	2,
	106,
	now(),
	now() + interval '33 days',
	'INPROGRESS'
);

-- no 6

select * from project_assignment
where pras_status = 'COMPLETED'
