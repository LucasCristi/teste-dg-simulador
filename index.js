const calcular = document.getElementById("calcular");

calcular.addEventListener("click", () => {
    const valorDoEmprestimo = parseInt(document.getElementById("emprestimo").value);
    const taxa = parseInt(document.getElementById("taxa").value);
    const valorPago = parseInt(document.getElementById("valor-pago").value);
    const resultado = document.getElementById("resultado")
    
    const dividaTotal = (valorDoEmprestimo * (taxa/100) + valorDoEmprestimo).toFixed(3)
    const valorAtualizadoAposPagamento = (dividaTotal - valorPago).toFixed(3)
    const prazoCalculado = valorAtualizadoAposPagamento / valorPago
    
    resultado.innerHTML = ""

    for(i = 0; i <= prazoCalculado; i++){
    
        let mesesPagosAcumulados = valorPago * [i]
        let dividaTotalAposPagamentos = dividaTotal - mesesPagosAcumulados
        console.log(dividaTotalAposPagamentos)

        if(dividaTotal > dividaTotalAposPagamentos){
            dividaTotalAposPagamentos = dividaTotalAposPagamentos * taxa/100 * [i] + dividaTotalAposPagamentos
        }
        
        resultado.innerHTML += `<div class="infos-resultado">Mês ${[i+1]} - Pagando ${valorPago} você terá uma dívida atualizada de: R$ ${dividaTotalAposPagamentos}</div>`

    }
   
});