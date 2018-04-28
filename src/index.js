import CircleProgress from "./componets//circleProgress";
import CanCirPro from "./componets/canCirPro";
import SvgCirPro from "./componets/svgCirPro";
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<div>
    <CircleProgress percent={33} />
    <CanCirPro percent={66} />
    <SvgCirPro percent={99}/>
</div>, document.getElementById('root'));

