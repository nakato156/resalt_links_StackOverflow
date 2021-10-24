const btn_save = document.getElementById("saveChanges")
btn_save.addEventListener("click", async ()=>{
    let noVisited = document.getElementById("noVisit").value;
    let Visited = document.getElementById("Visit").value;
    let question_closed = document.getElementById("Closed").value

    console.log(noVisited.value, Visited.value)

    await chrome.tabs.query({active: true}, async function(tabs) {
      let tab = tabs[0]
      await browser.tabs.sendMessage(tab.id, {
        "colors":[Visited, noVisited, question_closed]
      });
    });
})

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}
  