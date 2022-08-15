import React, { Component } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";


export const Navigation = ({}) => {
  const navigate = useNavigate();
  return(
  <Navi>
    <Button onClick={() => navigate('/')}>Home</Button>
    <Button >News</Button>
    <Button >Contact</Button>
    <Button >Help</Button>

  </Navi>
  )
};

const Navi = styled.div`
background-color: #E6E6FA;
overflow: hidden;
margin-bottom: 20px;
`

const Button = styled.button`

  float: left;
  color: #800080;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  background-color:  #E6E6FA;
  border:  none;
  :hover {
    cursor: pointer;
    background: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

  }
`
