const btn_save = document.getElementById("saveChanges")
btn_save.addEventListener("click", ()=>{
    let noVisited = document.getElementById("noVisit")
    let Visited = document.getElementById("Visit");

    sessionStorage.setItem("noVisited", noVisited)
    sessionStorage.setItem("Visited", Visited)
})


function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}
  