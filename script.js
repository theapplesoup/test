function togglePlayer() {
    document.getElementById('player').classList.toggle('active');
    if (document.getElementById("media-player").classList.contains("minimized")) {
        document.getElementById("media-player").classList.remove("minimized");
    }
}

function play() {

    if (document.getElementById("media-btn").innerHTML.includes("play")) {
        document.getElementById("media-btn").innerHTML = '<ion-icon name="pause">';
    } else {
        document.getElementById("media-btn").innerHTML = '<ion-icon name="play">';
    }
}

function scroll() {
    if (!document.getElementById("media-player").classList.contains("minimized") &&  document.getElementById('player').classList.contains('active')) {
        document.getElementById("media-player").classList.add("minimized");
    }
}