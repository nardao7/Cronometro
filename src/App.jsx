import React, { useState } from 'react';

export default function App (){

 // setTimeout -> ocorre apenas uma vez em um período de tempo;
 // setTimout (função, tempo)
//  setTimeout (() => {
//   alert("Boa Tarde !");
//  },4000)

// setInterval -> executa repetidamente a cada período de tempo;
// setInterval(() => {
//   console.log("boa tarde")
// }, 3000);


// clearInterval -> serve para parar as execuções, tarefas;


// setTimeout(() => {
//   alert("Olá Mundo")
// },2000 );

// setInterval(() => {
//   console.log("Boa Tarde!")
// }, 3000);

// const  [numero, setNumero ] = useState (0);

// function adicionar (){

//   if (numero < 10){

//   setNumero (numero+2);
// }
// }

  // return(
  //   <>
  //   <h2>{numero}</h2>
  //   <button onClick={adicionar}>+</button>
  //   <button>-</button>
  //   </>
  // )

//contando....
  const [valor, setValor ] = useState(0);
//Parando...

    // recebe no useState guarda o valor enquanto o     setPare é o método que atualiza
const [pare, setPare ] = useState();

  function start (){

    const time = setInterval(() => {

      setValor ((valor) => valor+1);
      
    }, 1000);

    setPare(time);

  }


  function pause (){
    clearInterval (pare)

  }

  function reset (){
    setValor (0)

  }

  return(
    <>
    <h2>Tempo: {valor}</h2>
    <button onClick={start}>Start</button>
    <button onClick={pause}>Pause</button>
    <button onClick={reset}>Reset</button>
    </>
  )


}