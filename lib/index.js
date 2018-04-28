import CircleProgress from "./componets//circleProgress";
import CanCirPro from "./componets/canCirPro";
import SvgCirPro from "./componets/svgCirPro";
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(CircleProgress, { percent: 33, radius: 50, borderWidth: 10, textStyle: { fontSize: 23, color: "#fa9a22", textAlign: 'center' }, color: "#61ebff" }),
    React.createElement(CanCirPro, { percent: 88, radius: 50, borderWidth: 10, textStyle: { fontSize: 23, color: "#fa9a22", textAlign: 'center' }, startcolor: "#ffd460", centercolor: "#fcc241", endColor: "#f79d00" }),
    React.createElement(SvgCirPro, { percent: 100, radius: 50, borderWidth: 10, textStyle: { fontSize: 23, color: "#58c3fd", textAlign: 'center' }, startcolor: "#61ebff", centercolor: "#3fa2f7", endColor: "#4f9cfc" })
), document.getElementById('root'));