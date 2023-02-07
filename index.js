const calcular = document.getElementById("calcular");

calcular.addEventListener("click", () => {
    const valorDoEmprestimo = parseInt(document.getElementById("emprestimo").value);
    const taxa = parseInt(document.getElementById("taxa").value);
    const valorPago = parseInt(document.getElementById("valor-pago").value);
    const resultado = document.getElementById("resultado")

    resultado.innerHTML = ""

    let montante = valorDoEmprestimo
    let ultimaParcela = 0
    for (i = 0; montante >= 0; i++) {
        montante = ((1 + (taxa / 100)) * montante - valorPago).toFixed(2)
        console.log(montante)

        if (montante <= 0) {
            ultimaParcela = -montante
            console.log(ultimaParcela)
            resultado.innerHTML += `<div class="infos-resultado">Mês ${[i + 1]} - Última parcela no valor de ${ultimaParcela}. Dívida encerrada!</div>`
        } else {
            resultado.innerHTML += `<div class="infos-resultado">Mês ${[i + 1]} - Pagando ${valorPago} você terá uma dívida atualizada de: R$ ${montante}</div>`
        }
    }

    resultado.innerHTML += `<div class="infos-resultado">Você pagou o total de R$ ${valorPago * [i] + ultimaParcela} </div>`

});