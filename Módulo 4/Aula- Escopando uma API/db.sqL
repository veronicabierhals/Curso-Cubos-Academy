create database mini_insta;

create table usuarios (
  id serial primary key,
  nome text,
  imagem text,
  username text not null unique,
  email text unique,
  site text,
  bio text,
  telefone text,
  genero text,
  senha text not null,
  verificado boolean default false
);

create table postagens (
  id serial primary key,
  usuario_id int not null references usuarios (id),
  data timestamptz default now(),
  texto text
);

create table postagem_fotos (
  id serial primary key,
  postagem_id int not null references postagens (id),
  imagem text not null
);

create table postagem_comentarios (
  id serial primary key,
  texto text not null,
  data timestamptz default now(),
  usuario_id int not null references usuarios (id),
  postagem_id int not null references postagens (id)
);

create table postagem_curtidas (
  usuario_id int not null references usuarios (id),
  postagem_id int not null references postagens (id),
  data timestamptz default now()
);