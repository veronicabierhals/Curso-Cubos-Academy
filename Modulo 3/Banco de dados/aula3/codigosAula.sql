-- inserção de um registro por vez
insert into produtos (nome, descricao, preco, categoria)
values ('camisa', 'linda camisa', 5990, 'roupas');

insert into produtos (nome, preco, categoria)
values ('caderno', 2000, 'material escolar');


-- inseção de vários registros por vez
insert into produtos (nome, descricao, preco, categoria)
values ('calça jeans', null, 12900, 'roupas'),
('bermuda', 'bermuda longa preta', 12900, 'roupas');

--read
select * from produtos;

--update
update produtos set nome = 'caderno 10 matérias' where id = 2;

--alteração de mais de um registro
update produtos set categoria = 'calças', preco = 12950 where descricao is null;