// this inserts BS modal to ankiweb id=f1 which is the second form box 
var factModal = '<br><button type="button" class="btn btn-default btn-md" data-toggle="modal" data-target="#myModal">insert name</button><div id="myModal" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Modal Header</h4><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body"><p>Some text in the modal.</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>';    
    
    $('[id=f1]').append(factModal);
