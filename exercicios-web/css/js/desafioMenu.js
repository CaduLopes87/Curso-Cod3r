let oldURL = '';
let newURL = '';

if(oldURL === undefined) oldURL = '#inicio';
if(newURL === undefined) newURL = '#inicio';

window.onhashchange = function (e) {
    oldURL = e.oldURL.split('#')[1];
    newURL = e.newURL.split('#')[1];
    


    console.log(oldURL, newURL)

    const oldLink = document.querySelector(`.menu a[href='#${oldURL}']`);
    const newLink = document.querySelector(`.menu a[href='#${newURL}']`);

    oldLink && oldLink.classList.remove('selected');
    newLink && newLink.classList.add('selected')
}