//dividir a compra em 12x
//2 a 6 não tem juros
// 7 e 12x taxa de juros 1%
//M = C* (1+i)**n
//M ->valor da compra com juros
//C -> valor da compra inicial
//i -> taxa de juros
//n -> nº parcelas


const valorCompra = 100;
const numeroParcelas = 0;

if (numeroParcelas === 1){
    //a vista
    const desconto = valorCompra * 0.10; //desconto de 10%
    const compraDesconto = valorCompra - desconto;
    console.log(`Você pagará R$${compraDesconto.toFixed(2)}, pois à vista tem 10% de desconto`);
} else if (numeroParcelas >= 2 && numeroParcelas <= 6){
    //parcelado entre 2x e 6x sem juros
    //const valorParcelado = (valorCompra / numeroParcelas).to.Fixed(2); -> é possível utilizar assim também
    const valorParcelado = valorCompra / numeroParcelas;
    console.log(`Você pagará ${numeroParcelas}x sem juros de R$${valorParcelado.toFixed(2)}.`);
} else if (numeroParcelas >= 7 && numeroParcelas <= 12){
    const valorComJuros = valorCompra *(1 + 0.01)** numeroParcelas;
    const valorParcelado = valorComJuros / numeroParcelas;
    console.log(`Você pagará ${numeroParcelas}x de R$${valorParcelado.toFixed(2)}, totalizando R$${valorComJuros.toFixed(2)} devido a incidência de juros.`);
} else {
    console.log('Não temos essa opção de parcelamento.');
}