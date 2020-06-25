let Btn = document.getElementById('btn');
let URLinput = document.querySelector('.URL-input');
let select = document.querySelector('.opt');
let serverURL = 'http://localhost:4000';

Btn.addEventListener('click', () => {
	if (!URLinput.value) {
		alert('Enter YouTube URL');
	} else {
		if (select.value == 'mp3') {
			redirectMp3(URLinput.value);
		} else if (select.value == 'mp4') {
			redirectMp4(URLinput.value);
		} else if (select.value == 'mov') {
			redirectMov(URLinput.value);
		} else if (select.value == 'ogg') {
			redirectVorbis(URLinput.value);
		} else if (select.value == 'wav') {
			redirectWav(URLinput.value);
		} else if (select.value == 'wma') {
			redirectWma(URLinput.value);
		} else if (select.value == '3gp') {
			redirect3gp(URLinput.value);
		} else if (select.value == 'wmv') {
			redirectWmv(URLinput.value);
		} else if (select.value == 'webm') {
			redirectWebm(URLinput.value);
		} else if (select.value == 'avi') {
			redirectAvi(URLinput.value);
		} else if (select.value == 'mkv') {
			redirectMkv(URLinput.value);
		}
	}
});

function redirectMp3(query) {
	window.location.href = `${serverURL}/downloadmp3?url=${query}`;
}

function redirectMp4(query) {
	window.location.href = `${serverURL}/downloadmp4?url=${query}`;
}

function redirectMov(query) {
	window.location.href = `${serverURL}/downloadmov?url=${query}`;
}

function redirectVorbis(query) {
	window.location.href = `${serverURL}/downloadogg?url=${query}`;
}

function redirectWav(query) {
	window.location.href = `${serverURL}/downloadwav?url=${query}`;
}

function redirectWma(query) {
	window.location.href = `${serverURL}/downloadwma?url=${query}`;
}

function redirectWmv(query) {
	window.location.href = `${serverURL}/downloadwmv?url=${query}`;
}

function redirect3gp(query) {
	window.location.href = `${serverURL}/download3gp?url=${query}`;
}

function redirectWebm(query) {
	window.location.href = `${serverURL}/downloadWebm?url=${query}`;
}

function redirectAvi(query) {
	window.location.href = `${serverURL}/downloadAvi?url=${query}`;
}

function redirectMkv(query) {
	window.location.href = `${serverURL}/downloadmkv?url=${query}`;
}