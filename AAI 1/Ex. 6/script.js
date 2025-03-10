let n1 = parseFloat(prompt("Numero 1: "))
let op = prompt("Escolha soma ou subtacao").toLowerCase()
let n2 = parseFloat(prompt("Numero 2: "))

var casos = {
    "soma": n1 + n2,
    "subtracao": n1 - n2
}

if (!(op in casos)) {
    alert ("Operacao indisponivel")
} else {
    alert(`O resultado é: ${casos[op]}`)
}