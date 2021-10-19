chrome.runtime.onInstalled.addListener(async ()=> {
    chrome.browserAction.setBadgeText({text:'ON'},log=>console.log('extension activada'))
});

//escuchamos el evento de cambio de pestaña y obtenemos la info del tab
chrome.tabs.onActivated.addListener(activeInfo => getTab())

const split_domain = (url)=>{
    let direction = url.split(".com")[0]
    let site = direction.split(".")[1]
    if(site=="stackoverflow"){
        //hacer algo si el sitio es stackoverflow
    }
    return site 
}

async function getTab(){
    try {
        await chrome.tabs.query({active: true}, function(tabs) {
            let tab = tabs[0]
            let url_tab = tab['url']
            let dom = split_domain(url_tab)     
            console.log("tab:", tab)
        });

    } catch (error) {
        console.log("error:", error)
    }
}
