# Conexão Node.js com PostgreSQL

### Biblioteca
node-postgres <br>

````
npm install pg
````
<br>

**Documentação** <br>
https://node-postgres.com/ <br>
https://www.postgresql.org/docs/ <br>
https://pgdocptbr.sourceforge.io/ <br>
https://www.postgresqltutorial.com/


<br>

## Conexão PostgreSQL

Abre uma conexão a cada query

````
const {client} = require('pg')

const client = new Client()
await client.connect()

const res = await client.query('SELECT NOW()')

await client.end()
````

**Problema**
- consumo de recursos por conexão
- cada chamada na aplicação resulta em uma nova conexão
- cada conexão processa uma query por vez
- 20 a 30 milissegundos a cada nova conexão

<br>

### Pool de Clients
- abre 10 conexões ou mais por vez
- maior performance
- maior escalabilidade
- agrupa conexões reutilizáveis
- libera a conexão para a próxima chamada
- encerra conexões automaticamente quando inativas

````
const {pool} = require('pg');

const pool = new Pool()

const selectTimestamp = async (req, res) => {
    const timestamp = await pool.query('SELECT NOW()');
    return res.json(timestamp);
}

const selectDate = async (req, res) => {
    const date = await pool.query('SELECT CAST (NOW() AS DATE)');
    return res.json(date);
}
````

## Integração

**No VSCode** <br><br>
-> Iniciar um projeto
````
npm init -y
````
-> Instalar o Nodemon
````
npm install -D nodemon
````

-> Instalar o express e o pg
````
npm install express pg
````

-> Criar o index <br>
-> Criar o .gitignore <br>
-> ajustar a rota Nodemon no package.json <br>
-> Startar o Nodemon 'npm run dev' <br>
-> Criar a rota no Insomnia e testar a API <br>

## Join
É uma cláusula SQL que permite agrupar registros de duas ou mais tabelas em uma única consulta.

-> melhora a performance

**inner join**
- mesmo que 'join'
- união de duas tabelas que se relacionam através de algum campo
- retorna todos os registros que satifazem a condição de agrupamento

````
select e.id as empresaId, f.id as filialId, e.nome, f.pais, p.nome as funcionario
from empresas e
join filiais f on e.id = f.empresa_id
join pessoas p on e.id = p.empresa_id;
````

**full join**
- retorna todos os registros de todas as tabelas, mesmo que não exista relações entre tabelas

````
select e.id as empresaId, f.id as filialId, e.nome, f.pais
from empresas e
full join filiais f on e.id = f.empresa_id;
````

**left join**
- retorna todos os registros da tabela da esquerda independente de ter ou não relação com registros da tabela da direita

````
select e.id as empresaId, f.id as filialId, e.nome, f.pais
from empresas e left join filiais f on e.id = f.empresa_id;
````

**right join**
- retorna todos os registros da tabela da direita independente de ter ou não relação com registros da tabela da esquerda
````
select e.id as empresaId, f.id as filialId, e.nome, f.pais
from empresas e left join filiais f on e.id = f.empresa_id;
````

## Paginação de resultados
- melhora o desempenho

````
select * from pessoas order by id asc limit 10 offset 10;
````