# Date

* sem argumento ele pega o momento atual

```
const agora = new Date();
console.log(agora);

Saída:
2023-09-26T13:29:29.029Z<br>
ano-mês-dia/h:min:seg.milseg/UTC
```

<br>

* se passar apenas um número no parâmetro do *date* é considerado um timestamp

```
const primeiroGolDate = new Date(primeiroGolTimestamp);
```
<br>


* se colocar parâmetro tem que ser pelo menos 2 (ano e mês)


```
const date = new Date(2020, 0);
console.log(date);
```
<br>

* sempre em número
* meses começam por 0 (Janeiro)
* dias começam em 1
<br>
* se não colocar restante parâmetros ele pega o primeiro
* assume o momento da *time zone* que está no seu computador
<br>


## Timestamp
* Número que representa um momento da história
* Quantidade de milissegundos que passaram desde  01/01/1970, a 00:00:00.000 em Greenwich
* usado para somar ou subtrair um tempo que passou

## Biblioteca
date-fns <br>
https://date-fns.org/
https://www.npmjs.com/package/date-fns

**Como instalar**

```
npm install date-fns --save
```