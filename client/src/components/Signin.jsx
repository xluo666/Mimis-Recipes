import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';

export const Signin = ({trackAccount,openSignin,trackPassword,signinFunction, showerror}) => {
    const navigate = useNavigate();
    return(
      <Myaccount>
        <Userid>
          <Title>My Account</Title>
          <Divid>
            {showerror === false && <InputBox required label="Email" onChange={trackAccount}/>}
            {showerror === true && <InputBox error label="Email" helperText="Incorrect entry." onChange={trackAccount}/>}
          </Divid>
          <Divid>
            {showerror === false && <InputBox required id="required" label="Password" onChange={trackPassword}/>}
            {showerror === true && <InputBox error id="err" label="Password" helperText="Incorrect entry." onChange={trackPassword}/>}
          </Divid>
          <div><Signinbutton onClick={signinFunction}>Sign In</Signinbutton></div>
          <div><Signinbutton onClick={() => navigate('/signup')}>Creat new account</Signinbutton></div>
        </Userid>
      </Myaccount>
    )

}

const Myaccount = styled.div`
text-align: center;
`
const Title = styled.p`
text-align: center;
margin-bottom: 10px;
margin-top: 30px;
font-size: 30px;
background: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

const Input = styled.input`

`
const Userid = styled.div`

`
const Divid = styled.div`
margin: 3% 5% 0% 5%;

`

const InputBox = styled(TextField)`
  text-align: center;
  background-color: white;
  @media screen and (max-width:900px) {
    width: 70%;
  }
`;

const Signinbutton = styled.button`

  :hover {
    opacity: 0.8;
    background-color: #fff;
  }
  cursor: pointer;
  text-transform: uppercase;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #fbeee0;
  border: 1px solid #422800;
  border-radius: 10px;
  color: #422800;
`




