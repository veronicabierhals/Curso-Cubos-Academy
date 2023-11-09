-- criar banco de dados aula_crud
create database aula_crud;

-- Criação da tabela produtos

create table if not exists produtos (
	id serial primary key,
  	nome text,
  	descricao text,
  	preco integer,
  	categoria text
);