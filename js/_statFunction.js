"use strict";

function updateStats(statParameter) {
    let stTotalGames = JSON.parse(localStorage.getItem("stTotalGames"));
    let stWinWords = JSON.parse(localStorage.getItem("stWinWords"));
    let stLetterClick = JSON.parse(localStorage.getItem("stLetterClick"));
    let stCorrLetter = JSON.parse(localStorage.getItem("stCorrLetter"));
    switch (statParameter) {
      case "stTotalGames":
        localStorage.setItem("stTotalGames", stTotalGames + 1);
        break;

      case "stWinWords":
        localStorage.setItem("stTotalGames", stTotalGames + 1);
        localStorage.setItem("stWinWords", stWinWords + 1);
        break;

      case "stLetterClick":
        localStorage.setItem("stLetterClick", stLetterClick + 1);
        break;

      case "stCorrLetter":
        localStorage.setItem("stLetterClick", stLetterClick + 1);
        localStorage.setItem("stCorrLetter", stCorrLetter + 1);
        break;

      case "stCheck":
        if (stTotalGames == null) {
            localStorage.setItem("stTotalGames", 0);
        }
        if (stWinWords == null) {
            localStorage.setItem("stWinWords", 0);
        }
        if (stLetterClick == null) {
            localStorage.setItem("stLetterClick", 0);
        }
        if (stCorrLetter == null) {
            localStorage.setItem("stCorrLetter", 0);
        }
        break;
    }
}