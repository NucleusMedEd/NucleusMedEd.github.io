
$(document).ready(function(){
	$('[data-toggle="popover"]').popover(); 
});


var img = '<img src= "https://shakmyster.github.io/image/Varus_Valgus_test.png" />';

$("#VarusValgus").popover({ content: img, html:true});
