function iniciarDesafio() {
    let nome = (window.prompt('Qual é o seu nome?'));
    let idade = Number(window.prompt(`Olá, ${nome}! Quantos anos você tem?`));
    if (isNaN(idade)) {
        window.alert('A quantidade que você tem de anos, é sempre um número. Por favor, preencha novamente!')
        iniciarDesafio()
    } else {
    window.alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`);
    }
}