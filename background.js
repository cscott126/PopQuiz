chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request === "get_settings") {
    	var settingsDict = {}
    	settingsDict["quizlet_id"] = localStorage["quizlet_id"];
    	settingsDict["blocked_sites"] = localStorage["blocked_sites"];
    	sendResponse(settingsDict);
    }
      
  });