# Etapas de um projeto

Utilizado para grandes projetos, desenvolvimento de etapas de um projeto.

* Problema (gerente de produto)
* Solução
* Layout (UX/UI)
* Escopo
* Desenvolvimento
* Teste

## Escopo

Definição:
* do que será feito,
* como funciona o que será feito e
* o que não será feito.

## Ferramenta

https://hackmd.io
* Pode ser utilizada para escopar a API;
* tem integração com GitHub.

# Escopando a API do Instagram

## O que o usuário por fazer:
* fazer login
* fazer cadastro
* ver dados do seu perfil
* editar dados do perfil
* ver postagens de outras pessoas
    * ver quantidade de curtidas em uma postagem
    * ver comentários em uma postagem
* curtir postagens de outras pessoas
* comentar postagens

## O que o usuário não pode fazer
* ver a localização de uma postagem
* ver pessoas que curtiram uma postagem
* curtir um comentário
* comentar em outros comentários
* não pode descurtir

## Endpoints

### POST - Login

#### Dados enviados
* username
* senha

#### Dados retornados
* sucesso/erro
* token

#### Objetivos gerais
* Validar o username e a senha
* Buscar o usuário no banco de dados
* Verificar se a senha informada está correta
* Gerar token de autenticação
* Retornar os dados do usuário e o token
____

### POST - Cadastro

#### Dados enviados
* username
* senha

#### Dados retornados
* sucesso/erro

#### Objetivos gerais
* Validar o username e a senha
* Verificar se username já existe no banco de dados
* Criptografar a senha para salvar a hash no banco de dados
* Cadastrar o usuário no banco de dados
* Retornar sucesso ou erro
____

### GET - Perfl

#### Dados enviados
* token (terá id ou username)

#### Dados retornados
* URL da foto
* nome
* usarname
* site
* bio
* email
* telefone
* gênero

#### Objetivos gerais
* Validar o token do usuário
* Buscar o cadastro do usuário com a informação do token
* Retornar os dados do usuário
____

### PUT - Perfl

#### Dados enviados
* token (terá id ou username)
* URL da foto
* nome
* usarname
* site
* bio
* email
* telefone
* gênero
* senha

#### Dados retornados
* sucesso/erro

#### Objetivos gerais
* Validar o token do usuário
* Buscar o cadastro do usuário com a informação do token
* Exigir ao menos um campo para atualizar
* Criptografar a senha se for informada
* Verificar se o email e usarname já existe no banco de dados se for informado
* Atualizar o registro do usuário no banco de dados
* Retornar sucesso / erro
____

### GET - Postagens
#### Dados enviados
* token (terá id ou username)
* offset (paginação)

#### Dados retornados
* Postagens [ ]
    * id da postagem
    * texto da postagem
    * Usuário
        * URL da foto - string
        * foi curtido por mim
        * username - string
        * é perfil oficial - boleano
    * Fotos [ ] (uma ou mais) - string
    * Quantidade de curtidas
    * Comentários [ ]
        * username
        * texto
    * Data

#### Objetivos gerais
* Validar o token do usuário
* Buscar o cadastro do usuário com a informação do token
* Retornar postagens de outras pessoas

____

### POST - Postagens
#### Dados enviados
* token (terá id ou username)
* texto
* fotos [ ]

#### Dados retornados
* Sucesso / erro

#### Objetivos gerais
* Validar o token do usuário
* Buscar o cadastro do usuário com a informação do token
* Exigir que seja informado ao menos uma foto no array
* Cadastrar postagem para o usuário logado
* Cadastro das fotos da postagem
* Retornar sucesso / erro
____

### POST - Curtir
#### Dados enviados
* token (terá id ou username)
* id da postagem

#### Dados retornados
* sucesso / erro

#### Objetivos gerais
* Validar o token do usuário
* Buscar o cadastro do usuário com a informação do token
* Buscar o cadastro da postagem com o id informado
* Verificar se usuário já curtiu a postagem
* Cadastrar a curtida da postagem no banco de dados
* Retornar sucesso / erro
____

### POST - Comentar
#### Dados enviados
* token (terá id ou username)
* id da postagem
* texto

#### Dados retornados
* sucesso / erro

#### Objetivos gerais
* Validar o token do usuário
* Buscar o cadastro do usuário com a informação do token
* Validar o texto
* Buscar o cadastro da postagem com o id informado
* Cadastrar comentario da postagem no banco de dados
* Retornar sucesso / erro

## Banco de dados
A implantação está no arquivo db.sql