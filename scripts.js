console.log("programStart")
var myVar = setInterval(timeTicker, 1000);

function timeTicker() {
    var d = new Date();
    document.getElementById("timeTicker").innerHTML = d.toLocaleTimeString();
}
console.log("programEnd")
