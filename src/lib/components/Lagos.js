import React, { Component } from "react";
import PropTypes from "prop-types";
class Lagos extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      hoverColor:this.props.hoverColor,
   hoverBackgroundColor:this.props.hoverBackgroundColor,
      renderData:this.props.renderData,
      defaultColor:this.props.defaultColor,
      id:this.props.id
    };
  }

  componentWillMount() {}
  componentDidMount() {
    let styles = document.head.appendChild(document.createElement("style"));
    styles.innerHTML += `
    #${this.state.id}:hover{fill: ${this.state.hoverColor} }
    #${this.state.id}{fill: ${this.state.defaultColor} }
    #${this.state.id}{background-color: ${this.state.hoverBackgroundColor} }
    `;
 this.refs.myRef1.innerHTML = "";
this.refs.myRef1.innerHTML += this.state.renderData;
  }                                                      
 render() {
    return (
      <div className="App">
       <a href="javascript:void(0)" className="tip">
          <span id={this.state.id} ref="myRef1"></span>
          <svg
            height={this.props.height}
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display:"block", overflow: "hidden", position: "relative", left: "-0.2px", top: "0.733333px"}}
            viewBox="1.2135000801667457 207.55891471721498 50.31585698252365 40.888122946522415"
            preserveAspectRatio="xMinYMin"
          >
            <rect
              x="-2015.01"
              y="-1637.27"
              width="5040"
              height="4095.65"
              r="0"
              rx="0"
              ry="0"
              fill="#ffffff"
              stroke="none"
              transform="matrix(0.3663,0,0,0.3663,0,0)"
              strokeWidth="0.3720848791271327"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0"}}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
              id={this.state.id}
              ref="myRef2"
              stroke="#ffffff"id={this.state.id}
              d="M139.9,636.5L122,633.2L100.7,631.4000000000001L65.2,633.2L63.300000000000004,632.9000000000001L62.300000000000004,632.2L61.50000000000001,631.2L60.300000000000004,630.3000000000001L61.7,629.8000000000001L62.6,630.3000000000001L63.9,629.2L64.4,629.6L64.9,632.1L67.80000000000001,629.4L68.60000000000001,630.1999999999999L70.30000000000001,629.8L71.9,629.6999999999999L73.30000000000001,629.4999999999999L74.60000000000001,628.7999999999998L75.80000000000001,627.4999999999999L75.9,626.5999999999999L75.80000000000001,624.8999999999999L76.60000000000001,624.5999999999999L80.00000000000001,624.5999999999999L81.80000000000001,624.3L85.4,623.0999999999999L86.60000000000001,623.3999999999999L88.4,622.6999999999998L90.10000000000001,621.6999999999998L91.30000000000001,620.3999999999999L91.70000000000002,618.5999999999999L92.70000000000002,618.1999999999999L99.70000000000002,617.0999999999999L98.50000000000001,616.3999999999999L97.40000000000002,616.5999999999999L92.70000000000002,615.3999999999999L88.00000000000001,617.1999999999998L83.50000000000001,619.7999999999998L79.50000000000001,621.0999999999998L77.10000000000001,621.2999999999998L74.2,622.7999999999998L72.3,623.3999999999999L71.2,623.3999999999999L69.9,622.8999999999999L68.9,622.8999999999999L68.10000000000001,622.1999999999998L67.7,620.0999999999998L68.3,618.2999999999998L68.3,617.0999999999998L66.89999999999999,617.9999999999998L65.89999999999999,618.7999999999997L64.1,620.8999999999997L61.8,621.2999999999997L61.5,621.9999999999998L62,623.7999999999997L61.7,625.4999999999998L60.6,627.2999999999997L60,628.8999999999997L59.1,629.8999999999997L60.7,632.3999999999997L60.300000000000004,634.2999999999997L55.400000000000006,634.7999999999997L46.10000000000001,634.3999999999997L35.20000000000001,635.5999999999998L22.30000000000001,634.9999999999998L3.70000000000001,636.6999999999998L3.70000000000001,631.5999999999998L4.30000000000001,627.8999999999997L7.600000000000009,628.1999999999997L10.40000000000001,627.8999999999997L12.600000000000009,628.5999999999998L14.700000000000008,628.4999999999998L16.90000000000001,626.9999999999998L18.50000000000001,625.1999999999998L18.40000000000001,623.9999999999998L19.300000000000008,623.4999999999998L37.50000000000001,624.2999999999997L42.400000000000006,623.6999999999997L43.60000000000001,622.2999999999997L44.50000000000001,618.1999999999997L45.70000000000001,616.4999999999997L47.00000000000001,615.0999999999997L48.20000000000001,610.7999999999997L48.70000000000001,609.5999999999997L51.30000000000001,608.4999999999997L53.30000000000001,609.0999999999997L57.10000000000001,611.0999999999997L59.00000000000001,613.5999999999997L62.00000000000001,613.6999999999997L63.60000000000001,613.3999999999997L64.60000000000001,611.9999999999998L64.80000000000001,610.7999999999997L65.60000000000001,609.9999999999998L114.20000000000002,609.7999999999997L119.10000000000002,611.0999999999997L118.20000000000002,613.2999999999997L116.20000000000002,614.8999999999997L115.50000000000001,616.9999999999998L116.30000000000001,618.9999999999998L116.4,620.0999999999998L118.80000000000001,621.9999999999998L121.30000000000001,620.6999999999998L123.80000000000001,618.9999999999998L126.50000000000001,618.3999999999997L128.9,619.2999999999997L129.8,620.9999999999998L129,622.7999999999997L124.2,625.3999999999997L124.4,627.4999999999998L126.30000000000001,628.6999999999998L128.60000000000002,629.2999999999998L129.8,630.3999999999999L131.20000000000002,631.2999999999998L133.10000000000002,630.7999999999998L137.90000000000003,630.9999999999999L140.20000000000005,631.7999999999998L140.30000000000004,633.9999999999999L139.90000000000003,636.4999999999999Z"
              className="sm_state_NGA2850"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.25757575757575757"
              strokeLinejoin="round"
              transform="matrix(0.3663,0,0,0.3663,0,0)"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity":"1"}}
              fillOpacity="1"
            />
            <desc style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}>
             Created by Uchendu Precious. @allindeveloper
            </desc>
            <defs style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}} />
            <text
              x="18.521500369047615"
              y="228.00143419444444"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,11.7376,144.4914)"
              className="sm_label_0"
            >
              <tspan
                dy="7.5483091944444425"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Lagos
              </tspan>
            </text>
          </svg>
          </a>
      </div>
    )
  }
}
const state = "State Info";
    const val = 55;
const lagosData =
      '<div class="hoverinfo">' +
      "<h6>" +
      state +
      " </h6>" +
      "Total No Of Farms - " +
      val +
      "" +
      "</div>";
Lagos.defaultProps = {
  hoverColor:"red",
  hoverBackgroundColor:"grey",
  renderData:lagosData,
  defaultColor:"green",
  id:"lag",
    height: ""
};

Lagos.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  height: PropTypes.string
};


export default Lagos;
