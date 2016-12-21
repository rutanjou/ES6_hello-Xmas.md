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
	let tablo = [];
	let inputSearch = document.getElementById('infoSearch').value.toLowerCase();
	let filt = document.getElementById('etapeSearch');
	let longeur = inputSearch.length;
	for(var i=0; i<tab.length; i++){
		let element = tab[i];
		let filter = element.indexOf(inputSearch);
		console.log(filter);
		if(filter === 0){
			tablo.push(filter);
			console.log(tablo);
			document.getElementById('etapeSearch').innerHTML = tab;
		}
	}
});