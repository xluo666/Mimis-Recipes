import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';


const NavigateButton = ( {}) => {
    const navigate = useNavigate();
    return (
           <button className = "btn btn-primary" onClick = { () => {navigate('/signin')}}><FontAwesomeIcon icon={faUserSecret} /></button>
        );

    };
export default NavigateButton;