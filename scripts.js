//clock
var tickTock = setInterval(clockFunc, 1000);

function clockFunc() {
    var d = new Date();
    document.getElementById('clockTop').innerHTML = d.toLocaleTimeString();
    document.getElementById('clockBottom').innerHTML = d.toLocaleTimeString();
}
function throwContactInfo() {
    alert("Mitchell Congdon\n616-510-XXXX\n3XX Oxford Court\nApartment 2\nHolland MI, 494XX");
}
