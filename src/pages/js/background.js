var visitd;
chrome.runtime.onInstalled.addListener(async ()=> {
    chrome.browserAction.setBadgeText({text:'ON'},log=>console.log('extension activada'))
    let history = await browser.history.search({maxResults: 100, text:"https://es.stackoverflow.com/"})
    visitd = history.map(url=>url.url)
});

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if(msg.history)
      res = visitd ? visitd: [] ;
    sendResponse(res);
});