var menuItem = document.getElementById("menu").getElementsByTagName("li")
var headLine = document.getElementById("text")
var btn = document.getElementById("button")
var myMenu = document.getElementById("menu")
var counter = 1

myMenu.addEventListener("click", selectItem)

function selectItem(e){
    if(e.target.nodeName == "LI"){
        headLine.innerHTML = e.target.innerHTML
    
        for(i=0; i<menuItem.length; i++){
            menuItem[i].classList.remove("selected")
        }
        e.target.classList.add("selected")
    }
    
}

console.log(headLine)


/* function test(){
    alert("work")
} */

function newItem(){
    myMenu.innerHTML += "<li>new line "+ counter +"</li>"
    counter++
}
btn.addEventListener("click", newItem)