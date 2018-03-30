import React, { Component } from 'react';
import Header from './Components/header/header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BodyContent from './Components/bodyContent/bodyContent';
import MarketingMaterial from './Components/marketingMaterial/marketingMaterialHome/marketingMaterial'
import Blog from "./Components/marketingMaterial/blog/blog"
import MarketPlace from "./Components/marketPlace/marketPlace"
// import BrowserRouter from './routes';
import SideNav from './Components/SideNav/sideNav';

import './App.css';

const Home = () => {
  return (
    <div>
      Home
    </div>
  );
};

class App extends Component {




  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="body-content">
            <Switch>
              <Route path="/" exact component={BodyContent} />
              <Route path="/marketing-material" exact component={MarketingMaterial} />
              <Route path="/marketing-material-blog" exact component={Blog} />
              <Route path="/marketplace" exact component={MarketPlace} />
              
            </Switch>
            <SideNav />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;