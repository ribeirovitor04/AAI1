let nome = prompt("Digite seu nome:")
let altura = parseFloat(prompt("Digite sua altura em centímetros:"))
let peso = parseFloat(prompt("Digite seu peso:"))

altura /= 100 
let imc = peso / (altura ** 2)

function condicao(imc) {
    if (imc < 16) return "Baixo peso muito grave"
    else if (imc < 17) return "Baixo peso grave"
    else if (imc < 18.5) return "Baixo peso"
    else if (imc < 25) return "Peso normal"
    else if (imc < 30) return "Sobrepeso"
    else if (imc < 35) return "Obesidade grau I"
    else if (imc < 40) return "Obesidade grau II"
    else return "Obesidade grau III"
}

alert(`${nome} possui índice de massa corporal igual a ${imc.toFixed(2)}, sendo classificado como: ${condicao(imc)}`)

