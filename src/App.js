import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import HomeBody from "./components/HomeBody"
import FamilyTree from "./components/FamilyTree"
import Gallery from "./components/Gallery"
import About from "./components/About"
import Footer from "./components/Footer"

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component{
  render(){
    return(
      <div className="AppDiv">
        <Router>
          <Nav className="navDiv"></Nav>
          <Switch>
            <Route path="/" exact component={HomeBody}/>
            <Route path="/FamilyTree" component={FamilyTree}/>
            <Route path="/Gallery" component={Gallery}/>
            <Route path="/About" component={About}/>
          </Switch>
        </Router>

        <Footer></Footer>
      </div>
    );
  }
}
export default App;
