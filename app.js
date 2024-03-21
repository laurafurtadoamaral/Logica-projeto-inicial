alert("Bem vinda ao jogo do número secreto");
let numeroMaximo = 100;
let numeroSecreto = parseInt (Math.random() * numeroMaximo + 1);
console.log(`Numero secreto = ${numeroSecreto}`);
console.log("Numero secreto = " + numeroSecreto);
let chute;
let tentativas = 1;
console.log("Seu chute foi: " + chute);
console.log("Resultado da comparação: ", chute == numeroSecreto);

while (chute != numeroSecreto) {
    chute = prompt (`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert ("O número secreto é menor que " +chute);
        } else {
            alert ("O número secreto é maior que " +chute);
        }
        tentativas = tentativas + 1;
   }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
