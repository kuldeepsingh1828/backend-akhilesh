SQL -> Structure
Database
table
rows + 
columns -- Name and Datatype

create table user(
    id int,
    name varchar(255),
    gender varchar(20) 
);


insert into user values (1,'Kuldeep', 'male');
insert into user (id, name, gender) values (1,'Kuldeep', 'male');
insert into user (name, gender) values ('Kuldeep', 'male');

insert into user (id, name, gender) values ("one",'Kuldeep', 'male');


#Mongo DB -- NOSQL --- (Document Based)
Database -- database
collections -- table 
documents --- rows
data is of BSON/JSON Object { "key" : value }
collections - Array of similar types of objects

No need to create a collections like we do create table in MYSQL
