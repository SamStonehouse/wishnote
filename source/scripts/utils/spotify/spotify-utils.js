import superagent from 'superagent';

function getArtistData(term) {
	return getArtistID(term);
}

function getArtistID(search) {
	return superagent.get(`https:\/\/api.spotify.com/v1/search?query=${search}&offset=0&limit=20&type=artist`).then(function(res) {
		console.log(res);
	});
}

function getArtistImage(id) {

}

export default getArtistData;