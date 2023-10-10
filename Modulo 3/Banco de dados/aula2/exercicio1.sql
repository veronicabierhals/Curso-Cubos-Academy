-- monte uma query que retorne a quantidade de produtos agrupados por categoria
-- e a soma do estoque de todos os produtos de cada categoria

select categoria, count(id) as "quantidadeProdutos",
sum(estoque) as "somaTotalEstoque" from farmacia group by categoria;

