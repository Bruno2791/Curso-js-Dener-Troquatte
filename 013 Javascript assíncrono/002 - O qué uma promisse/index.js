/**
 * Promises: As Promises são objetos que representam a conclusão (ou falha)
 * de uma tarefa assíncrona. Elas fornecem uma sintaxe mais limpa e estruturada
 * para lidar com código assíncrono, permitindo encadear chamadas e tratar erros
 * de forma mais eficiente.
 */

const pedido= (pedido)=>{
    return new Promise((resolve,reject)=>{
     if(pedido === "Pizza"){
       reject(`Não temos o seu pedido${pedido}`)
    }
     
     
        setTimeout(()=>{
         resolve(`Chegou o seu pedido[${pedido}]`);
     },   5000)
  });
};

pedido("Pizza").then((resPedido)=>{
   console.log(resPedido)
});
