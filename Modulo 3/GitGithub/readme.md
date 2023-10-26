# Git e GitHub
## Git
É um sistema opensource para versionamento de código, ao usar git você cria um histórico do seu trabalho e torna possível (ou melhor) o trabalho em equipe.

## Principais comandos

- Inicializar um repositório local
```
git init
```
<br>

- Clonar um servidor remoto para o servidor local
```
git clone + url do github
```
<br>

- Visualizar o que está na 'stage' e 'not stage'
```
git status
```
<br>

- Adicionar arquivos na 'stage'

    - Enviar todos arquivos ou somente um arquivo
```
git add .
git add nomeArquivo
```
<br>

Remover um arquivo da área de stage.
```
git restore --staged caminho/nomeArquivo
```
<br>

- Remover arquivos da 'stage' e coloca na 'not stage'
```
git reset
git reset nomeArquivo
```
<br>

- Registrar marcos no repositório
```
git commit -m "mesagem"
```
<br>

- Vincular repositório local ao repositório remoto
```
git remote add origin urlRepositorio
```
<br>

- Enviar alterações repositório local ao repositório remoto
```
git push -u origin nomeBranch
git push
```
<br>

- Baixar alterações repositório remoto para o repositório local
```
git pull origin branchEnviar
```
<br>

- Criar nova branch
    - Cria a cópia de uma branch para a novaBranch
```
git checkout -b novaBranch
```
<br>

Navegar entre brachs
```
git checkout nomeBranch
```
<br>

- Mesclar alterações de branchs
    - servidor local
    - merge esta na branch atual
```
git merge branchMesclar
```
<br>

Visualizar todas as branchs do projeto
```
git branch --all
```
<br>

Deletar uma branch.
```
git branch -d nomeBranch
```


## Documentação
https://git-scm.com/docs

## Fluxo de trabalho em equipe

### Pull request
Permite informar para outras pessoas sobre alteração que foram feitas no repositório para que seja discutida ou revisada

### Passo a passo

- Atualizar repositório local
```
git push
```
- Criar a nova branch
```
git checkout -b feature/nomeImplementacao
```
- Fazer as alterações no código
- Commitar a alteração
```
git add .
git commit -m "mensagem"
```
- Enviar para o servidor remoto
```
git origin branchCriada
```

- Abrir o repositório no GitHub para fazer o pull request
    - clicar no botão -> compare & pull request
    - abre uma nova aba
    - escrever informações implementadas
    - configurar em qual branch quer fazer a alteração
    - selecionar quem revisará a branch -> Reviewers
    - selecionar quem está abrindo o pull request -> Assigness
    - clicar botão -> creat pull request

- Pessoa que irá corrigir
    - entrar no repositório
    - entrar na aba -> Pull requests
    - View changes
    - na tela irá mostrar todos os commits realizados
        - é possível navegar entre eles
        - colocar comentários -> add single comment
        - impedir que o pull request seja aprovado -> start a review
        - quando finalizar os comentários -> Resolve conversation
    - Aprovar o pull request
        - clicar no botão -> Merge pull request
        - Confirm merge

- Após, é possível apagar a branch de desenvolvimento

- Fazer o pull para atualizar as informações do pull request no servidor local
```
git pull origin branch
```

- Implementar as atualizações na branch master
    - entrar no repositório do GitHub
    - entrar na aba -> Pull request
    - clicar no botão -> New pull request
    - selecionar a branch que irá receber o merge
    - selecionar branch que possui as alterações
    - irá aparecer todas as alterações
    - clicar no botão -> Create pull request
    - escrever informações implementadas
    - clicar no botão -> Create pull request
    - selecionar quem revisará a branch -> Reviewers
    - selecionar quem está abrindo o pull request -> Assigness

- Revisão em branch bloqueada
    - entrar na aba -> Pull request
    - selecionar a alteração
    - clicar no botão -> Add your review
    - mostra todos os arquivos alterados
    - revisar cada um e selecionar -> Viewed
    - clicar no botão -> review changes
        - commit
        - approve
        - request changes
    - colocar comentário
    - submit review

- Fazer o merge
    - clicar no botão -> Merge pull request
    - clicar no botão -> Confirm merge
        - é possível fazer comentários
<br>

## Resolução de conflitos

Os conflitos acontecem quando duas ou mais pessoas modificam o mesmo código e tentam mesclar em uma única branch.

- Abrir o repositório local no VScode
- Baixar as alterações
```
git pull origin
```
- Entrar na branch da minha parte do projeto
```
git checkout minhaBranch
```
- Mesclar na sua branch para não alterar a do projeto
```
git merge branchMesclar
```
- Aparecerá no VSCode todas as alterações
- Resolver os conflitos localmente
- Fazer um commit
- Fazer um push

- No GitHub
- Entrar na aba Pull request
- Clicar no botão -> Review changes
- Colocar comentário
- Approve
- submit review

<br>

- Fazer o merge
    - clicar no botão -> Merge pull request
    - clicar no botão -> Confirm merge
        - é possível fazer comentários

<br>

- Implementar as atualizações na branch master
- Entrar ba aba -> Pull request
- clicar no botão -> novo pull request
- selecionar a branch master
- selecionar a branch que irá mesclar
- clicar no botão -> create pull request
- escrever mensagem
- selecionar quem revisará a branch -> Reviewers
- selecionar quem está abrindo o pull request -> Assigness
- clicar no botão -> Create pull request

