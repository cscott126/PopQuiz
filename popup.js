var current = window.location.href;
if (current.indexOf("stackoverflow") !== -1) {
jQuery(document).ready(
    function() {
      $.getJSON(
	"https://api.quizlet.com/2.0/sets/415?client_id=w4FsaqPzF3&whitespace=1", 
	{},
	function(data) {
	  var index = Math.floor(Math.random() * data.terms.length);
	  var term = data.terms[index].term;
	  var ans = data.terms[index].definition;
	  var tries = 5;

	  for (i = 0; i < tries; i++) {
	    var message = term;

	    if (i !== 0) {
	      message = (tries - i) + " tries remaining for: " + term;
	    } if (ans === window.prompt(message)) {
	      window.alert("CORRECT");
	      break;
	    } if (i === tries - 1) {
	      window.alert("STUDY HARDER!!! ANSWER: " + ans);
	    }
	  }
	});
    });
}
