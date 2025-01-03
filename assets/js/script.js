var audio = document.getElementById('audio');
var trackTitle = document.getElementById('track-title');
var tracks = [
    "assets/songs/song1.mp3",
    "assets/songs/song2.mp3",
    "assets/songs/song3.mp3",
];
var currentTrackIndex = 0;

function playPause() {
    if(audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function previousTrack() {
    if (currentTrackIndex > 0) {
        currentTrackIndex--;
        updateTrack();
    }
}

function nextTrack() {
    if (currentTrackIndex < tracks.length - 1) {
        currentTrackIndex++;
        updateTrack();
    }
}

function updateTrack() {
    audio.src = tracks[currentTrackIndex];
    audio.play();
    trackTitle.textContent = audio.src.split('/').pop();
}

function volumeUp() {
    if(audio.volume < 1) {
        audio.volume += 0.1;
    }
}

function volumeDown() {
    if(audio.volume > 0) {
        audio.volume -= 0.1;
    }
}

audio.addEventListener('play', function() {
    trackTitle.textContent = audio.src.split('/').pop();
});