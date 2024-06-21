const prompt = require("prompt-sync")()

calcularElo()





function pegarVitorias() {
    vitoriasDoJogador = vitorias = prompt("Quantas vitoras você teve jogador? ")
}

function pegarDerrotas(){
    derrotasDoJogador = derrotas = prompt("Quantas derrotas você teve jogador?")
}

function calcularElo() {
    const frase = "O Herói tem de saldo de "
    const frase2 = " está no nível de "
    pegarVitorias()
    pegarDerrotas()
    let saldoRankeadas = vitorias - derrotas

    if(saldoRankeadas <= 10){
        console.log(frase + saldoRankeadas + frase2 + "Ferro")
    }else if (saldoRankeadas >= 11 && saldoRankeadas <= 20){
        console.log(frase + saldoRankeadas + frase2 + "Bronze")
    }else if (saldoRankeadas >= 21 && saldoRankeadas <= 50){
        console.log(frase + saldoRankeadas + frase2 + "Prata")
    }else if (saldoRankeadas >= 51 && saldoRankeadas <= 80){
        console.log(frase + saldoRankeadas + frase2 + "Ouro")
    }else if (saldoRankeadas >= 81 && saldoRankeadas <= 90){
        console.log(frase + saldoRankeadas + frase2 + "Diamante")
    }else if (saldoRankeadas >= 91 && saldoRankeadas <= 100){
        console.log(frase + saldoRankeadas + frase2 + "Lendário")
    }else if (saldoRankeadas >= 101) {
        console.log(frase + saldoRankeadas + frase2 + "Imortal")
    }
}