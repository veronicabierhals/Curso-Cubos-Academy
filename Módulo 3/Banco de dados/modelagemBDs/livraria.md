## Livraria
### Entidades

editoras
- id: serial
- nome: text
- cnpj: text
- data_cadastro: timestamp

```
create table editoras (
	id serial primary key,
  nome text not null,
  cnpj text unique,
  data_cadastro timestamp default now()
);
```
<br>

livros
- isbn: integer
- editora_id: integer
- titulo: text
- data_piblicacao: date

```
create table livros (
	isbn integer primary key,
  editora_id integer references editoras(id),
  título text not null,
  data_publicacao date not null
);
```

<br>

enderecos
- id: serial
- editora_id: integer
- cep: text
- rua: text
- bairro: text
- cidade: text
- estado: text
- pais: text

```
create table enderecos (
  id serial primary key,
  editora_id integer references editoras(id),
  cep text not null,
  rua text,
  bairro text,
  cidade text,
  estado char(2),
  pais text
);
```

<br>

livro_categoria
- livro_isbn: integer
- categoria_id: integer

```
create table livro_categoria (
  livro_isbn integer references livros(isbn),
  categoria_id integer references categorias(id)
);
```
<br>

categorias
- id: serial
- nome: text

```
create table categorias (
  id serial primary key,
  nome text not null
);
```

<br>

```
create table comentarios (
  id serial primary key,
  descricao text not null,
  comentario_id integer references comentarios(id),
  livro_isbn integer references livros(isbn)
);
```

### Relações
editoras 1:N livros <br>
editoras 1:1 enderecos <br>
livros 1:N livro_categoria <br>
livro_categoria N:1 categorias

**muitos para muitos**
```
insert into livro_categoria (livro_isbn, categoria_id)
values (12345, 1), (12345, 2), (12345, 3),
(123456, 2);
```

**auto relacionamento**
```
insert into comentarios (descricao, livro_isbn)
values ('livro muito bom', 12345);

insert into comentarios (comentario_id, descricao)
values (1, 'obrigado pelo elogio');
```