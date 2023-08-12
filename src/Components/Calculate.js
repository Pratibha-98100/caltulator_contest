import React, { useState } from 'react';

function Calculate() {


  // Getting values numbers
  let [n1, setN1] = useState();
  let [n2, setN2] = useState();


  //for result
  let[result, updateResult] = useState();


  // for error
  let [error, setError] = useState(); 
  

  function isNumber(){
    if(n1 === "" || n2 === ""){
      setError("Enter the number");
      return false;
    }
    
    if(!/^-?\d+(\.\d+)?$/.test(n1) || !/^-?\d+(\.\d+)?$/.test(n2)){
      setError("Not A number !");
      return false;
    }  
  
      setError("");
      return true;
  }

  // adding
  function plus(){
    if(isNumber()){
      let add = Number.parseFloat(n1) + Number.parseFloat(n2);
      updateResult(`${add}`);
    }
  }



  function minus(){
    if(isNumber()){
      let sub = Number.parseFloat(n1) - Number.parseFloat(n2);
      updateResult(`${sub}`);
    }
  }


  function multi(){
    if(isNumber()){
      let mul = Number.parseFloat(n1) * Number.parseFloat(n2);
      updateResult(`${mul}`);
    }
  }



    function divide(){
    if(isNumber()){
      let div = Number.parseFloat(n1) / Number.parseFloat(n2);
      updateResult(`${div}`);
    }
  }

  return (
    <div>
        <h1 id='heading'>React Calculator</h1>

        <input type='text' id='n1' placeholder='Num 1' value={n1} onChange={(e) => setN1(e.target.value)} /> <br/><br/><br/>
      
        <input type='text' id='n2' placeholder='Num 2' value={n2} onChange={(e) => setN2(e.target.value)}/>

        <div className='button'>
          <button id="plus" onClick={plus} >+</button>
          <button id="plus" onClick={minus}>-</button>
          <button id="plus"  onClick={multi} >*</button>
          <button id="plus"  onClick={divide}>/</button>


{/* ----------------result------------------------ */}
          {result && <p id="result" style={{ color: "blue" }}> Sucess ! <br/>{result}</p>}
          {error && <p  id="result" style={{ color: 'red' }}>Error !<br/>{error}</p>}

        </div>
     </div>
  )


}

export default Calculate;
