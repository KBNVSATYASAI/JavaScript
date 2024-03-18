let bgColorsArray = ["#e75d7c","#b16cef","#53cca4","#efc84d","#628ef0", "#184b73","#883e7f","#ed048b"];
let bgcontainerrrr=document.getElementById("bgcontainer");
function changeclr() {
    
     let randomIndex = Math.floor(Math.random() * bgColorsArray.length);
    colorofblock =bgColorsArray[randomIndex];
    bgcontainerrrr.style.backgroundColor=colorofblock;
}