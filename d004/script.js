function comprarProduto() {
    let nomeP = window.prompt('Qual produto você está comprando?');
    let preco = Number(window.prompt(`Qual é o preço do(a) ${nomeP} que você está comprando?`));
    let pag = Number(window.prompt(`Qual foi o valor que você deu para pagar o(a) ${nomeP}?`));
    let troco = pag - preco;
    if (isNaN(preco && pag)) {
        window.alert('Você não pode calcular caracteres que não sejam números! Preencha corretamente.')
    } else {
        if (troco < 0) {
            saldoDev = Math.abs(troco);
            window.alert(`Você comprou ${nomeP} que custou R$${preco}.` + `\n` +  `Deu R$${pag} em dinheiro e está devendo R$${saldoDev}.`)
        } else {
            window.alert(`Você comprou ${nomeP} que custou R$${preco}.` + `\n` +  `Deu R$${pag} em dinheiro e vai receber R$${troco} de troco.` + `\n` + `Volte sempre.`)
        }
    }
}