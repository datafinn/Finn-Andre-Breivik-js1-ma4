// Make a call to https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating.

// For each game object in the results, create HTML that displays at least 3 properties from the objects. You can include an image property or leave it out.

// Link from each game to question3.html and pass the id of each game in the querystring.

const url =
	"https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating";
const container = document.querySelector(".container");

async function fetchGames() {
	const fetchedData = await fetch(url);
	const json = await fetchedData.json();
	const results = json.results;

	let gameListHTML = ``;

	results.forEach(function (result) {
		const gameName = result.name;
		const gamePlatformArray = result.platforms;
		const gameRelease = result.released;
		const gameImage = result.background_image;
		const gameId = result.id;

		gameListHTML += `<a href="question3.html?id=${gameId}" class="game"><h2 class="title">${gameName}</h2><div class="text">Platforms:</div><ul>`;
		for (i = 0; i < gamePlatformArray.length; i++) {
			gameListHTML += `<li class="text">${gamePlatformArray[i].platform.name}</li>`;
		}
		gameListHTML += `</ul><div class="text">Released: ${gameRelease}</div><img class="gameImage" src="${gameImage}" alt="${gameName}"></img></a>`;
	});
	container.innerHTML = gameListHTML;
}

fetchGames();
