//clock

//show contact info
function showContactInfo() {
    document.getElementById("infoL1").innerHTML = "Mitchell Congdon";
 	document.getElementById("infoL2").innerHTML = "congdonmitchell@gmail.com";
 	document.getElementById("infoL3").innerHTML = "(616)510-XXXX";
 	document.getElementById("infoL4").innerHTML = "Holland, MI 49423";
}
//jquery
$(".infoBox h2").hide().slideDown(1600);
$("#adress").hide();
$("#hideAdress").hide();
$( "#adressBTN" ).click(function() {
  $( "#adress" ).slideDown( 600, function(){});
  $( "#adress" ).next().slideDown( 600, function(){});
});

$( "#hideAdress" ).click(function() {
  $( "#adress" ).slideUp( 400 );
  $( "#hideAdress" ).slideUp( 400 );
});
