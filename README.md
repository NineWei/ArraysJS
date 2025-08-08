# ArraysJS

### Variáveis Simples
Armazena um único valor

### Variáveis Compostas
Armazenam múltiplos valores  
1Pode ser um Array ou objeto  
Cria array com colchetes []  
Aempre coloca a vírgula para delimitar um elemento com outro

### Propriedades

#### Lenght

Ele retorna o número de elementos presentes na array.  
Propriedade dentro do array, acessa ele usando o .lenght

```javascript
let dados = ["Paulo", 22, 1.70]
console.log(dados.lenght)
```

No Js não aceita índices negativos.

### Métodos array

####Push()
Adiciona um ou mais elementos ao final do array e retorna o novo comprimento do array.

```javascript
let nomes = ["Maria", "José", [1, 2, 3]]
let nome = "Ricardo"
nomes.push(nome,"Paula")
console.log(nomes)
```

#### Pop()
Remove o último elemento do array.

```javascript
let ultimoElementos = nome.pop()
console.log(ultimoElementos)
console.log(nomes)
```

#### Shift()
Remove o primeiro elemento do array, uma vez que remove o 1º elemento, os demais voltam uma posição.

```javascript
let dados = ["Paulo", 22, 1.70];
let nomes = ["Maria", "José", [1, 2, 3]];

console.log(nomes);
nomes.shift();
console.log(nomes);
```

#### Unshift()
Adiciona um ou mais elementos ao **início do array** e retorna o novo comprimento do array.

```javascript
let dados = ["Paulo", 22, 1.70];
let nomes = ["Maria", "José", [1, 2, 3]];

console.log(nomes);
nomes.shift();
console.log(nomes);

nomes.unshift("Ricardo", "Paula");
console.log(nomes);
```

#### Splice()
Altera o conteúdo de um array, adicionando, removendo ou substituindo elementos.  
Tem 3 parâmetros:  
-Índice de Início: Posição onde a alteração começa.
-Número de Elementos a Remover: Quantos elementos remover. Se 0, nada é removido.
-Elementos a Adicionar (opcional): Elementos para adicionar no local.  

```javascript

```

#### Slice()
Retorna uma cópia superficial de uma parte de um array, selecionada desde o início até o fim (fim não incluído). O array original não é modificado.  

Índice de Início: Posição onde a cópia começa (inclusivo).
Índice de Fim (opcional): Posição onde a cópia termina (exclusivo).  
Se não for informado, o array é copiado até o final.  

```javascript

```

---

#### Atividade

Primeiro, crie um array chamado cores contendo os seguintes elementos:
Vermelho, Verde, Azul, Amarelo.
Em seguida, acesse e exiba no console o elemento na posição 3.  

```javascript
let cores = ["Vermelho", "Verde", "Azul", "Amarelo"];

console.log(cores[3]);
```

Saída:  
Amarelo 

---

Crie um array chamado animais contendo os seguintes elementos:
Cachorro, Gato, Papagaio. Em seguida:  

1. Adicione o elemento Tartaruga ao final do array.
2. Remova o primeiro elemento e adicione o elemento Coelho no início.
3. Depois, substitua o elemento na posição 2 por Hamster.
4. Exiba o comprimento atual do array.
5. Acesse e exiba no console o elemento na posição 1.
6. Finalmente, exiba o array final no console.  

```javascript
let animais = ["Cachorro", "Gato", "Papagaio"];

animais.push("Tartaruga");
animais.shift();
animais.unshift("Coelho");
animais.splice(2, 1, "Hamster");
console.log(animais.length);
console.log(animais[1]);
console.log(animais);
```

Saída:  
4
Gato
[ 'Coelho', 'Gato', 'Hamster', 'Tartaruga' ]

---

Crie um array chamado cores contendo as seguintes cores, Vermelho, Verde, Azul.

1. Adicione as cores Amarelo e Roxo ao final do array.
2. Em seguida, remova a última cor.
3. Use o método splice para remover "Verde" e adicionar "Laranja" e "Marrom" em seu lugar.
4. Crie um novo array chamado novasCores contendo as primeiras duas cores do array cores.
5. Use o método join para criar uma string com todas as cores do array cores, separadas por uma vírgula.
6. Inverta a ordem dos elementos no array cores.
7. Exiba os arrays cores e novasCores, e a string resultante no console.

```javascript
let cores = ["Vermelho", "Verde", "Azul"];
cores.push("Amarelo", "Roxo");
cores.pop();
cores.splice(1, 1, "Laranja", "Marrom");
let novasCores = cores.slice(0, 2);
console.log(novasCores);
let coresNovas = cores.join(", ");
cores.reverse();
console.log(cores);
```

Saída:  
[ 'Vermelho', 'Laranja' ]
[ 'Amarelo', 'Azul', 'Marrom', 'Laranja', 'Vermelho' ]

### Percorrendo arrays com **FOR**

#### For ... of
Serve para percorrer estruturas, cada elemento do array.  

```javascript
let cores = ["Vermelho", "Azul", "Verde"];

for (let i of cores) {
    console.log(i);
}
```

#### For
Pode percorrer o array usando o índice para percorrer cada um dos elementos. Então usa o comprimento como condição de parada do FOR.


```javascript
for (let i = 0; i < cores.lenght; i++) {
    console.log(cores [i]);
}
```
