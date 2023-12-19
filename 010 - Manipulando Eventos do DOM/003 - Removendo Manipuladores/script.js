"use strict";

const btn = document.querySelector("button");

const acionarButton = ()=>{
  let validador = false;

  alert(123);

   validador = true;

   if(validador){
    btn.removeEventListener("click", acionarButton);
   
  }
};
  
  btn.addEventListener("click", acionarButton)







