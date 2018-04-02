/*
 * @Author: cyy 
 * @Date: 2018-04-02 15:04:13 
 * @Last Modified by: cyy
 * @Last Modified time: 2018-04-02 17:24:02
 */
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CanCirPro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            percent: 0,
        };
    }

    static defaultProps = {
        radius: 45,
        percent: 47.7,
        borderWidth: 6,
        startcolor: '#ffd460',
        centercolor: '#fcc241',
        endColor: '#f79d00',
        textStyle: { fontSize: 11, color: "#fa9a22", textAlign: 'center' },
        openAnimation: true
    }
    static propTypes = {
        radius: PropTypes.number,
        percent: PropTypes.number,
        borderWidth: PropTypes.number,
        startcolor: PropTypes.string,
        centercolor: PropTypes.string,
        endColor: PropTypes.string,
        textStyle: PropTypes.object,
        openAnimation: PropTypes.bool,
    }
    render() {
        return (<div className="cancirproOut" style={{
            width: (this.props.radius + this.props.borderWidth) * 2,
            height: (this.props.radius + this.props.borderWidth) * 2,
        }} >
            <canvas className="cancirproIn" ref={cancirpro => {
                this._cancirpro = cancirpro;

                this.onDraw(cancirpro);
            }}
                width={(this.props.radius + this.props.borderWidth) * 2} height={(this.props.radius + this.props.borderWidth) * 2}
            />

            <div className="cancirproContent" style={{
                width: (this.props.radius + this.props.borderWidth) * 2,
                height: (this.props.radius + this.props.borderWidth) * 2,
            }} >
                {this.props.children ? this.props.children :
                    <div style={this.props.textStyle}>{this.props.openAnimation ? this.state.percent : this.props.percent}%</div>}
            </div>

        </div>);
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

    onDraw(cancirpro) {
        if (cancirpro) {
            let percent=this.props.openAnimation ? this.state.percent : this.props.percent;
            let canvas = this._cancirpro;
            let ctx = canvas.getContext("2d");
            let width = (this.props.radius + this.props.borderWidth) * 2;
            if (window.devicePixelRatio) {
                canvas.style.width = width + "px";
                canvas.style.height = width + "px";
                canvas.height = width * window.devicePixelRatio;
                canvas.width = width * window.devicePixelRatio;
                ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            }

            ctx.beginPath();
            let grd1 = ctx.createLinearGradient(0, 0, 0, this.props.radius*2);
            grd1.addColorStop(0, this.props.startcolor);
            grd1.addColorStop(1, this.props.centercolor);
            ctx.lineCap = 'round';
            ctx.strokeStyle = grd1;
            ctx.lineWidth = this.props.borderWidth;

            if (percent < 50) {
                ctx.arc(this.props.radius + this.props.borderWidth, this.props.radius + this.props.borderWidth, this.props.radius, Math.PI * (1.4), Math.PI * (1.4 + percent / 50), false);
            } else {
                ctx.arc(this.props.radius + this.props.borderWidth, this.props.radius + this.props.borderWidth, this.props.radius, Math.PI * (1.4), Math.PI * (1.4 + 1), false);
            }
            ctx.stroke();


            if (percent > 50) {
                ctx.beginPath();
                let grd2 = ctx.createLinearGradient(0, this.props.radius*2, 0, 0);
                grd2.addColorStop(0, this.props.centercolor);
                grd2.addColorStop(1, this.props.endColor);
                ctx.lineCap = 'round';
                ctx.strokeStyle = grd2;
                ctx.lineWidth = this.props.borderWidth;
                ctx.arc(this.props.radius + this.props.borderWidth, this.props.radius + this.props.borderWidth, this.props.radius, Math.PI * (2.4), Math.PI * (2.4 + ((percent - 50) / 50)), false);
                ctx.stroke();
            }
        }
    }

}
