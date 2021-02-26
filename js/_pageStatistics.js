const pageStatistics = '\
	<table>\
		<caption>User statistics</caption>\
		<thead>\
			<tr>\
				<th>Name</th>\
				<th>Value</th>\
			</tr>\
		</thead>\
		<tbody>\
			<tr>\
				<th>Total games</th>\
				<th id="stTotalGames">...</th>\
			</tr>\
			<tr>\
				<th>Guess words</th>\
				<th id="stWinWords">...</th>\
			</tr>\
			<tr>\
				<th>% Win</th>\
				<th id="stWinPercentage">...</th>\
			</tr>\
			<tr>\
				<th>Total letters clicked</th>\
				<th id="stLetterClick">...</th>\
			</tr>\
			<tr>\
				<th>Correctly guessed letters</th>\
				<th id="stCorrLetter">...</th>\
			</tr>\
			<tr>\
				<th>% correctly letters</th>\
				<th id="stWinLetterPercent">...</th>\
			</tr>\
		</tbody>\
	</table>\
	<p class="text-center">\
		<buttton class="button error" onclick="localStorage.clear();">Clear statistics</buttton>\
	</p>\
';


function updateStatsPage()
{
	let stTotalGames = localStorage.getItem('stTotalGames');
	let stWinWords = localStorage.getItem('stWinWords');
	let stWinPercentage = localStorage.getItem('stWinPercentage');
	let stLetterClick = localStorage.getItem('stLetterClick');
	let stCorrLetter = localStorage.getItem('stCorrLetter');
	let stWinLetterPercent = localStorage.getItem('stWinLetterPercent');

	document.querySelector('#stTotalGames').innerHTML = stTotalGames;
	document.querySelector('#stWinWords').innerHTML = stWinWords;
	document.querySelector('#stWinPercentage').innerHTML = Math.round((stWinWords / stTotalGames) * 100);
	document.querySelector('#stLetterClick').innerHTML = stLetterClick;
	document.querySelector('#stCorrLetter').innerHTML = stCorrLetter;
	document.querySelector('#stWinLetterPercent').innerHTML = Math.round((stCorrLetter / stLetterClick) * 100);
}
