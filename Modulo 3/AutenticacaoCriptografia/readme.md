# Criptografia

- comunicação segura
- estabelecer confiança entre duas partes
- comunicando de forma segura em um canal que, necessariamente, não é seguro

## Princípios

- **confidenciabilidade:** somente o remetente e destinatário consegue ver o conteúdo da mensagem.
- **integridade:** mensagem não é modificada ao longo do caminho (com hash)
- **autenticação:** garantir que a mensagem chegue da forma como foi enviada;
    - o destinatário tem certeza de que a mensagem é original;
    - reduz as chances de remetentes mal intencionados que se fazem passar pelo remetente real.
    - ex: assinatura digital.
- **não-repúdio:** destinatário consegue provar para outras pessoas que essa mensagem é original.
    - ex: assinatura assimétrica.
<br>

# Teoria da informação
- uma mesma informação pode ser representada de mais de uma forma
    - ex: 137 ou centro e trinta e sete
- a informação é abstrata. A representação é concreta.
- na criptografia trabalhamos com a representação.

## Ofuscação

- Procedimento secreto para transformar dados de forma que não possam ser entendidos. Junto com um procedimento também secreto para recuperar a informação original.
<br>
- É a origem da criptografia.
    - ex: cifra de Caesar
- Não trás segurança. Uma vez que o procedimento é descoberto, todas as mensages do passado e presente podem ser decifradas.
    - ex: Blu-ray
    - 09 F9 11 02 9D 74 E3 5B D8 41 56 C5 63 56 88
    
## Esteganografia

- Um forma de ocultar informação de forma que ela não seja notada.
- Muito comum em fotos.
- Não trás segurança.
- A informação está presente porém tem que saber como decodificá-la.
Ex: impressora
    - imprime pontos imperceptíveis ao longo da folha que contém todas as informações da impressora.

## Criptografia simétrica

- É um par de procedimentos (E e D) em que é possível encriptar uma mensagem M com uma chave K, gerando um testo cifrado C indistinguível de aleatório, e é possível reverter apenas com conhecimento da chave K.
<br>

Ou seja:
- E(M,K) = C
- D(C,K) = M

### Propriedades

- Mesmo se você souber a mensagem original e a mensagem cifrada, não é possível deduzir a chave.
    - a senha não pode ser recuperada de forma alguma.
- A mesma chave pode ser reutilizada para muitas mensagens.
- Os procedimentos são publicamente conhecidos. Elese são alvo de muita pesquisa.
- Se você descartar a chave, é impossível recuperar a mensagem original.
- Exemplo: AES-CBC

## Hash (H)
### Função de sentido único
-  um  que é fácil de ser realizado. Mas dado apnas o resultado do procedimento é muito dfícil reverter.

![imagemCPF](./imagens/Imagem%20do%20WhatsApp%20de%202023-10-22%20à(s)%2009.54.41_4b41ae56.jpg)
<br><br>

### Hash criptográfico

- Para uma mensagem M é possível calcular H(M) rapidamento.
- Dado um H(X), não é possível descobrir quem é X.
- H(X) é indistinguível de dados aleatórios.
- Não é possível encontrar X e Y que tenham o mesmo hash (H(X) = H(Y)).
- Ex: SHA-256.
- Uma aplicação: 
 - verificar integridade ou posse.
 - registro de código, patente

### Assinatura digital simétrica
- Um procedimento de assinar e um procedimento de verificar.
- A assinatura é calculada a partir do Hash da mensagem e de uma chave secreta.
- Esta assinatura não revela nada sbre a mensagem original.
- De posse da mensagem original, da assinatura e da chave é possível verificar se a assinatura é legítima.
- Uma modificação na mensagem invalida a assinatura.
- Exemplo: HMAC

### Assinatura digital assimétrica
- Uma chave privada para assinar e uma chave pública para verificar.
- A chave pública é divulgada abertamente.
- Aenas aquele que possui a chave privada pode assinar.
- Qualquer um consegue validar uma assinatura.
- Muito comum em documentos.

<br>

# Bibliotecas

### bcript

Documentação <br>
https://www.npmjs.com/package/bcrypt
<br>
````
npm install bcrypt
````
<br>

Custo de processamento 10 já é considerado uma forma segura de criptografia.
````
rounds=10: ~10 hashes/sec
````

### json web token
- gera tokens de autenticação <br>
https://www.npmjs.com/package/jsonwebtoken

````
npm install jsonwebtoken
````

### validação de token

https://jwt.io/
<br>

- para validação no site é necessário ter o token e a senha do sistema