let menuItem = document.getElementById("menu").getElementsByTagName("li");
console.log(menuItem);

for(i=0; i<menuItem.length; i++){
menuItem[i].addEventListener("click", selectItem);
}

function selectItem(){
    alert("selected");
}