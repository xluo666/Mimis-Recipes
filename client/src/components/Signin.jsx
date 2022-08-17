import React from 'react';
import styled from 'styled-components';

export const Signin = ({trackAccount,openSignin,trackPassword,signinFunction}) => {

    return(
      <Myaccount>
        <Userid>
          <Title>My Account</Title>
          <Divid><Input placeholder='Email' onChange={trackAccount} ></Input></Divid>
          <Divid><Input placeholder='Password' onChange={trackPassword} ></Input></Divid>
          <Signinbutton onClick={signinFunction}>Sign In</Signinbutton>
        </Userid>

        {/*
        <Create onClick={createNewAccount}>Create New Account</Create>
        <Forget onClick={forgetPassword}>Forget Password</Forget>
         */}


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
margin-top: 10px;
`