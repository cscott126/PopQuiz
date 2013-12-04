$(function() {
        var scntDiv = $('.p_scents');
        var i = $('#p_scents p').size() + 1;
	var addInput = function() {
                $('<p><label for="p_scnts"><input type="text" class="p_scnt" size="20" name="p_scnt_' + i +'" value="" placeholder="Input Value" /></label> <a href="#" class="remScnt">Remove</a></p>').appendTo(scntDiv);
		$('input:last').focus();
                i++;
                return false;
        };

      $(document).on('click', '#save', function(){
        var quizlet_id = document.getElementById("quizlet-set-id");
        quizlet_id = quizlet_id.value;
        localStorage["quizlet_id"] = quizlet_id;

        var s_blocked_sites = document.getElementsByClassName("p_scnt");
        var blocked_sites = []
        for (i = 0; i < s_blocked_sites.length; i++) {
          blocked_sites[i] = s_blocked_sites[i].value;
        }
        localStorage["blocked_sites"] = JSON.stringify(blocked_sites);
        
      })
        
        $(document).on('click', '.addScnt', addInput);

	$(document).on('keyup', function(e) {
	  if (e.keyCode === 13) {
	    addInput();
	  }
	  });

        $(document).on('click', '.remScnt', function() { 
                if( i > 1 ) {
                        $(this).parents('p').remove();
                        i--;
                }
                return false;
        });
});

