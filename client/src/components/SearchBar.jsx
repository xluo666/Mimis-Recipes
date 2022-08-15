import React, { Component } from 'react';
import styled from 'styled-components';
import { Cardmodule } from './Cardmodule.jsx';
import { useNavigate } from "react-router-dom";


export const SearchBar = ({ track, compare }) => {
  const navigate = useNavigate();

  return(
    <div>
      <Form>
        <Input placeholder='search for recipe...' onChange={track} />
        <Button1 onClick={() => {compare(); navigate('/search');}}>Go</Button1>
      </Form>
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

:hover {
  cursor: pointer;
}

`
const Form = styled.div`
width: 100%;
text-align: center;

`