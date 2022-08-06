import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { Cardmodule } from './Cardmodule.jsx';


export const Recommand = ({ recipes, show }) => {

  return(
    <div>
      {show === true &&
      <div>
        <Subtitle>Recommand</Subtitle>
        <Cardmodule
          recipes={recipes}

        />
      </div>}
    </div>
  )
};

const Subtitle = styled.div`
text-align: center;
margin-bottom: 10px;
margin-top: 10px;
color: pink;
font-size: 30px;
`

