// let dados = ["Paulo", 22, 1.70];
// let nomes = ["Maria", "José", [1, 2, 3]];

// console.log(nomes);
// nomes.shift();
// console.log(nomes);

// nomes.unshift("Ricardo", "Paula");
// console.log(nomes);

// console.log(dados)

// console.log(dados[0])
// console.log(Nomes[1])
// console.log(dados.lenght)
// console.log(dados[dados.lenght - 1])

// let nome = "Ricardo"
// nomes.push(nome, "Paula")
// console.log(nomes)


// let ultimoElementos = nomes.pop();
// console.log(ultimoElementos);
// console.log(nomes);

// dados.splice(0, 1)
// console.log(dados)

// const dados = ["Paulo", 22, 1.70]

// dados.splice(1, 1, "Recife")
// console.log(dados)

// let animais = ["Cachorro", "Gato", "Papagaio"];

// animais.push("Tartaruga");
// animais.shift();
// animais.unshift("Coelho");
// animais.splice(2, 1, "Hamster");
// console.log(animais.length);
// console.log(animais[1]);
// console.log(animais);




// let cores = ["Vermelho", "Verde", "Azul"];
// cores.push("Amarelo", "Roxo");
// cores.pop();
// cores.splice(1, 1, "Laranja", "Marrom");
// let novasCores = cores.slice(0, 2);
// console.log(novasCores);
// let coresNovas = cores.join(", ");
// cores.reverse();
// console.log(cores);



// let cores = ["Vermelho", "Azul", "Verde"];

// for (let i of cores) {
//     console.log(i);
// }


for (let i = 0; i < cores.lenght; i++) {
    console.log(cores[i]);

    if (i % 2 == 0) {
        cores[i] = "Vermelho"
    } else {
        cores[i] = "Verde"
    }
}