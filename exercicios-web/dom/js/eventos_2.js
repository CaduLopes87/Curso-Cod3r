const item = document.querySelector('div');

item.style.position = 'absolute';

item.onmousemove = e => {
    const item = e.target;

    item.style.cursor = 'move';
    if (e.buttons) {
        item.style.top = `${e.clientY - (item.clientHeight / 2)}px`
        e.target.style.left = `${e.clientX - (item.clientWidth / 2)}px`
    }
}