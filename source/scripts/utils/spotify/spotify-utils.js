import superagent from 'superagent';
import q from 'q';

class SpotifyArtist {
	constructor(data) {
		this.name = data.name;
		this.id = data.id;
		this.images = data.images;
	}
}

SpotifyArtist.createFromAPIData = function(response) {
	const artist = {};

	artist.name = response.arist ? response.arist : null;
	artist.id = response.id ? response.id : null;
	artist.images = response.images.map((imgData) => {
		return imgData.url;
	});

	return new SpotifyArtist(artist);
};

class SpotifyAlbum {
	constructor(data) {
		this.name = data.name;
		this.id = data.id;
		this.images = data.images;
	}
}

SpotifyAlbum.createFromAPIData = function(response) {
	const album = {};

	album.name = response.name ? response.name : null;
	album.id = response.id ? response.id : null;
	album.images = response.images.map((imgData) => {
		return imgData.url;
	});

	return new SpotifyAlbum(album);
}

function getArtistData(artistName) {
	const deferred = q.defer();

	superagent.get(`https:\/\/api.spotify.com/v1/search?query=${artistName}&offset=0&limit=2&type=artist`)
		.end(function(err, res) {
			if (err) {
				console.warn('Error loading artist data for: ' + artistName);
				return deferred.reject(err, res);
			}

			const artists = [];

			res.body.artists.items.forEach((item) => {
				artists.push(SpotifyArtist.createFromAPIData(item));
			});

			return deferred.resolve(artists);
		});

	return deferred.promise;
}

function getAlbumData(albumName) {
	const deferred = q.defer();

	superagent.get(`https:\/\/api.spotify.com/v1/search?query=${albumName}&offset=0&limit=2&type=album`)
		.end(function(err, res) {
			if (err) {
				console.warn('Error loading album data for: ' + albumName);
				return deferred.reject(err, res);
			}

			const artists = [];

			res.body.albums.items.forEach((item) => {
				artists.push(SpotifyAlbum.createFromAPIData(item));
			});

			return deferred.resolve(artists);
		});

	return deferred.promise;
}

export default {
	getArtistData,
	getAlbumData
};