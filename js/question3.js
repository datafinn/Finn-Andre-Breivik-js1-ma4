// Retrieve the id paramater from the querystring and add it to the following URL: https://api.rawg.io/api/games/

// Make a call to the API with the new URL and display at least 4 properties from the result.

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://api.rawg.io/api/games/";
const gameUrl = url + id;

const container = document.querySelector(".detailContainer");

async function fetchGameDetails() {
	const fetchedData = await fetch(gameUrl);
	const json = await fetchedData.json();
	console.dir(json);
	container.innerHTML = `<h1>${json.name}</h1><div>${json.description}</div><div class="rating">Rating: ${json.rating}</div><img src="${json.background_image}" alt="${json.name}">`;
}

fetchGameDetails();
