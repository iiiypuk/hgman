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

// Функция генерации html кода клавиатуры
function generateKeyboard(layout)
{
	var keyboardHtmlStr = '';

	layout.split('').forEach(function(letter)
	{
		keyboardHtmlStr = keyboardHtmlStr + '<button class="button clear is-marginless" id="' + letter +
			'" onclick="offChar(\'' + letter + '\')"> ' + letter + '</button>';
	})

	let keyboard = document.querySelector("#keyboard");
	keyboard.classList.remove('is-hidden');
	document.querySelector("#keyboard").innerHTML = keyboardHtmlStr;
}

function offChar(letter)
{
	var charButton = document.getElementById(letter);
	charButton.disabled = true; 

	var indices = [];
	var idx = gameWord.split('').indexOf(letter)
	
	if (idx == -1)
	{
		wrong();
		return;
	}
	
	while (idx != -1)
	{
		indices.push(idx);
		idx = gameWord.split('').indexOf(letter, idx + 1);
	}

	indices.forEach(function(item, indices)
	{
		var wordArray = gameAnswered.split('')
		wordArray[item] = letter;
		gameAnswered = wordArray.join('');
		document.querySelector("#word").innerHTML = gameAnswered;
		var wordsAnswered = localStorage.getItem('wordsAnswered');
		localStorage.setItem('wordsAnswered', parseInt(wordsAnswered) + 1);
	})

	if (gameAnswered.split('').indexOf('-') == -1)
	{
		var gamesWon = localStorage.getItem('gamesWon');
		localStorage.setItem('gamesWon', parseInt(gamesWon) + 1);
		alert('You Win');
		document.location.reload(true);
	}
}

function wrong()
{
  if (lives <= 0)
  {
    var gamesFail = localStorage.getItem('gamesFail');
    localStorage.setItem('gamesFail', parseInt(gamesFail) + 1);
    alert('You dead');
    document.location.reload(true);
  }

  lives -= 1;
  document.querySelector("#lives").innerHTML = 'Lives ' + lives;
}


function showPage(element, pageName)
{
	// alert(event.srcElement.id);

	['gameButton', 'statsButton', 'creditsButton'].forEach(function(item)
	{
		document.querySelector("#" + item).classList.remove('active');
	});
	document.querySelector("#" + element.id).classList.add('active');

	document.querySelector("#content").innerHTML = pageName;
}

// game
window.onload = function()
{
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
