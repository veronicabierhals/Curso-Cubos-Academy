# Query Builder

Funcionalidades disponibilizadas por uma biblioteca que possibilita escrever instruções SQL de maneira simplificada.

## Biblioteca
Knex.js

Documentação: <br>
https://knexjs.org/guide/

### Bibliotecas para construção da APIrest
```
npm install pg express knex
```

## Como usar

Para saber o SQL que está sendo construido é só passar o **debug()**
```
const agenda = await knex('agenda').debug();
```

Query bruta/manual
```
const agenda = await knex.raw("select * from agenda")
```

Select / where -> comparação igual
```
const agenda = await knex('agenda').where("id", 5).debug();
const agenda = await knex('agenda').where({id: 5}).debug();
```
Mais de um argumento
```
const agenda = await knex('agenda').where({id: 5, nome: "Samantha"}).debug();
```

Select / where -> comparação diferente/maior/menor...
```
const agenda = await knex('agenda').where("id", "!=", 5).debug();
```

First <br>
retorna somente o primeiro registro da condição informada <br>
sql: 'select * from "agenda" where "id" = ? limit ?'
```
const agenda = await knex('agenda').where({id: 5}).first().debug();
return res.json(agenda.nome); //retorna somente o nome
```

Select / first
```
const agenda = await knex('agenda').where({id: 5}).select("id", "nome").first().debug();
```

Null
```
//select * from agenda where email is null;
const agenda = await knex('agenda').whereNull('email').debug();
```

Not Null
```
//select * from agenda where email is not null;
const agenda = await knex('agenda').whereNotNull('email').debug();
```

Between
```
//select * from agenda where id between 5 and 10;
const agenda = await knex('agenda').whereBetween('id', [5, 10]).debug();
```

Ordey by (decrescente)
```
const agenda = await knex('agenda').whereBetween('id', [5, 10]).orderBy('id','desc').debug();
```

Distinct <br>
retorna campos distintos, que não se repetem
```
const agenda = await knex('agenda').distinct('email').debug();
```

Group by
```
//select email from agenda group by email
const agenda = await knex('agenda').select('email').groupBy('email').debug();
```

Count
```
//select email, count * from agenda group by email
const agenda = await knex('agenda').select('email').groupBy('email').count().debug();
```

Limit / offset <br>
usado para paginação
```
const agenda = await knex('agenda').limit(5).offset(2).debug();
```

Sum <br>
soma
```
const agenda = await knex('agenda').whereNull('email').sum('id').debug();
```

Avg <br>
média
```
const agenda = await knex('agenda').whereNull('email').avg('id').debug();
```

Min <br>
menor valor
```
const agenda = await knex('agenda').whereNull('email').min('id').debug();
```

Max <br>
maior valor
```
const agenda = await knex('agenda').whereNull('email').max('id').debug();
```

## CRUD

### Insert (create)
```
const guido = {
    nome: "Guido Cerqueira",
    email: "guido@email.com",
    telefone: "(99) 9999-9999",
  };

  const agenda = await knex("agenda").insert(guido);
```

Inserir mais de um registro
```
app.get("/", async (req, res) => {
  const maria = {
    nome: "Maria",
    email: "maria@email.com",
    telefone: "(99) 9999-9999",
  };

  const joao = {
    nome: "João",
    email: "joao@email.com",
    telefone: "(99) 9999-9999",
  };

  //const agenda = await knex("agenda").insert(guido).returning(["id", "nome"]);
  const agenda = await knex("agenda").insert([maria, joao]).returning(["*"]);

  return res.json(agenda);
});
```

### Update
```
app.put("/:id", async (req, res) => {
  const { nome, email, telefone } = req.body;
  const { id } = req.params;

  const agendaAtualizada = await knex("agenda")
    .update({ nome, email, telefone })
    .where({ id })
    .returning(["*"]);
  return res.json(agendaAtualizada);
});
```

### Delete
```
app.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const agendaExcluida = await knex("agenda")
    .del()
    .where({ id })
    .returning(["*"]);
  return res.json(agendaExcluida);
});
```

### Join
```
app.get("/anotacoes", async (req, res) => {
  const anotacoes = await knex("anotacoes")
    .join("agenda", "anotacoes.agenda_id", "=", "agenda.id")
    .select("anotacoes.*", "agenda.nome");
  return res.json(anotacoes);
});
```