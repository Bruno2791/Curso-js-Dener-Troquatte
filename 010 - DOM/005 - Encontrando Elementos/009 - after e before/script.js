"usestrict";


const container = document.querySelector(".container");

const newP = document.createElement("p");
newP.innerText ="Ola Bruno";

//container.after(newP)
container.before(newP);