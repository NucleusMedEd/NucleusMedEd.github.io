$(document).ready(function(){
    $("[data-target='#aspirin']").click(function(){
    	$("#aspirin").load("https://NucleusMedEd.github.io/pharm/pharm.txt #aspirin");
    });
    
    
    $("[data-target='#riluzole']").click(function(){
        $("#riluzole").load("https://NucleusMedEd.github.io/pharm/pharm.txt #riluzole");
    });
    
    
});
