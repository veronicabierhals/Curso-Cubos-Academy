# Boas práticas

* Manter o código todo em um mesmo idioma
* Fazer validações no intermediário
* Criar intermediários genéricos de validação

## Clean Code (Código Limpo)
Filosofia de desenvolvimento onde o principal objetivo é aplicar técnicas simples que visam facilitar a escrita e leitura de um código.

"Um código ruim pode até funcionar, mas se ele não for limpo, pode até acabar com uma empresa de desenvolvimento".
Robert Martin

### Regra dos nomes

* Use nomes que revelem seu propósito
    * o nome de uma função ou variável deve significar o porque existe e o que faz.

* Use nomes pronunciáveis
    * poder pronunciar a declaração de uma variável é importante, pois a programação é uma atividade social.

* Selecione uma palavra por conceito
    * um padrão de nomenclatura é uma grande vantagem aos programadores que precisam usar seus códigos.

### Regra do escoteiro

* Deixe o código mais limpo do que estava antes de mexer nele.
    * Refatore o código, se necessário, ao invés de fazer comentários.

### Regra para comentários

Se você precisar comentar o código é porque algo de errado está acontecendo ou não está legível o suficiente. <br>

Uma regra que precisa ser comentada para ser entendida pode ser abstraída para uma função.

**Bons comentários?**
<br>
* Certos comentários são úteis, mas o único comentário realmente bom é o que você encontra uma forma de não escrevê-lo.
* Obs: a não ser que seja alguma exigência da empresa.
<br>

**Comentários TODO (para fazer)**
<br>
* Quando uma função possui uma implementação necessária naquele ponto específico.
* Ou quando precisa faze uma verificação mais ainda não tem informações suficientes para fazê-la.
* Implementar uma nova funcionalidade que ainda não está definida.
* É esperado que ele deixe de existir o quanto antes.

### Tratamento de erros

"As coisas podem dar errado, e quando isso ocorre, nós, como programadores somos responsáveis por garantir que nosso código faz o que precisa." Michael Feathers
<br>

O tratamento de erros é importante tanto para garantir o funcionamento do programa, quanto para exibir mensagens coerentes sobre o problema encontrado.

* Tratamento de exceções com try-catch
* Mensagens esclarecedoras

## Bibliotecas

### Joi
https://www.npmjs.com/package/joi <br>
https://joi.dev/api/?v=17.9.1
