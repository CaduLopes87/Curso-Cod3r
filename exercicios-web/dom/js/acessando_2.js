const lista = document.querySelector('div ul[destino="escritório"]');
console.log('Elemento "ul"............');
console.log('childNodes', lista.childNodes);
console.log('destino', lista.destino);
console.log('getAttribute', lista.getAttribute('destino'));
console.log('hasAtttribute', lista.hasAttribute('destino'));
lista.setAttribute('destino', 'empresa');
lista.setAttribute('status', 'aberto');
lista.removeAttribute('destino');
console.log(lista.dataset);
lista.dataset.urgencia = 4
console.log((lista.getAttribute('data-urgencia')));

// Cuidado

const label = document.querySelector('label');
console.log(label.for);
console.log(label.htmlFor);
console.log(label.getAttribute('for'));

