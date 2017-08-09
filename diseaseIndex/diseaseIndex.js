$(document).ready(function(){
    $("[data-target='#lewyBody']").click(function(){
    	$("#lewyBody").load("https://NucleusMedEd.github.io/diseaseIndex/index.txt #lewyBody");
    });
    
    
    $("[data-target='#myasthenia']").click(function(){
        $("#myasthenia").load("https://NucleusMedEd.github.io/diseaseIndex/index.txt #myasthenia");
    });
    
    $("[data-target='#zollingerEllison_overview']").click(function(){
        $("#zollingerEllison_overview").load("https://NucleusMedEd.github.io/diseaseIndex/index.txt #zollingerEllison_overview");
    });
    
});
