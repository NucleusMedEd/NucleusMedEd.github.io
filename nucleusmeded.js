/* 
var genericModal = '<div><button type="button" class="btn btn-default btn-md" data-toggle="modal" data-target="#genericModal">Bottom Line</button><div id="genericModal" class="modal fade" role="dialog" style="display: none;" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">name</h4><button type="button" class="close" data-dismiss="modal">×</button></div><div class="modal-body">insert text here...</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div></div>';

$('[id=f1]').append(genericModal);

*/
    
    // this inserts BS modal to ankiweb id=f1 which is the second form box 
   
var bottomLineModal = '<div><button type="button" class="btn btn-default btn-md" data-toggle="modal" data-target="#bottomLine">Bottom Line</button><div id="bottomLine" class="modal fade" role="dialog" style="display: none;" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title" id="bottomLineHeader">name</h4><button type="button" class="close" data-dismiss="modal">×</button></div><div class="modal-body" id="bottomLineBody">insert text here...</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div></div>';  

var explanationModal = '<div><button type="button" class="btn btn-default btn-md" data-toggle="modal" data-target="#explanation">Explanation</button><div id="explanation" class="modal fade" role="dialog" style="display: none;" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><h4 class="modal-title" id="explainHeader">name</h4><button type="button" class="close" data-dismiss="modal">×</button></div><div class="modal-body" id="explainBody">insert text here...</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div></div>';
    
    $('[id=f1]').append(explanationModal);
    $('[id=f1]').append('<br>');
    $('[id=f1]').append(bottomLineModal);
    
    //Explanation Modal Header and Body expressions
    $('[id=explainHeader]').html('<b>Hello world!</b>');
    $('[id=explainBody]').html('Hello world!');
    
    //Bottom Line Modal Header and Body expressions
    $('[id=bottomLineHeader]').html('<b>Hello world!</b>');
    $('[id=bottomLineBody]').html('Hello world!');
