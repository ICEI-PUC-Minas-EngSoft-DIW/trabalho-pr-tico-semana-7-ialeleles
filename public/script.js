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
