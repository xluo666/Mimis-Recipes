import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const Modal = ({closeWindow, i, recipes }) => {

  const [steps, setSteps] = useState([]);
  console.log(steps)

  let pre = recipes[i].content.preparationSteps;
  if(pre !== null && pre.length > 0) {
    useEffect(() => {
      setSteps(pre);
    }, []);

  }

  return(
    <Modalstyle>
      <Closebutton onClick={closeWindow}>x</Closebutton>
      <Uneed>
        <P>What you need:</P>
        {recipes[i].content.ingredientLines.map((ingredientLine, j) => {
          return (
            <Ingredient key={j}>{ingredientLine.wholeLine}</Ingredient>
          )
        })}
        <P>Prepare Step:</P>
        {steps.map((step, k) => {
          return (
            <Prepare key={k}>{step}</Prepare>
          )
        })}

      </Uneed>



      {/* <button></button> */}

    </Modalstyle>
  )
}
const Modalstyle = styled.div`
z-index: 200;
position:fixed;
width: 80%;
height: 80%;
top:50%;
left:50%;
transform: translate(-50%,-50%);
overflow-x: hidden;
overflow-y: auto;
max-height: 80%;
box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
border-radius: 4px;
background-color: #f6f2e6;
`
const Closebutton = styled.button`
float: right;
`
const Ingredient = styled.div`

`
const Uneed = styled.div`
text-align: center;
margin-top: 30px;
margin-bottom: 30px;
`
const P = styled.p`

`
const Prepare = styled.div`

`

