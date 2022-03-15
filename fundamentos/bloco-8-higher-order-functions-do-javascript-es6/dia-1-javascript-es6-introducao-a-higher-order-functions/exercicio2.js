const checagem = (apostado, sorteado) => apostado === sorteado;

const resultadoSorteio = (apostado, callback) => {
    const sorteado = Math.floor(Math.random() * 5 + 1);
    
    return callback(apostado, sorteado) ? "Parabéns você ganhou" : "Tente novamente"; 
}

console.log(resultadoSorteio(4, checagem));