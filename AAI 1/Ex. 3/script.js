let atividade = parseFloat(prompt("Nota atividade prática:"))
let prova = parseFloat(prompt("Nota prova do semestre:"))
let trabalho = parseFloat(prompt("Nota trabalho teórico:"))


let media = ((atividade * 2) + (prova * 5) + (trabalho * 3)) / 10

function clasf(media) {
    if (media < 0 || media > 10) return "Nota inválida"
    else if (media <= 5) return "F"
    else if (media <= 6) return "E"
    else if (media <= 7) return "D"
    else if (media <= 8) return "C"
    else if (media <= 9) return "B"
    else return "A"
}

alert(`A média do aluno é ${media.toFixed(2)} e sua classificação é ${clasf(media)}`)

