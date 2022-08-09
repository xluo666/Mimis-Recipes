import React, { Component } from 'react';
import { SearchBar } from './SearchBar.jsx';
import { Navigation } from './Navigation.jsx';
import { Recommand } from './Recommand.jsx';
import axios from 'axios';
import styled from 'styled-components';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recommand: [],
      searchRecipes: [],
      clientInput: '',
      show: true,


    }

    this.trackInput = this.trackInput.bind(this);
    this.search = this.search.bind(this);


  }

  componentDidMount (){
    let recipeList = this;
    let options = {
      method: 'GET',
      url: 'https://yummly2.p.rapidapi.com/feeds/list',
      params: {limit: '24', start: '0'},
      headers: {
        'X-RapidAPI-Key': '65f798b551msh5bba221b1fa766bp15314bjsn32e2ed380e1f',
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
        'X-RapidAPI-Key': '65f798b551msh5bba221b1fa766bp15314bjsn32e2ed380e1f',
        'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
      }
    };

    axios.request(options)
      .then(function (response) {
        recipeList.setState({
          searchRecipes: response.data.feed,
          show: false,
        })
      })
      .catch(function (error) {
        console.error(error);
      })
  };



  render() {
    return (
      <Home>
        <Maintitle>Mimi's master recipe</Maintitle>
        <Navigation/>
        <SearchBar
          track={this.trackInput}
          compare={this.search}
          recipes={this.state.searchRecipes}

        />
        <Recommand
        recipes={this.state.recommand}
        show={this.state.show}

        />
      </Home>
    );
  }
}

export default App;

const Maintitle = styled.div`
text-align: center;
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