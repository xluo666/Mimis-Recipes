import React, { Component } from 'react';
import styled from 'styled-components';

export const Navigation = ({}) => {
  return(
  <Navi>
    <a href="#home">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">Help</a>
  </Navi>
  )
};

const Navi = styled.div`
background-color: #E6E6FA;
overflow: hidden;
margin-bottom: 20px;

a {
  float: left;
  color: #800080;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
`
