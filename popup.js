var sites = [
"facebook.com", "reddit.com", "twitter.com", "instagram.com", "cracked.com"
];
var current = window.location.href;
var badSite = false;

for (var i = 0; i < sites.length; i++) {
  if (window.location.hostname.indexOf(sites[i]) !== -1) {
    badSite = true;
  }
}

if (badSite) {
jQuery(document).ready(
    function() {
      $.getJSON(
	"https://api.quizlet.com/2.0/sets/" + userSetID + "?client_id=w4FsaqPzF3&whitespace=1", 
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
