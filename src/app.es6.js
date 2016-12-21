let button = document.getElementById('valider');
let buttonSearch = document.getElementById('search');
let output = document.getElementById('infoAfficher');
const tab = [];
button.addEventListener('click',(event)=>{
let input = document.getElementById('info').value;

let ul = document.getElementById('list');


if(input === ""){
	output.innerHTML ='Bonjour Père Noël !';
}
else{
	let tableau = input;
	tab.push(input);
	let premier = tableau.charAt(0).toUpperCase();
	let majuscul = premier + input.slice(1).toLowerCase();
	let outputValue = document.getElementById('infoAfficher').value;
	document.getElementById('info').innerHTML = majuscul;
	document.getElementById('infoAfficher').appendChild(document.createElement('li')).innerHTML= majuscul;

ul.innerHTML = 'Bonjour' + majuscul;

console.log(tab);
}
});
buttonSearch.addEventListener('click',(event)=>{
	let inputSearch = document.getElementById('infoSearch').value;
	
});