'use strict';

//function hello(person = 'Ju'){
//	console.log('Bonjour' + person);
//}
//hello('Père Noel');
//hello();
var input = document.getElementById('info').value;
var button = document.getElementById('valider');
var output = document.getElementById('infoAfficher');
var tab = [];
button.addEventListener('click', function (event) {
	console.log('marche');
	var input = document.getElementById('info').value;
	var ul = document.getElementById('list');
	var li = document.createElement('li');
	ul.appendChild(li);
	li.innerHTML = input;
	if (input === "") {
		li.innerHTML = 'Père Noel ! ';
	}
	tab.push(input);
	console.log(tab);
});
