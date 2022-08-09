import React, { useState } from 'react';
import styled from 'styled-components';
import {Modal} from './Modal.jsx';

export const Cardmodule = ({ recipes }) => {

  const [showRecommand, setShowRecommand] = useState(false);
  const [current, setCurrent] = useState();


  const getRecipe = (e) => {
    setShowRecommand(true);
    for(let i = 0; i < recipes.length; i++) {
      if(e.target.innerText === recipes[i].display.displayName) {
        setCurrent(i);
      }
    }
  };

  const closeWindow = () => {
    setShowRecommand(false);
  };
  return(
    <div>
       {showRecommand === true &&
       <Modal
       closeWindow={closeWindow}
       i={current}
       recipes={recipes}
       />
       }
      <Container>
        {recipes.map((recipe, i) => {
          return(
            <Card className="card" key={i}>
              <Img src={recipe.display.images[0]}/>
              <Con className="container">
                <h4 onClick={(e) => getRecipe(e)}>
                  <b>{recipe.display.displayName}</b>
                  <div>How to cook</div>
                </h4>
              </Con>
            </Card>

          )
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

:hover {
  cursor: pointer;
  background: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}

`
const Img = styled.img`
width:100%;

`
