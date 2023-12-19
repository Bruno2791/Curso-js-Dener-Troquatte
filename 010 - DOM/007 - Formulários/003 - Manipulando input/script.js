"use strict";

const form = document.forms.namedItem("registration");

form.addEventListener("change", (event)=>{
     event.preventDefault();
 const name = form.name.value;
 
 const newDiv = document.createElement("div");
 
 newDiv.innerText = name.toUpperCase()
 form.nextElementSibling.remove(newDiv)
 form.after(newDiv);





})