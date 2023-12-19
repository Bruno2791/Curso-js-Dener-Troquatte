/*const timer = setInterval(() => {
  

  
  console.log("Meu timer foi iniciado!")
},1000);

console.log("Meu console!")
setTimeout(()=>{

clearInterval(timer)
},3000)*/

/*const expect = function(val) {
  return {
    toBe: function(val2) {
      if (val === val2) {
        console.log("value true");
      } else {
        throw new Error("Equal");
      }
      return {
        notToBe: function(val3) {
          if (val !== val3) {
            console.log("value true");
          } else {
            throw new Error("notEqual");
          }
        },
      };
    },
  };
};


expect(5).toBe(5);
expect(5).notToBe(5);*/

/*const newCounter = function(initInicial){
  let init = initInicial
   return {
   increment: function(){
   return ++init;
  
  },
   reset: function(){
    return init = initInicial;
   
  
  },
   decrement: function(){
    return --init ; 
  
  
  }
  
} 
*/
/*const number = [1,2,3,4,5,6,7,8,9,10];

const filterNumber = function(valor, condicao){
     const newNumber = valor.filter(condicao);

     return newNumber;
};

const numberPar = function(valor){
   return valor % 2 ==0;


}

const numerospares = filterNumber(number, numberPar);

console.log(numerospares)
*/


/*const reduceArray = [2, 4, 6, 8, 10];

const arrayReduzido = function (array, condicao) {
  const resultado = array.reduce(function (acumulador, numero) {
    // Aplica a condição e acumula o resultado
    acumulador.push(condicao(numero));
    return acumulador;
  }, []);

  return resultado;
};

const numDivDois = function (numero) {
  return numero / 2;
};

const res = arrayReduzido(reduceArray, numDivDois);

console.log(res);
*/
/*var compose = function(functions) {
	if (functions.length === 0) {
    return function(x) { return x; };
  }

  return functions.reduceRight(function(prevFn, nextFn) {
    return function(x) {
      return nextFn(prevFn(x));
    };
  });

};


const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4)); // 9

*/

 

function fatorial(num){
  if(num < 0){
    console.log("Números negativos não estão definidos para fatoria");
  }
  else if(num ===1){
    return 1
  } else{
    for(let i = 0; i < num; i++){
    num = num *(num-1)
    }
    return num;
  
  }


}
let number = 5
let res = fatorial(number);

console.log(res);

