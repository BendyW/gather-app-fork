create database gather;
use gather;
create table user_accounts (
    id int not null auto_increment,
    first_name varchar(20) not null,
    last_name varchar(30) not null,
    user_name varchar(20) not null unique,
    email varchar(255) not null,
    password_hash varchar(255) not null,
    primary key (id)
);

--Add new column--

alter table user_accounts
add user_name varchar(20) not null after last_name;

--

--Modify column attributes--

alter table user_accounts
modify column user_name varchar(20) not null unique;

alter table user_accounts
modify column email varchar(255) not null unique;



--

create table saved_events (
    id int not null auto_increment,
    event_name varchar(255) not null,
    location varchar(65) not null,
    user_name varchar(20) not null unique, -- this may not be unique in the long run... || foreign key
    primary key (id)
);