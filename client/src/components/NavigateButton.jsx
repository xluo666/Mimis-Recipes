import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';


const NavigateButton = ( {}) => {
    const navigate = useNavigate();
    return (
           <Signinbutton className = "btn btn-primary" onClick = { () => {navigate('/signin')}}><FontAwesomeIcon icon={faUserSecret} /></Signinbutton>
        );

    };
export default NavigateButton;

const Signinbutton = styled.a`
margin-left: 250px;
font-size: 30px;

`