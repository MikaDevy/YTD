const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
const PORT = 4000;

app.use(cors());

app.listen(PORT, () => {
	console.log(`Server Works !!! At port ${PORT}`);
});


var Youtube = (function () {
	'use strict';

	var video, results;

	var getThumb = function (url, size) {
		if (url === null) {
			return '';
		}
		size = (size === null) ? 'big' : size;
		results = url.match('[\\?&]v=([^&#]*)');
		video = (results === null) ? url : results[1];

		if (size === 'small') {
			return 'http://img.youtube.com/vi/' + video + '/2.jpg';
		}
		return 'http://img.youtube.com/vi/' + video + '/0.jpg';
	};

	return {
		thumb: getThumb
	};
}())

//Audio//
app.get('/downloadmp3', async (req, res, next) => {
	try {
		var url = req.query.url;
		let title = 'audio';

		await ytdl.getBasicInfo(url, {
			format: 'mp4'
		}, (err, info) => {
			title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
		});

		res.header('Content-Disposition', `attachment; filename="${title}.mp3"`);
		ytdl(url, {
			format: 'mp3',
			filter: 'audioonly',
		}).pipe(res);

	} catch (err) {
		console.error(err);
	}
});

app.get('/downloadwav', async (req, res, next) => {
	try {
		var url = req.query.url;
		let title = 'audio';

		await ytdl.getBasicInfo(url, {
			format: 'mp4'
		}, (err, info) => {
			title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
		});

		res.header('Content-Disposition', `attachment; filename="${title}.wav"`);
		ytdl(url, {
			format: 'wav',
			filter: 'audioonly',
		}).pipe(res);

	} catch (err) {
		console.error(err);
	}
});

app.get('/downloadogg', async (req, res, next) => {
	try {
		var url = req.query.url;
		let title = 'audio';

		await ytdl.getBasicInfo(url, {
			format: 'mp4'
		}, (err, info) => {
			title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
		});

		res.header('Content-Disposition', `attachment; filename="${title}.ogg"`);
		ytdl(url, {
			format: 'ogg',
			filter: 'audioonly',
		}).pipe(res);

	} catch (err) {
		console.error(err);
	}
});

app.get('/downloadwma', async (req, res, next) => {
	try {
		var url = req.query.url;
		let title = 'audio';

		await ytdl.getBasicInfo(url, {
			format: 'mp4'
		}, (err, info) => {
			title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
		});

		res.header('Content-Disposition', `attachment; filename="${title}.wma"`);
		ytdl(url, {
			format: 'wma',
			filter: 'audioonly',
		}).pipe(res);

	} catch (err) {
		console.error(err);
	}
});


//Video//
app.get('/downloadmp4', async (req, res, next) => {
	try {
		let URL = req.query.url;
		let title = 'video';

		await ytdl.getBasicInfo(URL, {
			format: 'mp4'
		}, (err, info) => {
			title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
		});

		res.header('Content-Disposition', `attachment; filename="${title}.mp4"`);
		ytdl(URL, {
			format: 'mp4',
		}).pipe(res);

	} catch (err) {
		console.error(err);
	}
});

app.get('/downloadmov', async (req, res, next) => {
	try {
		let URL = req.query.url;
		let title = 'video';

		await ytdl.getBasicInfo(URL, {
			format: 'mp4'
		}, (err, info) => {
			title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
		});

		res.header('Content-Disposition', `attachment; filename="${title}.mov"`);
		ytdl(URL, {
			format: 'mov',
		}).pipe(res);

	} catch (err) {
		console.error(err);
	}
});

app.get('/download3gp', async (req, res, next) => {
	try {
		let URL = req.query.url;
		let title = 'video';

		await ytdl.getBasicInfo(URL, {
			format: 'mp4'
		}, (err, info) => {
			title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
		});

		res.header('Content-Disposition', `attachment; filename="${title}.3gp"`);
		ytdl(URL, {
			format: '3gp',
		}).pipe(res);

	} catch (err) {
		console.error(err);
	}
});

app.get('/downloadwmv', async (req, res, next) => {
	try {
		let URL = req.query.url;
		let title = 'video';

		await ytdl.getBasicInfo(URL, {
			format: 'mp4'
		}, (err, info) => {
			title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
		});

		res.header('Content-Disposition', `attachment; filename="${title}.wmv"`);
		ytdl(URL, {
			format: 'wmv',
		}).pipe(res);

	} catch (err) {
		console.error(err);
	}
});

app.get('/downloadwebm', async (req, res, next) => {
	try {
		let URL = req.query.url;
		let title = 'video';

		await ytdl.getBasicInfo(URL, {
			format: 'mp4'
		}, (err, info) => {
			title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
		});

		res.header('Content-Disposition', `attachment; filename="${title}.webm"`);
		ytdl(URL, {
			format: 'webm',
		}).pipe(res);

	} catch (err) {
		console.error(err);
	}
});

app.get('/downloadavi', async (req, res, next) => {
	try {
		let URL = req.query.url;
		let title = 'video';

		await ytdl.getBasicInfo(URL, {
			format: 'mp4'
		}, (err, info) => {
			title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
		});

		res.header('Content-Disposition', `attachment; filename="${title}.avi"`);
		ytdl(URL, {
			format: 'avi',
		}).pipe(res);

	} catch (err) {
		console.error(err);
	}
});

app.get('/downloadmkv', async (req, res, next) => {
	try {
		let URL = req.query.url;
		let title = 'video';

		await ytdl.getBasicInfo(URL, {
			format: 'mp4'
		}, (err, info) => {
			title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
		});

		res.header('Content-Disposition', `attachment; filename="${title}.mkv"`);
		ytdl(URL, {
			format: 'mkv',
		}).pipe(res);

	} catch (err) {
		console.error(err);
	}
});