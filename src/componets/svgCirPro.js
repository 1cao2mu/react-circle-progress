/*
 * @Author: cyy 
 * @Date: 2018-04-16 17:42:26 
 * @Last Modified by: cyy
 * @Last Modified time: 2018-04-16 18:54:02
 */
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SvgCirPro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            percent: 0,
        };
    }

    static defaultProps = {
        offset: 3.5,
        radius: 45,
        percent: 15,
        borderWidth: 6,
        startcolor: '#ffd460',
        centercolor: '#fcc241',
        endColor: '#f79d00',
        textStyle: { fontSize: 20, color: "#fa9a22", textAlign: 'center' },
        openAnimation: true,
    }
    static propTypes = {
        offset: PropTypes.number,
        radius: PropTypes.number,
        percent: PropTypes.number,
        borderWidth: PropTypes.number,
        startcolor: PropTypes.string,
        centercolor: PropTypes.string,
        endColor: PropTypes.string,
        textStyle: PropTypes.object,
        openAnimation: PropTypes.bool,
    }

    /**
    * 传入相应参数返回圆形制定半径的弧度坐标
    * @param {*} x 中心点X坐标
    * @param {*} y 中心点y坐标
    * @param {*} R 圆半径
    * @param {*} a 角度
    */
    coordMap(x, y, R, a) {
        var ta = (360 - a) * Math.PI / 180,
            tx, ty;
        tx = R * Math.cos(ta); // 角度邻边
        ty = R * Math.sin(ta); // 角度的对边
        return {
            x: x + tx,
            y: y - ty // 注意此处是“-”号，因为我们要得到的Y是相对于（0,0）而言的。
        }
    }


    render() {
        let endAngle = 3.6 * (this.props.openAnimation ? this.state.percent : this.props.percent);
        let radius = this.props.radius;
        let width = (this.props.radius + this.props.borderWidth) * 2;
        let height = (this.props.radius + this.props.borderWidth) * 2;

        let startPoint1, endPoint1, endPoint2;
        if (endAngle <= 180) {
            startPoint1 = this.coordMap(width / 2, height / 2, radius, 0 - 120);

            endPoint1 = this.coordMap(width / 2, height / 2, radius, endAngle - 120);
        } else {
            startPoint1 = this.coordMap(width / 2, height / 2, radius, 0 - 120);

            endPoint1 = this.coordMap(width / 2, height / 2, radius, 180 - 120);
            endPoint2 = this.coordMap(width / 2, height / 2, radius, endAngle - 120);
        }







        return (<div className="svgcirproOut" style={{
            width: width,
            height: height,
        }} >
            <svg className="svgcirproIn" ref={svgcirpro => {
            }} height={height} version="1.1" width={width} xmlns="http://www.w3.org/2000/svg"
            >

                <defs>

                    <linearGradient id={"lgrad1" + this.props.startcolor} x1="0" y1="0" x2="0" y2="100%" >
                        <stop offset="0%" style={{ stopColor: this.props.startcolor, stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: this.props.centercolor, stopOpacity: 1 }} />
                    </linearGradient>

                    <linearGradient id={"lgrad2" + this.props.startcolor} x1="0" y1="100%" x2="0" y2="0" >
                        <stop offset="0%" style={{ stopColor: this.props.centercolor, stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: this.props.endColor, stopOpacity: 1 }} />
                    </linearGradient>
                </defs>

                <path
                    d={"M" + startPoint1.x + "," + startPoint1.y + "A" + radius + "," + radius + ",0,0,1," + endPoint1.x + "," + endPoint1.y}

                    stroke={"url(#lgrad1" + this.props.startcolor + ")"}
                    fill="none"
                    strokeLinecap="round"
                    strokeWidth={this.props.borderWidth} />

                {endAngle > 180 ? <path
                    d={"M" + endPoint1.x + "," + endPoint1.y + "A" + radius + "," + radius + ",0,0,1," + endPoint2.x + "," + endPoint2.y}

                    stroke={"url(#lgrad2" + this.props.startcolor + ")"}
                    fill="none"
                    strokeLinecap="round"
                    strokeWidth={this.props.borderWidth} /> : null
                }

            </svg>

            <div className="svgcirproContent" style={{
                width: width,
                height: height,
                marginTop: -(height + this.props.offset)
            }} >
                {this.props.children ? this.props.children :
                    <div style={this.props.textStyle}>{this.props.openAnimation ? this.state.percent : this.props.percent}%</div>}
            </div>

        </div>);
    }
    componentWillReceiveProps(newprops) {
        if (this.props.openAnimation) {
            this.setState({ percent: 0 });
            this.time = setTimeout(() => {
                this.componentDidMount();
            }, 1);
        } else {
            this.setState({ percent: newprops.percent });
        }

    }
    componentDidMount() {
        if (this.props.openAnimation) {
            this.startAnimation();
        }
    }

    startAnimation() {
        if (this.state.percent < this.props.percent - 2) {
            this.time = setTimeout(() => {
                this.setState({ percent: this.state.percent + 2 });
                this.startAnimation();
            }, 11);
        } else {
            this.setState({ percent: this.props.percent });
        }
    }

    onDraw(svgcirpro) {
        if (svgcirpro) {

        }
    }
}
/**
 * Arc(A rx,ry,xrotation,flag1,flag2,x,y)
 * rx.ry 椭圆的半轴大小
 * xrotation 椭圆的x轴与水平方向顺时针的夹角
 * flag1只有两个值 1大角度 0小角度 是否大于180
 * flag2只有两个值 1为顺时针 0为逆时针
 * x y 为终点坐标
 * 
 * 
 * 100：per1=per2：100
 */