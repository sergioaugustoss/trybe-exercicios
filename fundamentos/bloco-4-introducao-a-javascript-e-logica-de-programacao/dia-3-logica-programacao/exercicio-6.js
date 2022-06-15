let torre = "torre";
let cavalo = "cavalo";
let bispo = "bispo";
let rei = "rei";
let rainha = "rainha"
let peão = "peão";
let peca = "peão"

if (peca === torre){
    console.log("Movimento reto");
} else if (peca === cavalo){
    console.log("Movimento em L");
} else if (peca === bispo){
    console.log("Movimento em diagonal");
} else if (peca === rei){
    console.log("Qualquer lado, uma casa");
} else if (peca ===rainha){
    console.log("Qualquer lado, quantas casas quiser");
} else{
    console.log("Apenas para frente, uma casa por turno");
}