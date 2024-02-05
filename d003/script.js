function antDep() {
    let nInt = Number(window.prompt('Digite um número inteiro qualquer'))
    let menor = nInt - 1;
    let maior = nInt + 1;
    window.alert(`Antes de ${nInt}, temos o número ${menor}.` + `\n` + `Depois de ${nInt}, temos o número ${maior}.`);
}