var tickTock = setInterval(clockFunc, 1000);

function clockFunc() {
    var d = new Date();
    document.getElementById('clockTop').innerHTML = d.toLocaleTimeString();
    document.getElementById('clockBottom').innerHTML = d.toLocaleTimeString();
}
