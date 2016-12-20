//function hello(person = 'Ju'){
//	console.log('Bonjour' + person);
//}
//hello('Père Noel');
//hello();
let input = document.getElementById('info').value;
let button = document.getElementById('valider');
let output = document.getElementById('infoAfficher');
let tab = [];
button.addEventListener('click',(event)=>{
console.log('marche');
let input = document.getElementById('info').value;
let ul = document.getElementById('list');
let li = document.createElement('li');
ul.appendChild(li);
li.innerHTML = input;
if(input === ""){
	li.innerHTML = 'Père Noel ! ';
}
tab.push(input);
console.log(tab);
});