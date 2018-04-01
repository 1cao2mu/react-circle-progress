/*
 * @Author: cyy 
 * @Date: 2018-04-01 11:17:52 
 * @Last Modified by:   cyy 
 * @Last Modified time: 2018-04-01 11:17:52 
 */
import React, { Component } from 'react';
import CircleProgress from "../src/componets/circleProgress";
import './App.css';
import './css/circleProgress.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CircleProgress color={"#39bff7"} smallradius={30} radius={45} borderWidth={6} percent={88.88} bgcolor={"#e8eff4"} innerColor={"#ffffff"} />
      </div>
    );
  }
}

export default App;
