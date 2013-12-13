var sites = [
"facebook.com", "reddit.com", "twitter.com", "instagram.com", "cracked.com"
];
// var sites = localStorage[blocked_sites];
// console.log(sites);
var current = window.location.href;
var badSite = false;
var setId = -1;
var sites = [];
var switchFlag = "";

chrome.runtime.sendMessage("get_settings", function(response) {
	console.log(response);
	setId = response.quizlet_id;
	sites = JSON.parse(response.blocked_sites);
	switchFlag = response.is_checked;

	for (var i = 0; i < sites.length; i++) {
		if (window.location.hostname.indexOf(sites[i]) !== -1) {
			badSite = true;
		}
	}

	if (badSite) {
		jQuery(document).ready(
			function() {
				$.getJSON(
					"https://api.quizlet.com/2.0/sets/" + setId + "?client_id=w4FsaqPzF3&whitespace=1", 
					{},
					function(data) {
						var index = Math.floor(Math.random() * data.terms.length);
						if (switchFlag == "true") {
							var term = data.terms[index].definition;
							var ans = data.terms[index].term;	
						}
						else {
							var term = data.terms[index].term;
							var ans = data.terms[index].definition;
						}
						
						var tries = 3;
						var message = " tries remaining for: " + term;

						var promptFunction = function(result) {
							if (tries === 1 && (result === null || ans.toLowerCase() !== result.toLowerCase())) {
								bootbox.alert("Study harder!!! Answer: " + ans);
							} else if (result !== null && result.toLowerCase() === ans.toLowerCase()) {                                             
								bootbox.alert("Correct!");                              
							} else {
								tries--;
								bootbox.prompt(tries + message, promptFunction);
							}
						}

						bootbox.prompt(tries + message, promptFunction);
					});
});
}
});
