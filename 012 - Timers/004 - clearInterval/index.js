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

  const res = document.querySelector("div")

  function contarCaractereNaString(frase, caractere) {
    // Usamos uma expressão regular para criar um padrão que corresponde ao caractere
    const regex = new RegExp(caractere, 'g');
  
    // Usamos o método match para encontrar todas as ocorrências do caractere na string
    const ocorrencias = frase.match(regex);
  
    // A variável ocorrencias conterá um array ou será nula se não houver ocorrências
    // Usamos a operação ternária para lidar com ambos os casos
    const quantidade = ocorrencias ? ocorrencias.length : 0;
  
    return quantidade;
  }
  
  // Exemplo de uso:
  const fraseUsuario = prompt('Digite uma frase:');
  const caractereUsuario = prompt('Digite um caractere para contar:');
  
  const quantidadeDeOcorrencias = contarCaractereNaString(fraseUsuario, caractereUsuario);
  
  res.innerHTML =`O caractere "${caractereUsuario}" aparece ${quantidadeDeOcorrencias} vezes na frase.`;
  

