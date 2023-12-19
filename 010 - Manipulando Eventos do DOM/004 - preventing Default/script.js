"use strict";

const link = document.querySelector("a");

link.addEventListener("click", (event)=>{
   event.preventDefault();
   alert("Previnindo comportamento padrão")

})
