$(document).ready(function(){
    $("[data-target='#aspirin']").click(function(){
    	$("#aspirin").load("https://NucleusMedEd.github.io/pharm/pharm.txt #aspirin");
    });
    
    
    $("[data-target='#riluzole']").click(function(){
        $("#riluzole").load("https://NucleusMedEd.github.io/pharm/pharm.txt #riluzole");
    });
    
    $("[data-target='#esomeprazole']").click(function(){
        $("#esomeprazole").load("https://NucleusMedEd.github.io/pharm/pharm.txt #esomeprazole");
    });
    
    $("[data-target='#zollingerEllison_overview']").click(function(){
        $("#zollingerEllison_overview").load("https://NucleusMedEd.github.io/pharm/pharm.txt #zollingerEllison_overview");
    });
    
    
});
