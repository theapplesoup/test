function togglePlayer() {
    document.getElementById('player').classList.toggle('active');
}

function play() {

    if (document.getElementById("media-btn").innerHTML.includes("play")) {
        document.getElementById("media-btn").innerHTML = '<ion-icon name="pause">';
    } else {
        document.getElementById("media-btn").innerHTML = '<ion-icon name="play">';
    }
}