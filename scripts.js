//clock
var tickTock = setInterval(clockFunc, 1000);

function clockFunc() {
    var d = new Date();
    document.getElementById('clockTop').innerHTML = d.toLocaleTimeString();
    document.getElementById('clockBottom').innerHTML = d.toLocaleTimeString();
}
//show contact info
function showContactInfo() {
    document.getElementById("infoL1").innerHTML = "Mitchell Congdon";
 	document.getElementById("infoL2").innerHTML = "congdonmitchell@gmail.com";
 	document.getElementById("infoL3").innerHTML = "(616)510-XXXX";
 	document.getElementById("infoL4").innerHTML = "Holland, MI 49423";
}
//jquery
$(".infoBox h2").hide().show("slow");
$("#adress").hide();
$( "#adressBTN" ).click(function() {
  $( "#adress" ).show( "fast" );
  $( "#adressBTN" ).hide( "fast" );
});
$( "#hideAdress" ).click(function() {
  $( "#adress" ).hide( "fast" );
  $( "#adressBTN" ).show( "fast" );
});