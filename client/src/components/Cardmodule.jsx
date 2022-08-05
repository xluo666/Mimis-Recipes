import React, { Component } from 'react';
import styled from 'styled-components';

export const Cardmodule = ({ recipes }) => {
  return(
    <div>

      <Container>
        {recipes.map((recipe, i) => {
          return(
            <Card className="card" key={i}>
              <Img src={recipe.display.images[0]}/>
              <Con className="container">
                <h4><b>{recipe.display.displayName}</b></h4>
                <p>HOW TO COOK</p>
              </Con>
            </Card>
          );
        })}
      </Container>
    </div>

  )
};


const Container = styled.div`

display: block;


`
const Card = styled.div`
width: 40%;
float: right;
padding: 20px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
`
const Con = styled.div`
padding: 2px 16px;
`
const Img = styled.img`
width:100%;

`