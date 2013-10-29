jQuery(document).ready(
    function() {
      $.getJSON(
	"https://api.quizlet.com/2.0/sets/415?client_id=w4FsaqPzF3&whitespace=1", 
	{},
	function(data) {
	  window.prompt(data.terms[Math.floor(Math.random() * data.terms.length)].term);
	});
    });
