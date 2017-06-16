var tickTock = setInterval(clockFunc, 1000);

function clockFunc() {
    var d = new Date();
    document.getElementById('clock').innerHTML = d.toLocaleTimeString();
}
