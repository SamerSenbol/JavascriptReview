var menuItem = document.getElementById("menu").getElementsByTagName("li")
var headLine = document.getElementById("text")

console.log(headLine)
for(i=0; i<menuItem.length; i++){
    menuItem[i].addEventListener("click", selectItem)
}

function selectItem(){
    headLine.innerHTML = "New head"
}