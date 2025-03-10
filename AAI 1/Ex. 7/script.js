let data = prompt("Digite uma data no formato dd/mm/aaaa")
data = data.split("/")

const meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];

alert(`${data[0]} de ${meses[parseInt(data[1]) - 1]} de ${data[2]}`)