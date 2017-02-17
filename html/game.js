var words = ['google', 'speed', 'window', 'horizon'];

var lives = 6;
var gameWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
var gameAnswered = new Array(gameWord.length + 1).join('-')

window.onload = function()
{
  console.log(gameWord)
  document.getElementById("WORD").innerHTML = gameAnswered;
  document.getElementById("lives").innerHTML = 'Lives ' + lives;
}

function wrong()
{
  lives -= 1;
  document.getElementById("lives").innerHTML = 'Lives ' + lives;
}

function offChar(char)
{
  var charButton = document.getElementById(char);
  charButton.disabled = true; 

  if (gameAnswered.split('').indexOf('-') == -1)
  {
    alert('You Win');
    return;
  }

  if (lives == 0) {
    alert('You dead');
    return;
  }

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
  console.log(indices)

  indices.forEach(function(item, indices)
  {
    var wordArray = gameAnswered.split('')
    wordArray[item] = char;
    gameAnswered = wordArray.join('');
    document.getElementById("WORD").innerHTML = gameAnswered;
  })
}
