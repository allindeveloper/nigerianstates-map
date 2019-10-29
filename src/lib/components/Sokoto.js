import React, { Component } from "react";
import PropTypes from "prop-types"; 
class Sokoto extends Component {
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
          <span id={this.state.id} ref="myRef1">Sokoto State</span>
          <svg
            height={this.props.height}
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display:"block", overflow: "hidden", position: "relative", left: "-0.2px", top: "0.733333px"}}
            viewBox="39.080847716972926 -0.0036996953663637755 91.0549712327208 73.99390732724066"
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
              strokeWidth="0.6733499138615321"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0"}}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
               stroke="#ffffff"id={this.state.id}ref="myRef2"
              d="M340.6,61.4L336.40000000000003,64.7L329.90000000000003,68.5L321.8,68.5L313.7,66.5L312.3,65.2L311,63.6L308,62.7L306.2,62.400000000000006L302.3,62.400000000000006L301.1,63.50000000000001L300.70000000000005,65.60000000000001L300.6,67.9L299.6,71.4L297.6,72L294.3,70.7L288.3,71.5L283,74.4L282.1,76.80000000000001L283.5,91.4L281.1,96.10000000000001L278.1,97.4L275,98.30000000000001L256.2,100.10000000000001L252,103.4L248.9,108.5L244.6,114L240.6,116.7L240.1,122.3L241.79999999999998,128.6L242.1,135.2L238,139.7L212.6,140.7L200.29999999999998,138.7L197.29999999999998,148.89999999999998L196.6,188.79999999999998L195,189.79999999999998L193.2,189.99999999999997L192.29999999999998,188.69999999999996L190.99999999999997,187.89999999999995L189.09999999999997,188.49999999999994L187.79999999999995,187.79999999999995L185.99999999999994,187.39999999999995L184.29999999999995,187.79999999999995L168.49999999999994,194.99999999999994L165.59999999999994,198.59999999999994L161.89999999999995,200.89999999999995L158.19999999999996,199.59999999999994L155.49999999999997,196.59999999999994L156.19999999999996,188.49999999999994L159.89999999999995,180.49999999999994L162.69999999999996,167.19999999999993L162.09999999999997,134.49999999999994L165.09999999999997,129.19999999999993L171.09999999999997,127.69999999999993L176.79999999999995,129.49999999999994L180.49999999999994,127.59999999999994L180.79999999999995,121.19999999999993L178.29999999999995,107.49999999999993L178.69999999999996,104.19999999999993L179.49999999999997,101.09999999999994L180.19999999999996,94.89999999999993L178.29999999999995,89.59999999999994L175.49999999999994,84.79999999999994L175.99999999999994,81.29999999999994L176.89999999999995,78.09999999999994L177.39999999999995,76.89999999999993L177.79999999999995,75.59999999999994L177.79999999999995,73.99999999999994L177.99999999999994,72.39999999999995L179.29999999999995,69.89999999999995L179.59999999999997,67.19999999999995L178.09999999999997,65.39999999999995L175.89999999999998,66.09999999999995L174.39999999999998,68.19999999999995L173.09999999999997,70.39999999999995L170.49999999999997,71.99999999999994L167.39999999999998,71.69999999999995L164.39999999999998,70.29999999999994L161.59999999999997,68.29999999999994L158.69999999999996,67.29999999999994L155.69999999999996,66.49999999999994L150.09999999999997,64.39999999999995L144.89999999999998,61.29999999999995L142.39999999999998,58.89999999999995L139.79999999999998,56.79999999999995L136.79999999999998,57.49999999999995L133.89999999999998,58.89999999999995L128.49999999999997,57.99999999999995L122.19999999999997,58.19999999999995L121.49999999999997,58.299999999999955L121.79999999999997,56.399999999999956L121.89999999999996,35.899999999999956L127.29999999999997,35.69999999999995L129.79999999999995,35.19999999999995L132.19999999999996,34.09999999999995L145.19999999999996,21.49999999999995L149.09999999999997,18.69999999999995L153.59999999999997,16.89999999999995L180.09999999999997,10.399999999999949L182.79999999999995,10.099999999999948L184.69999999999996,10.999999999999948L186.49999999999997,12.79999999999995L188.39999999999998,13.59999999999995L193.29999999999998,13.89999999999995L201.7,12.39999999999995L213.6,12.89999999999995L216.5,12.39999999999995L217.4,11.99999999999995L220,10.09999999999995L221.1,8.69999999999995L222.5,5.59999999999995L223.5,4.29999999999995L225.8,3.09999999999995L238.10000000000002,0.9999999999999498L240.8,1.59999999999995L287.90000000000003,20.39999999999995L289.70000000000005,21.49999999999995L290.6,21.29999999999995L295.40000000000003,18.59999999999995L297.00000000000006,18.199999999999953L303.00000000000006,19.59999999999995L308.50000000000006,22.79999999999995L320.20000000000005,33.89999999999995L333.80000000000007,48.89999999999995L340.6000000000001,61.39999999999995Z"
              className="sm_state_NGA2871"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.4661264778706455"
              strokeLinejoin="round"
              transform="matrix(0.3663,0,0,0.3663,0,0)"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1"}}
              fillOpacity="1"
            />
            <desc style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}>
             Created by Uchendu Precious. @allindeveloper
            </desc>
            <defs style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}} />
            <text
              x="83.54615079365078"
              y="21.976190476190474"
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
              transform="matrix(0.3663,0,0,0.3663,52.9457,13.927)"
              className="sm_label_5"
            >
              <tspan
                dy="7.6480654761904745"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Sokoto
              </tspan>
            </text>
            <text
              x="83.54615079365078"
              y="21.976190476190474"
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
              transform="matrix(0.3663,0,0,0.3663,52.9457,13.927)"
              className="sm_label_42"
            >
              <tspan
                dy="7.6480654761904745"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Sokoto
              </tspan>
            </text>
            <text
              x="83.54615079365078"
              y="21.976190476190474"
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
              transform="matrix(0.3663,0,0,0.3663,52.9457,13.927)"
              className="sm_label_79"
            >
              <tspan
                dy="7.6480654761904745"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Sokoto
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
const sokotoData =
      '<div class="hoverinfo">' +
      "<h6>" +
      state +
      " </h6>" +
      "Total No Of Farms - " +
      val +
      "" +
      "</div>";
Sokoto.defaultProps = {
  hoverColor:"red",
  hoverBackgroundColor:"grey",
  renderData:sokotoData,
  defaultColor:"green",
  id:"sok",
    height: ""
};

Sokoto.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  height: PropTypes.string
};

export default Sokoto;
