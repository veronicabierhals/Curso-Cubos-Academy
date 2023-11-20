create database sistema_cadastro;

create table usuarios(
    id serial primary key,
    nome text,
    email text not null,
    senha text not null,
    telefone text
);