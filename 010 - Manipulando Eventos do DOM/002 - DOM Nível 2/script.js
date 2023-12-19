"use strict";

const btn = document.querySelector("button");
const lista = document.querySelector("ul");



/*btn.addEventListener("click", (event) =>{
   alert(123)
});*/


btn.addEventListener("click",(event)=>{
  if(lista.style.display === "none"){
    lista.style.display ="block"
  } else{
    lista.style.display = "none"
  }
  });

