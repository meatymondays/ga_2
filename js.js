
// menu visibility

const menuClass = document.querySelector("#cloakID");

function showFunction(){
    menuClass.classList.toggle("show");    
}

const hamBurgerButton = document.querySelector("#buttonB");


hamBurgerButton.addEventListener("click",showFunction);

// end menu visibility

// Code for the drop down button
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


  