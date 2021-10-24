window.onload = init;
async function init () {
    all_history = async ()=> {
        if(!sessionStorage.getItem("history")){
            return await chrome.runtime.sendMessage({history: "all"});
        }
        return sessionStorage.getItem("visited").split(",")
    }

    let links_questions = document.getElementsByClassName("question-hyperlink")
    let links_visited = await all_history()
    
    var values = [].map.call(links_questions, function(element) {
        let herf = element.href;
        let visit = links_visited.includes(herf)
        let title = element.innerHTML
        
        element.innerHTML = visit ? `[Rev]->${title}` : `[New]->${title}`

        element.addEventListener("click", (e)=>{
            e.preventDefault();
            herf = e.target.href
            if(visit){
                window.location.href = `${herf}`
            }else{
                links_visited.push(herf) 
                sessionStorage.setItem("visited",links_visited.join(","))
                sessionStorage.setItem("history","true")
                window.location.href = `${herf}`
            } 
        })
    });
}

browser.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if(msg.colors){
        document.documentElement.style.setProperty('--visited', msg.colors[0]);
        document.documentElement.style.setProperty('--noVisited', msg.colors[1]);
        document.documentElement.style.setProperty("--closed", msg.colors[2])
    }
});