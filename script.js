function enviarWhatsApp(event) {
    event.preventDefault();

    const nome = document.getElementById('Nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !mensagem) {
        alert('Olá, eu sou Caio Lucas desenvolvedor Full stack, por favor me diga como posso te ajudar, me envie uma mensagem clicando no botão abaixo.');
        return false;
    }

    const telefone = '5585988933157';
    const texto = `Olá, sou ${nome}.\n\nMensagem:\n${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, '_blank');
    return false;
}

function openProject(url) {
    window.open(url, '_blank');
}