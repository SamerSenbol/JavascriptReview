var menuItem = document.getElementById("menu").getElementsByTagName("li")
var headLine = document.getElementById("text")
var btn = document.getElementById("button")

console.log(headLine)
for(i=0; i<menuItem.length; i++){
    menuItem[i].addEventListener("click", selectItem)
}

function selectItem(){
    headLine.innerHTML = this.innerHTML
}

btn.addEventListener("click", newItem)

/* function test(){
    alert("work")
} */

function newItem(){
    headLine.innerHTML = "new text"
}