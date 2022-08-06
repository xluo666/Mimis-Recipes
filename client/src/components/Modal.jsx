import React, { Component } from 'react';
import styled from 'styled-components';

export const Modal = ({closeWindow, i, recipes }) => {


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
      </Uneed>

      {/* <Preparestep></Preparestep>
      <Source></Source>
      <Video></Video>
      <button></button>  */}

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

