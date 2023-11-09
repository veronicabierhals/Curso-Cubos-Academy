# Deploy

Processo de implantação de um sistema em um servidor (nuvem) que disponibiliza o sistema para uso.

Pode-se deployar sistemas de forma manual até completamente automatizados.

### Empresas que alugam servidores
* aws
* Digital Ocean
* Azure
* Google Cloud Pçlataform
* Heroku

### Domínio
Registro de nome único que serve para localizar e identificar servidores (computadores) na internet.
O registro de domínios é feito por empresas autorizadas. <br>

Todo sistema hospedado em um servidor pode ser acessado através de um IP. <br>

Para tornar o acesso a servidores mais amigável, umk ou vários IP's são atrelados a um ou vários domínios.
Esse processo é realizado por Sistemas DNS (Domain Name System).

**Empresas que trabalham com registro de domínios** <br>
* registro.br
* GoDaddy
* name.com
* Domain.com

### IP's
* São difíceis de lembrar
* IP's mudam

## Variáveis de ambiente
* Por padrão são criadas com letras .
* Não podem conter espaços.
* Se utilizar espaço, deve estar entre aspas

```
VERONICA="veronica bierhals"
```

* Ideal que o arquivo **.env** esteja próximo ao arquivo **package.json** do contrário usar a configuração:

```
require("dotenv").config({path: "caminhoDoArquivo"})
```

* o arquivo **.env** guarda informações sensíveis do projeto, ou seja, que não podem ser compartilhadas, portanto deve-se colocar o arquivo no **.gitignore**

* cria-se um arquivo **.env.example** para compartilhar o nome das variáveis utilizadas nas variáveis de ambiente

**Biblioteca**
<br>
```
npm install dotenv
```

## Cors
```
npm install cors
```

Chama no index
```
const cors = require("cors");
app.use(cors());
```

Permitir somente um domínio para acessar
```
app.use(cors({
    origin: "dominioDeAcesso"
}));
```
Permitir domínios específicos
```
app.use(cors({
    origin: ["dominio1", "dominio2" ]
}));
```

## Elephant SQL

https://www.elephantsql.com/

## Cyclic
https://www.cyclic.sh/