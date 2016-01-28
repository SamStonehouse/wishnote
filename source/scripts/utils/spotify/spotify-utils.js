import superagent from 'superagent';
import q from 'q';

class SpotifyArtist {
	constructor(data) {
		this.name = data.name;
		this.id = data.id;
		this.images = data.images;
	}
}

SpotifyArtist.createFromAPIResponse = function(response) {
	const artist = {};

	artist.name = response.arist ? response.arist : null;
	artist.id = response.id ? response.id : null;
	artist.images = response.images.map((imgData) => {
		return imgData.url;
	});

	return new SpotifyArtist(artist);
};

function getArtistData(artist) {
	const deferred = q.defer();

	superagent.get(`https:\/\/api.spotify.com/v1/search?query=${artist}&offset=0&limit=20&type=artist`)
		.end(function(err, res) {
			if (err) {
				console.warn('Error loading artist data for: ' + artist);
				return deferred.reject(err, res);
			}

			const artists = [];

			res.body.artists.items.forEach((item) => {
				artists.push(SpotifyArtist.createFromAPIResponse(item));
			});

			return deferred.resolve(artists);
		});

	return deferred.promise;
}

export default getArtistData;