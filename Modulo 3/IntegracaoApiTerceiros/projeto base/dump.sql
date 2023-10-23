create table clientes (
    id serial primary key,
    nome text not null,
    email text not null unique,
    telefone text
);

create table produtos (
    id serial primary key,
    nome text not null,
    descricao text,
    valor integer not null
);