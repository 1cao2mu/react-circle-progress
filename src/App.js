/*
 * @Author: cyy 
 * @Date: 2018-04-01 11:17:52 
 * @Last Modified by: cyy
 * @Last Modified time: 2018-04-02 15:43:16
 */
import React, { Component } from 'react';
import CircleProgress from "../src/componets/circleProgress";
import CanCirPro from "../src/componets/canCirPro";
import './App.css';
import './css/circleProgress.css';
import './css/canCirPro.css';

class App extends Component {
  render() {
    return (
      <div style={{ height: 400, width: 400, backgroundColor: "pink" }}>
        <CircleProgress color={"#39bff7"} smallradius={30} radius={45} borderWidth={6} percent={88.88} bgcolor={"#e8eff4"} innerColor={"#ffffff"} />
        {/* <CanCirPro color={"#39bff7"} smallradius={30} radius={45} borderWidth={6} percent={97} bgcolor={"#e8eff4"} innerColor={"#ffffff"} /> */}
        <CanCirPro />
        <svg height="108" version="1.1" width="108" xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="ring"
            rate="${deal.attrs.rate}"
            fill="none"
            x="54" y="7" r="47"
            stroke="#fd30ae"
            stroke-linecap="round"
            d="M54,7A47,47,0,1,1,11,71"
            stroke-width="10" />
        </svg>
      </div>
    );
  }
}

export default App;
