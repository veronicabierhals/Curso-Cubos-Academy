create database
  roteiros;

create table
  usuarios (
    id serial primary key,
    nome varchar(100) not null,
    email varchar(70) not null unique,
    senha text not null
  );
