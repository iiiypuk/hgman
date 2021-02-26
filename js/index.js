'use strict';

// keyboard layouts
const keyboardLayouts = {
	'usQwertyKeyboard' : 'abcdefghijklmnopqrstuvwxyz'.toUpperCase(),
	'ruQwertyKeyboard' : 'йцукеёнгшщзхъфывапролджэячсмитьбю'.toUpperCase()
}

const words = [
	'google', 'speed', 'design', 'forest', 'forever', 'love',
	'horizon', 'defect'
];

// game variables
let gameWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
let gameAnswered = new Array(gameWord.length + 1).join('-');
let lives = 6;

// init keyboard
function generateKeyboard(layout)
{
	let keyboardHtmlStr = '';

	layout.split('').forEach(function(letter)
	{
		keyboardHtmlStr = keyboardHtmlStr + '<button class="button clear is-marginless" id="' + letter +
			'" onclick="letterClick(\'' + letter + '\')"> ' + letter + '</button>';
	})

	let keyboard = document.querySelector("#keyboard");
	keyboard.classList.remove('is-hidden');
	document.querySelector("#keyboard").innerHTML = keyboardHtmlStr;
}

// letter click action
function letterClick(letter)
{
	let charButton = document.getElementById(letter);
	charButton.disabled = true; 

	let indices = [];
	let idx = gameWord.split('').indexOf(letter)
	
	if (idx == -1)
	{
		wrongLetter();
		
		updateStats('stLetterClick');
		return;
	}
	
	while (idx != -1)
	{
		indices.push(idx);
		idx = gameWord.split('').indexOf(letter, idx + 1);
	}

	indices.forEach(function(item, indices)
	{
		let wordArray = gameAnswered.split('')
		wordArray[item] = letter;
		gameAnswered = wordArray.join('');
		document.querySelector("#word").innerHTML = gameAnswered;
		
		updateStats('stCorrLetter');
	})

	if (gameAnswered.split('').indexOf('-') == -1)
	{
		updateStats('stWinWords');

		// display win scene
		document.querySelector('#keyboard').innerHTML = '\
		<img src="https://icongr.am/clarity/happy-face.svg?size=128&color=28bd14">\
		<h1 class="text-success">Your winner!!</h1>\
		<button class="button error" onclick="document.location.reload(true);"\
		>Restart game</button>';
	}
}

// action by wrong letter
function wrongLetter()
{
  if (lives <= 0)
  {
    updateStats('stTotalGames');

    // display hidden word
    document.querySelector("#word").innerHTML = gameWord;
    document.querySelector("#word").classList.add('text-success');

    // display lose scene
    document.querySelector('#keyboard').innerHTML = '\
		<img src="https://icongr.am/clarity/sad-face.svg?size=128&color=d43939">\
		<h1 class="text-error">Your lose!!</h1>\
		<button class="button error" onclick="document.location.reload(true);"\
		>Restart game</button>';
  }

  lives -= 1;
  document.querySelector("#lives").innerHTML = 'Lives ' + lives;
}

// display tab content
function showPage(element, pageName)
{
	// alert(event.srcElement.id);

	['gameButton', 'statsButton', 'creditsButton'].forEach(function(item)
	{
		document.querySelector("#" + item).classList.remove('active');
	});
	document.querySelector("#" + element.id).classList.add('active');

	document.querySelector("#content").innerHTML = pageName;

	if (pageName == pageStatistics) { updateStatsPage(); }
}

// game init
window.onload = function()
{
	updateStats('stCheck');

	generateKeyboard(keyboardLayouts['usQwertyKeyboard']);
	document.querySelector('#lives').innerHTML = 'Lives ' + lives;
	console.log('Word:', gameWord.toLowerCase());
	document.querySelector('#word').innerHTML = gameAnswered;

	if (window.screen.availWidth <= 599)
	{
		document.querySelector('#lives').classList.remove('error');
		document.querySelector('#lives').classList.add('dark');
	}
}
