$(function() {
        var scntDiv = $('#p_scents');
        var i = $('#p_scents p').size() + 1;
	var addInput = function() {
                $('<p><label for="p_scnts"><input type="text" id="p_scnt" size="20" name="p_scnt_' + i +'" value="" placeholder="Input Value" /></label> <a href="#" id="remScnt">Remove</a></p>').appendTo(scntDiv);
		$('input:last').focus();
                i++;
                return false;
        };
        
        $(document).on('click', '#addScnt', addInput);

	$(document).on('keyup', function(e) {
	  if (e.keyCode === 13) {
	    addInput();
	  }
	  });

        $(document).on('click', '#remScnt', function() { 
                if( i > 2 ) {
                        $(this).parents('p').remove();
                        i--;
                }
                return false;
        });
});
