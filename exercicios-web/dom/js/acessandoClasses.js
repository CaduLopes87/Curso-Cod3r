const div = document.querySelector('div');
const classes = div.classList;

classes.add('destaque');
classes.remove('destaque');
classes.toggle('destaque');

console.log(classes.contains('destaque'));
console.log(classes.length);
classes.toggle('destaque');
console.log(classes.length);

classes.add('destaque1');
classes.add('destaque2');
console.log(classes.length);

for(let c of classes) {
    console.log(c)
}