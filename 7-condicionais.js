console.log("Trabalhando com Condicionais");

const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");

const idadeComprador = 12;
const estaAcompanhado = true;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhado == true) {
  console.log("Compra efetuada, Boa Viagem!");
  listaDeDestinos.splice(2, 1);
  console.log(listaDeDestinos);
} else {
  console.log("Não é maior de idade e a venda não é permitida.");
}

console.log("Embarque: \n");

if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem!");
} else {
    console.log("Você não pode embarcar.")
}
