chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
	if(tab.url.indexOf("twitter.com") > 1){
    	chrome.tabs.update(tab.id,{url: 'newtab.html'});
  }
});
