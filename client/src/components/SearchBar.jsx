import React, { Component } from 'react';
import styled from 'styled-components';
import { Cardmodule } from './Cardmodule.jsx';


export const SearchBar = ({ track, compare, recipes }) => {
  return(
    <div>
      <Form>
        <Input placeholder='search for recipe...' onChange={track} />
        <Button1 onClick={compare}>Go</Button1>
      </Form>
      <Cardmodule
        recipes={recipes}

      />
    </div>

  )
};

const Input = styled.input`
padding: 10px;
font-size: 17px;
border: 1px solid grey;
width: 50%;
background: #f1f1f1;
border-top-left-radius:20px;
border-bottom-left-radius:20px;
`
const Button1 = styled.button`

width: 10%;
padding: 10px;
background: #E6E6FA;
color: #800080;
font-size: 17px;
border: 1px solid grey;
border-left: none;
cursor: pointer;
border-top-right-radius:20px;
border-bottom-right-radius:20px;

`
const Form = styled.div`
width: 100%;
text-align: center;

`