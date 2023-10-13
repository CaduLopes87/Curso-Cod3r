function navegarEm5s(e) {
    e.preventDefault();
    console.log('saindo em 5s...');
    setTimeout(() => {
        const link = e.target;
        window.location.href = link.href;
}, 5000);
}

const botao = document.querySelector('[espera-um-pouco]');

botao.onclick = navegarEm5s;