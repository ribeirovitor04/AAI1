let cod = parseInt(prompt("Digite seu codigo:"))
let horas = parseInt(prompt("Digite as horas trabalhadas no mes:"))
let turno = prompt("Digite seu turno: \n M - Matutino \n V - Vespertino \n N - Noturno").toUpperCase()
let categ = prompt("Digite sua categoria: \n G - Gerente \n F - Funcionario").toUpperCase()
let salarioMin = parseFloat(prompt("Digite o salario minimo no seu estado"))

const turnosValidos = ["M", "V", "N"]
const categValidas = ["G", "F"]

if (!turnosValidos.includes(turno)) {
    alert ("Turno Invalido")
} else if (!categValidas.includes(categ)) {
    alert ("Categoria Invalida")
} else {
    function horaTrabalhada (turno, categ, salarioMin) {
        switch (categ) {
            case "G":
                return (salarioMin * 4) / 100
            case "F":
                switch (turno) {
                    case "N":
                        return (salarioMin * 2) / 100
                    case "M":
                    case "V":
                        return (salarioMin * 1) / 100 
                }
        }
    }
    
    let salarioInicial = horaTrabalhada(turno, categ, salarioMin) * horas
    
    function alimentacao (salarioInicial) {
        if (salarioInicial <= 800) {
            return (salarioInicial * 25) / 100
        } else if (salarioInicial <= 1200) {
            return (salarioInicial * 20) / 100 
        } else {
            return (salarioInicial * 15) / 100
        }
    }
    
    let auxilioAlimentacao = alimentacao(salarioInicial)
    
    alert(
        `
        Codigo: ${cod}
        Horas trabalhadas: ${horas}h
        Valor da hora trabalhada: R$${horaTrabalhada(turno, categ, salarioMin).toFixed(2)}
        Salario inicial: R$${salarioInicial}
        Auxilio alimentacao: R$${auxilioAlimentacao.toFixed(2)}
        Salario Final: R${(salarioInicial + auxilioAlimentacao).toFixed(2)}`
    )
}

