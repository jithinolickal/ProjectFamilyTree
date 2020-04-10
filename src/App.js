import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeBody from "./components/HomeBody"

class App extends React.Component{
  render(){
    return(
      <div className="AppDiv">
        {/* Hello World! */}
        <Header></Header>
        <HomeBody></HomeBody>
        <Footer></Footer>
      </div>
    );
  }
}
export default App;
