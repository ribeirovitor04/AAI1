let distancia = parseFloat(prompt("Distancia em KM: "));
let gasolina = parseFloat(prompt("Digite o valor do litro da gasolina:"))
let pecas = parseInt(prompt("Quantidade de Pecas: "));
let regiao = parseInt(prompt("Digite o numero da regiao: \n 1 - Sul \n 2 - Sudeste \n 3 - Centro-Oeste "));
let rastreio = prompt("Deseja rastreio? \n N - Não \n S - Sim").toUpperCase();

function frete(regiao, pecas) {
    let extra = pecas - 1000;
    if (pecas <= 1000) {
        switch (regiao) {
            case 1: return pecas
            case 2: return pecas * 1.2
            case 3: return pecas * 1.3
            default: return 0;
        }
    } else {
        switch (regiao) {
            case 1: return 1000 + (extra * 0.9)
            case 2: return 1200 + (extra * 1.056)
            case 3: return 1300 + (extra * 1.131)
            default: return 0;
        }
    }
}

let calculaFrete = frete(regiao, pecas)
let valorRastreio = rastreio === "S" ? 200 : 0
let valorPorKm = distancia * gasolina
let total = calculaFrete + valorRastreio + valorPorKm

alert(
    `
    Valor do rastreio: R$${valorRastreio} 
    Valor do frete: R$${calculaFrete.toFixed(2)} 
    Valor do frete pelas pecas: R$${(calculaFrete / pecas).toFixed(2)}
    Valor do frete por quilometro: R$${valorPorKm.toFixed(2)}
    Valor total: R$${(total).toFixed(2)} `
)