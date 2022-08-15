import React, { Component } from 'react';
import { SearchBar } from './SearchBar.jsx';
import { Navigation } from './Navigation.jsx';
import { Recommand } from './Recommand.jsx';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import {  faSquareFacebook, faSquareTwitter , faSquareInstagram} from '@fortawesome/free-brands-svg-icons';
import { Signin } from './Signin.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigateButton from './NavigateButton.jsx';
import { Cardmodule } from './Cardmodule.jsx';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recommand: [],
      searchRecipes: [],
      clientInput: '',
      emailInput: '',
      passWordInput: '',

    }

    this.trackInput = this.trackInput.bind(this);
    this.search = this.search.bind(this);
    this.trackAccount = this.trackAccount.bind(this);
    this.trackPassword = this.trackPassword.bind(this);
    this.signinFunction = this.signinFunction.bind(this);


  }

  componentDidMount (){
    let recipeList = this;
    let options = {
      method: 'GET',
      url: 'https://yummly2.p.rapidapi.com/feeds/list',
      params: {limit: '24', start: '0'},
      headers: {
        'X-RapidAPI-Key': 'dcdaa09527mshf19c4bdd9b3ea9fp1d2cb0jsnce25356362a2',
        'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
      }
    }
    axios.request(options)
      .then(function (response) {
        recipeList.setState ({
          recommand: response.data.feed
        })
      })
      .catch(function (error) {
        console.error(error);
      });


  };

  trackInput(e){
    this.setState({
      clientInput: e.target.value
    })
  };

  search(){
    console.log('aaaaaaaaaaaaaaaaaaaaaaa')
    let recipeList = this;

    let options = {
      method: 'GET',
      url: 'https://yummly2.p.rapidapi.com/feeds/search',
      params: {
        start: '0',
        maxResult: '50',
        maxTotalTimeInSeconds: '7200',
        q: this.state.clientInput,
        FAT_KCALMax: '1000'
      },
      headers: {
        'X-RapidAPI-Key': 'dcdaa09527mshf19c4bdd9b3ea9fp1d2cb0jsnce25356362a2',
        'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
      }
    };

    axios.request(options)
      .then(function (response) {
        recipeList.setState({
          searchRecipes: response.data.feed,
        })
      })
      .catch(function (error) {
        console.error(error);
      })
  };

  trackAccount(e) {
    this.setState({
      emailInput: e.target.value
    })
  }

  trackPassword() {
    this.setState({
      passWordInput: e.target.value
    })
  }

  // createAccount(){

  // }
  // forgetPassword() {

  // }

  signinFunction() {

  }


  render() {
    return (
      <BrowserRouter>
      <Home>
        <Top>
          <Twit>
            <Span><a href="https://twitter.com/?lang=en" target="_blank"><FontAwesomeIcon icon={faSquareTwitter} /></a></Span>
            <Span><a href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} /></a></Span>
            <Span><a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faSquareInstagram} /></a></Span>
            <Maintitle>Mimi's master recipe</Maintitle>
            <NavigateButton />
          </Twit>

        </Top>
        <Navigation
        />
        <SearchBar
          track={this.trackInput}
          compare={this.search}
        />
        <Routes>
          <Route
            path='/'
              element={
                <Recommand
                  recipes={this.state.recommand}
                />
              }
          />
          <Route
            path='/search'
              element={
                <Cardmodule
                  recipes={this.state.searchRecipes}
                />
              }
          />


          <Route
            path='/signin'
             element={
              <Signin
                trackAccount={this.trackAccount}
                trackPassword={this.trackPassword}
              // createAccount={this.createAccount}
              // forgetPassword={this.forgetPassword}
                signinFunction={this.signinFunction}
              />
             }
          />
       </Routes>
      </Home>
      </BrowserRouter>
    );
  }
}

export default App;

const Maintitle = styled.span`
text-align: center;
margin-left: 25%;
margin-bottom: 30px;
margin-top: 30px;
font-size: 60px;
background: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`
const Home = styled.div`
background-color: #f6f2e6;

`
const Twit = styled.div`
padding: 30px;

`
const Top = styled.div`
display: inline;

`
const Span = styled.span`
margin-left: 15px;
font-size: 30px;

a {
  color: black;
}
`
const Spanlogin = styled.span`
margin-left: 300px;
font-size: 30px;

a {
  color: black;
}
`
