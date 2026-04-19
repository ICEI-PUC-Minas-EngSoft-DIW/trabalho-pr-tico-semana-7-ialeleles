console.log("Simulador simples de orçamento pessoal")

let nome = prompt("Digite seu nome: ")

let renda = Number(prompt("Digite sua renda: "))

while (isNaN(renda))
{renda = Number(prompt("Digite sua renda novamente: "))}

let despesas = Number(prompt("Digite a quantidade de despesas: "))

while (isNaN(despesas))
{despesas = Number(prompt("Digite a quantidade de despesas novamente: "))}
if (despesas < 1) {
    despesas = 1;
} if (despesas > 5) {
    despesas = 5;
}

let total = 0;

for (let i = 1; i <= despesas; i++) {
    let valor = Number(prompt("Digite o valor da despesa " + i + ":"));
    while (isNaN(valor) || valor < 0) {
        valor = Number(prompt("Valor inválido. Digite novamente a despesa " + i + ":"));
    }
    total = total + valor;
}