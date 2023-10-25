# Git e GitHub

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
git push -u origin master
```
<br>

- Baixar alterações repositório remoto para o repositório local
```
git pull origin master
```
<br>

- Navegar entre brachs e criar novas
    - Cria a cópia de uma branch para a novaBranch
```
git checkout -b novaBranch
```
