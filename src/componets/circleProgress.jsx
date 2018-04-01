import React, { Component } from "react";
import PropTypes from "prop-types";
export default class CircleProgress extends Component {
    constructor(props) {
        super(props);
        const percent = props.percent;
        let { leftTransformerDegree, rightTransformerDegree } = this.switchDeg(this.props.type, percent)
        this.state = {
            percent: this.props.percent,
            borderWidth: this.props.borderWidth < 2 || !this.props.borderWidth ? 2 : this.props.borderWidth,
            rightTransformerDegree: rightTransformerDegree,
            leftTransformerDegree: leftTransformerDegree,
        };
    }

    switchDeg(type, percent) {
        let leftTransformerDegree = '0deg';
        let rightTransformerDegree = '0deg';
        switch (type) {
            case "right_bottom":
                if (percent <= 50) {//低部右下角开始衰减
                    leftTransformerDegree = '' + percent * 3.6 + 'deg';
                    rightTransformerDegree = '0deg'
                } else {
                    leftTransformerDegree = '180deg';
                    rightTransformerDegree = '' + (percent - 50) * 3.6 + 'deg';
                }
                break;
            case "left_top":
                if (percent <= 50) {//顶部左上角开始衰减
                    rightTransformerDegree = '' + percent * 3.6 + 'deg';
                    leftTransformerDegree = '0deg'
                } else {
                    rightTransformerDegree = '180deg';
                    leftTransformerDegree = '' + (percent - 50) * 3.6 + 'deg';
                }
                break;
            case "left_bottom":
                if (percent <= 50) {//顶部左下角开始衰减
                    rightTransformerDegree = '-' + percent * 3.6 + 'deg';
                    leftTransformerDegree = '-0deg'
                } else {
                    rightTransformerDegree = '-180deg';
                    leftTransformerDegree = '-' + (percent - 50) * 3.6 + 'deg';
                }
                break;

            default:
                if (percent <= 50) {//顶部右上角开始衰减
                    leftTransformerDegree = '-' + percent * 3.6 + 'deg';
                    rightTransformerDegree = '-0deg'
                } else {
                    leftTransformerDegree = '-180deg';
                    rightTransformerDegree = '-' + (percent - 50) * 3.6 + 'deg';
                }
                break;
        }
        return { leftTransformerDegree, rightTransformerDegree };
    }



    render() {
        return (
            <div
                className="circle"
                style={{
                    width: this.props.radius * 2,
                    height: this.props.radius * 2,
                    borderRadius: this.props.radius,
                    backgroundColor: this.props.bgcolor,
                }}
            >
                <div
                    className="left-wrap"
                    style={{
                        width: this.props.radius,
                        height: this.props.radius * 2,
                        left: 0,
                    }}
                >
                    <div
                        className="loader"
                        id="id1"
                        style={{
                            left: this.props.radius,
                            width: this.props.radius,
                            height: this.props.radius * 2,
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            backgroundColor: this.props.color,
                            transform: 'rotate(' + this.state.leftTransformerDegree + ')',
                        }}
                    />

                </div>
                <div
                    className="right-wrap"
                    style={{
                        width: this.props.radius,
                        height: this.props.radius * 2,
                        left: this.props.radius,
                    }}
                >
                    <div
                        className="loader2"
                        id="id2"
                        style={{
                            left: -this.props.radius,
                            width: this.props.radius,
                            height: this.props.radius * 2,
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            backgroundColor: this.props.color,
                            transform: 'rotate(' + this.state.rightTransformerDegree + ')',
                        }}
                    />
                </div>

                <div
                    className="inner-circle"
                    style={{
                        left: this.props.borderWidth,
                        top: this.props.borderWidth,
                        width: (this.props.radius - this.props.borderWidth) * 2,
                        height: (this.props.radius - this.props.borderWidth) * 2,
                        borderRadius: this.props.radius - this.props.borderWidth,
                        backgroundColor: this.props.innerColor,
                    }}
                >
                    {this.props.children ? this.props.children :
                        <div className="inner-circle" style={{
                            width: this.props.smallradius * 2,
                            height: this.props.smallradius * 2,
                            borderRadius: this.props.smallradius,
                            backgroundColor: this.props.bgcolor,
                        }}  >
                            <div style={{ fontSize: 12, color: "#36383c" }}>{this.props.percent}%</div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

CircleProgress.propTypes = {
    color: PropTypes.string,
    bgcolor: PropTypes.string,
    innerColor: PropTypes.string,
    radius: PropTypes.number,
    percent: PropTypes.number,
    borderWidth: PropTypes.number,
    textStyle: PropTypes.string,
};

CircleProgress.defaultProps = {
    color: '#000',
    radius: 20,
    percent: 0,
    borderWidth: 2,
    bgcolor: '#e3e3e3',
    innerColor: '#fff',
    disabled: false,
    textStyle: '',
};
