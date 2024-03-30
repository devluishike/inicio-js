console.log("Trabalhando com Condicionais");

const listaDeDestinos = new Array(
    "Salvador", 
    "São Paulo", 
    "Rio de Janeiro"
);

const idadeComprador = 12;
const estaAcompanhado = true;
let temPassagemComprada = false;
const destino = 'Rio de Janeiro';

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;
let destinoExiste = false;
while (contador < 3) {
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem!");
}else{
    console.log("Desculpe, ocorreu um erro.");
}
