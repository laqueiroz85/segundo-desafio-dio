var vitorias, derrotas, ranking,calculaVitorias;

vitorias = prompt ("digite a quantidade de vitórias: ");
console.clear()
derrotas = prompt ("digite a quantidade de derrotas: ");
console.clear()

let resultado = calculaVitorias (vitorias, derrotas)

function calculaVitorias (vitorias, derrotas){
 let vitoria = vitorias - derrotas
 return vitoria
}

if (resultado <= 10){
    ranking = "Ferro"
}else if (resultado > 10 && resultado <= 20){
  ranking = "Bronze"
}else if (resultado > 20 && resultado <= 50){
  ranking = "Prata"
}else if (resultado > 50 && resultado <= 80){
  ranking = "Ouro"
}else if (resultado > 80 && resultado <= 90){
  ranking = "Diamante"
}else if (resultado > 90 && resultado <= 100){
  ranking = "Lendário"
}else if (resultado >= 101){
  ranking = "Imortal"
} 


console.log("Seu total de vitorias são: "+resultado,"e seu nível é "+ranking)