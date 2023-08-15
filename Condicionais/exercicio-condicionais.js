//na compra de um determinado produto, o cliente consegue um desconto de 10% caso pague à vista.
//caso queira parcelar, a loja parcela em até 6x sem juros, mas sem desconto.
//imprima na tela uma mensagem explicando para o cliente como ele tem que pagar, incluindo o valor da parcela.

const valorCompra = 100;
const numeroParcelas = 1;

if (numeroParcelas === 1){
    //a vista
    const desconto = valorCompra * 0.10; //desconto de 10%
    const compraDesconto = valorCompra - desconto;
    console.log(`Você pagará R$${compraDesconto.toFixed(2)}, pois à vista tem 10% de desconto`);
} else {
    //parcelado
    const valorParcelado = valorCompra / numeroParcelas;
    console.log(`Você irá pagar ${numeroParcelas} parcelas de R$${valorParcelado.toFixed(2)}.`);
}