let idade = parseInt(prompt("Digite sua idade:"))

function faixa(idade) {
    if (idade < 15) return "Criança"
    else if (idade < 30) return "Jovem"
    else if (idade < 60) return "Adulto"
        else return "Idoso"
}
    alert(`Você é classificado como: ${faixa(idade)}`)