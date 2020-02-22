/* 
    name: Gradients
    author: Anthony Vinicius Mota Silva
    version: 0.1.0
*/

import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

export const Background = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CenterBox = styled.div`
  background: rgba(0,0,0,0.6);
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 270px;
  box-shadow: 8px 8px 10px 0px rgba(0,0,0,0.4);

  .form-group {
    margin: 10px;
  }

  input {
    border: 2px solid #CECECE;
    background-color: transparent;
    width: 110px;
  }

  input::placeholder {
    color: #e5e5e5;
  }

  input:enabled {
    outline: none;
    background: none;
    color: #e5e5e5;
  }
`

export const Title = styled.h1`
  font-size: 25pt;
  color: #E5E5E5;
  margin-bottom: 20px;
`

export const BoxFinalCode = styled.div`
  background-color: #E5E5E5;
  width: 240px;
  margin-left: -5px;
  margin-top: 10px;
  border-radius: 3px;  
  font-size: 10pt;
  padding: 7px;
  text-align: left;
  border: 2px solid #CECECE;
`

function App() {  
  const [firstColor, setFirstColor] = useState('43CEA2');
  const [secondColor, setSecondColor] = useState('185A9D');

  useEffect(() => {
    document.title = "Gradients by Anthony Vinicius"
    document.getElementById("back").style.backgroundImage = 'linear-gradient(145deg, #' + firstColor + ', #' + secondColor + ')';
  }) 

  return (
    <Background id="back">
      <CenterBox>
        <Title>Gradients</Title>     
    
        <div className="row">       
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              id="firstColor" 
              aria-describedby="Enter the first color" 
              placeholder={"#" + firstColor} 
              onChange={e => setFirstColor(e.target.value)}
              autoComplete="off"
              maxLength="6"
            />
          </div>

          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              id="secondColor" 
              aria-describedby="Enter the second color" 
              placeholder={"#" + secondColor} 
              onChange={e => setSecondColor(e.target.value)}
              autoComplete="off"
              maxLength="6"
            />
          </div>  
        </div>       

        <BoxFinalCode>
          <p id="finalCode">background: linear-gradient(130deg, #{firstColor}, #{secondColor});</p>
        </BoxFinalCode>
      </CenterBox>
    </Background>
  );
}

export default App;