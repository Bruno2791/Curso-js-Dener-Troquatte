const buGnum = ()=>{
  
 try {
  const num = "123";

  if(num === 123){
    return "Deu bom!";

} 
   console.log(num)
  throw new Error ("Deu ruim"); //Comando trava a aplicação
 } catch (error) {
  throw error;
  
 }
}
   console.log(buGnum());
   console.log("Continua executando")

