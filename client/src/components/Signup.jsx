import React from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const Signup = ({trackAccount,trackPassword, signupFunction, signupError}) => {

    return(
      <Myaccount>

        <Userid>
          <Title>Create new account</Title>
          <Divid>
            {signupError === false && <InputBox required label="Email" onChange={trackAccount}/>}
            {signupError === true && <InputBox error label="Email" helperText="Incorrect entry." onChange={trackAccount}/>}
          </Divid>
          <Divid>
            {signupError === false && <InputBox required label="Password" onChange={trackPassword}/>}
            {signupError === true && <InputBox error label="Password" helperText="Incorrect entry." onChange={trackPassword}/>}
          </Divid>
          <Signinbutton onClick={signupFunction}>Sign up</Signinbutton>
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

const InputBox = styled(TextField)`
  text-align: center;
  background-color: white;
  @media screen and (max-width:900px) {
    width: 70%;
  }
`;

const Userid = styled.div`

`
const Divid = styled.div`
margin: 3% 5% 0% 5%;

`

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

const Errormessage = styled.p``