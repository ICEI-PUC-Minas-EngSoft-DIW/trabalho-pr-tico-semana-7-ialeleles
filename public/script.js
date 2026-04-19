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

let sobra = renda - total;
let mensagem = "";
if (total > renda) {
    mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
    if (sobra >= (0.3 * renda)) {
        mensagem = "✅ Ótimo: boa margem de sobra.";
    } else {
        mensagem = "🙂 Ok: dá para melhorar a sobra."
    }
}

console.log(" RESULTADO");
console.log("Nome:", nome);
console.log("Renda:", renda.toFixed(2));
console.log("Total de despesas:", total.toFixed(2));
console.log("Sobra:", sobra.toFixed(2));
console.log(mensagem);

alert(
    " RESULTADO" +
    "\nNome: " + nome +
    "\nRenda: " + renda.toFixed(2) +
    "\nTotal de despesas: " + total.toFixed(2) +
    "\nSobra: " + sobra.toFixed(2) +
    "\n" + mensagem
);