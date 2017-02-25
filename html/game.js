var words = ['google', 'speed', 'window', 'horizon'];

var lives = 6;
var gameWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
var gameAnswered = new Array(gameWord.length + 1).join('-');

window.onload = function()
{
  console.log(gameWord) // for DEBUG
  document.getElementById("WORD").innerHTML = gameAnswered;
  document.getElementById("lives").innerHTML = 'Lives ' + lives;

  // init storage
  var storageNames = ['gamesWon', 'wordsAnswered', 'gamesFail'];
  storageNames.forEach(function(item)
  {
    if(null == localStorage.getItem(item))
      localStorage.setItem(item, 0);
  })
}

function wrong()
{
  if (lives <= 0)
  {
    var gamesFail = localStorage.getItem('gamesFail');
    localStorage.setItem('gamesFail', parseInt(gamesFail) + 1);
    alert('You dead');
    return;
  }

  lives -= 1;
  document.getElementById("lives").innerHTML = 'Lives ' + lives;
}

function offChar(char)
{
  var charButton = document.getElementById(char);
  charButton.disabled = true; 

  var indices = [];
  var idx = gameWord.split('').indexOf(char)
  
  if (idx == -1)
  {
    wrong();
    return;
  }
  
  while (idx != -1)
  {
    indices.push(idx);
    idx = gameWord.split('').indexOf(char, idx + 1);
  }

  indices.forEach(function(item, indices)
  {
    var wordArray = gameAnswered.split('')
    wordArray[item] = char;
    gameAnswered = wordArray.join('');
    document.getElementById("WORD").innerHTML = gameAnswered;
    var wordsAnswered = localStorage.getItem('wordsAnswered');
    localStorage.setItem('wordsAnswered', parseInt(wordsAnswered) + 1);
  })

  if (gameAnswered.split('').indexOf('-') == -1)
  {
    var gamesWon = localStorage.getItem('gamesWon');
    localStorage.setItem('gamesWon', parseInt(gamesWon) + 1);
    alert('You Win');
    return;
  }
}
