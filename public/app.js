'use strict';

var button = document.getElementById('valider');
var buttonSearch = document.getElementById('search');
var output = document.getElementById('infoAfficher');
var tab = [];
button.addEventListener('click', function (event) {
	var input = document.getElementById('info').value;

	var ul = document.getElementById('list');

	if (input === "") {
		output.innerHTML = 'Bonjour Père Noël !';
	} else {
		var tableau = input;
		tab.push(input);
		var premier = tableau.charAt(0).toUpperCase();
		var majuscul = premier + input.slice(1).toLowerCase();
		var outputValue = document.getElementById('infoAfficher').value;
		document.getElementById('info').innerHTML = majuscul;
		document.getElementById('infoAfficher').appendChild(document.createElement('li')).innerHTML = majuscul;

		ul.innerHTML = 'Bonjour' + majuscul;

		console.log(tab);
	}
});
buttonSearch.addEventListener('click', function (event) {
	var tablo = [];
	var inputSearch = document.getElementById('infoSearch').value.toLowerCase();
	var filt = document.getElementById('etapeSearch');
	var longeur = inputSearch.length;
	for (var i = 0; i < tab.length; i++) {
		var element = tab[i];
		var filter = element.indexOf(inputSearch);
		console.log(filter);
		if (filter === 0) {
			tablo.push(filter);
			console.log(tablo);
			document.getElementById('etapeSearch').innerHTML = tab;
		}
	}
});
