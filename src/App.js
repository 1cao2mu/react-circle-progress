/*
 * @Author: cyy 
 * @Date: 2018-04-01 11:17:52 
 * @Last Modified by: cyy
 * @Last Modified time: 2018-04-16 17:48:53
 */
import React, { Component } from 'react';
import CircleProgress from "../src/componets/circleProgress";
import CanCirPro from "../src/componets/canCirPro";
import SvgCirPro from "../src/componets/svgCirPro";
import './App.css';
import './css/circleProgress.css';
import './css/canCirPro.css';
import './css/svgCirPro.css';

class App extends Component {
  render() {


    return (
      <div style={{ height: 400, width: 400 }}>
        <CircleProgress color={"#39bff7"} smallradius={30} radius={45} borderWidth={6} percent={88.88} bgcolor={"#e8eff4"} innerColor={"#ffffff"} />
        {/* <CanCirPro color={"#39bff7"} smallradius={30} radius={45} borderWidth={6} percent={97} bgcolor={"#e8eff4"} innerColor={"#ffffff"} /> */}
        <CanCirPro />
        <SvgCirPro />
      </div>
    );
  }
}


export default App;
