const div = document.querySelector('div');
div.innerHTML = 'Texto Alterado';

// div.outerHTML = "Texto Alterado";
div.insertAdjacentHTML('beforebegin', '<p>Antes do Início<p>');
div.insertAdjacentHTML('afterbegin', '<p>Depois do início</p>');
div.insertAdjacentHTML('beforeend', '<p>Antes do Fim<p/>');
div.insertAdjacentHTML('afterend', '<p>Depois do Fim<p/>');

// Somente texto (sem tags)
console.log(div.innerText);