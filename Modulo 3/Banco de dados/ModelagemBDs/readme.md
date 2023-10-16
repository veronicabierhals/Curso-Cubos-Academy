# Modelagem de banco de dados

## Como estruturar tabelas?
- definir as entidades do sistema
    - entidade → tudo que possui em um sistema
- criar um identificador único da entidade
- características da entidade
    - colunas da tabela
- se alguma característica for uma lista de dados, crie uma nova entidade

<br>

## Tipos de dados utilizados

### Numéricos
_______________________


**INTEIROS**

- **smallint:** 2 bytes → -32768 a +32767
- **integer:** 4 bytes → -2147483648 a +2147483647
- **biginteger:** 8 bytes

<br>

**PRECISÃO ARBITRÁRIA**

- **numeric:** variável, alcance:
    - 131072 dígitos inteiros
    - 16383 dígitos decimais
- **decimal:** variável, alcance:
    - 131072 dígitos inteiros
    - 16383 dígitos decimais

<br>
Precisão especificada pelo usuário e exata

```
decimal (7, 4)
```
7 = precisão<br>
4 = escala (número de dígitos após a vírgula)<br>

→ se não informar precisão ou escala, suporta até o limite <br>
→ os inteiros podem ser considerados como tendo uma escala zero

<br>


**PONTO FLUTUANTE**


- **real:** 4 bytes, alcance 6 dígitos decimais
- **double precision:** 8 bytes, alcance 15 dígitos decimais

→ Precisão variável, inexata

→ Não recomendado para armazenamento e cálculos exatos, como para valores monetários, por exemplo.

→ comparar dois valores de pontos flutuantes para igualdade nem sempre funciona conforme esperado
<br><br>
Inexato → "significa que alguns valores não podem ser convertidos exatamente para o formato interno e são armazenados como aproximações, demodo que o armazenamento e a recuperação de um valor podem apresentar pequenas discrepâncias."

<br>

**SERIAIS**

- **smallserial:** 2 bytes, alcance 1 a 32767
- **serial:** 4 bytes, alcance 1 a 2147483647
- **bigserial:** 8 bytes, alcance 1 a 9223372036854775807

→ armazenam números inteiros<br>
→ não aceita valores negativos <br>
→ auto incremento <br>
→ não pode ser nulo <br>


### Caracteres
_______________________

**VARCHAR(n)**
<br>
→ comprimento variável com limite

**CHAR(n)**
<br>
→ comprimento fixo, completa com espaços em branco

**TEXT**
<br>
→ comprimento variável sem limite

<br>

### Booleano
______________________
**boolean**

→ tamanho: 1 byte <br>
→ possui três valores: verdadeiro, falso e nullo <br>
→ verdadeiro: true, t, yes, on ou 1 <br>
→ falso: false, f, no, off ou 0 <br>
→ não há diferença entre maiúsculo ou minúsculo <br>

<br>

### Data e hora
______________________
**TIMESTAMP**
- 8 bytes: data e hora sem fuso horário
    - ex: 2021-05-20 12:30:45

**TIMESTAMPTZ**
- 8 bytes: data e hora com fuso horário
    - ex: 2021-05-20 12:30:45-03

**DATE**
- 4 bytes: data sem hora do dia
    - ex: 2021-05-20

**TIME**
- 8 bytes: hora do dia sem data
    - ex: 12:30:45

**TIMETZ**
- 12 bytes: hora do dia sem data + fuso
    - ex: 12:30:45-03

## Relação entre tabelas

**um para muitos (1:N)**

Uma linha de tabela se relaciona com zero ou mais linhas de outra tabela.
Geralmente indica pertencimento

Exemplo:
- um país tem vários estados
- uma casa tem vários moradores
- um cliente fez várias compras

<br>

**um para um(1:1)**

Uma linha de uma tabela se relaciona com uma e apenas um linha de outra tabela e vice-versa.

Exemplo:
- uma pessoa tem um telefone para contato
- uma pessoa tem uma sede

<br>

**muito opara muitos(N:N)**

Uma linha de uma tabela se relaciona com zero ou mais linhas de outra tabela.
Mas cada linha dessa outra tabela também se relaciona com zero ou mais da primeira tabela.
Nesse relacionamento precisa existir uma tabela auxiliar para representar a relação.

Exemplo:
- produtos tem várias categorias
- pessoas são amigas de pessoas

<br>

**auto relação**

É quando uma tabela se relaciona com ela mesma.
Fuciona da mesma forma dos outros tipos de relacionamentos.

Exemplo:
- um comentário tem outro comentário

<br>

## Constraints ou restições
São regras que aplicamos em colunas de uma tabela para controlar os dados armazenados.

**Primary key** (chave primária) <br>
Identificador único de cada registro

**Foreign key** (chave estrangeira) <br>
→ Representa a chave primária em um relacionamento. <br>
→ Tem que passar o mesmo tipo de dado da chave primária. <br>
→ Só é possível criar a chave estrangeira após a criação da tabela referência.

```
 editora_id integer references editoras(id),
```

**Unique** <br>
Define que o valor da coluna seja único entre os registros, não se repitam.

**not null** <br>
Impede que uma coluna receba valores nulos, usada em campos obrigatórios.

<br>

## Criação de banco de dados

→ não é possível criar mais de um banco de dados com o mesmo nome

```
create database aula_modelagem;
```
<br>

## Exclusão de banco de dados

→ Se o banco de dados a ser excluído estiver selecionado, não será possível excluí-lo.

```
drop database aula_modelagem;
```

## Alteração de tabelas

### adicionar colunas
```
alter table categorias add column descricao text;
```
→ nome da tabela / nome da coluna / tipo

### remover coluna
```
alter table categorias drop column descricao;
```

### alterar o tipo
```
alter table categorias alter column descricao type varchar(100);
```

### add relacionamento 1:N
```
alter table telefones
add constraint fk_telefones_editoras_id
foreign key (editora_id) references editoras(id);
```
→ nome da tabela / dar nome constraint / campo de inclusão / campo de referência