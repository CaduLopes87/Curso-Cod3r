document.querySelector('#primeiro').classList.add('destaque');

const selecionar = seletor => {
    document.querySelectorAll(seletor).forEach(e => e.classList.add('destaque'));
}
const deselecionar = seletor => {
    document.querySelectorAll(seletor).forEach(e => e.classList.remove('destaque'));
}

selecionar('div')

deselecionar('*');

selecionar('.terceiro.ultimo');

deselecionar('*');

selecionar(':not(#primeiro)');

deselecionar('*');

selecionar(':nth-child(1)');

deselecionar('*');

selecionar('div:nth-of-type(1)');

deselecionar('*');

selecionar('[wb-attrib]');