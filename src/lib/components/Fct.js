import React, { Component } from "react";
import PropTypes from "prop-types";
class Fct extends Component {
  constructor(props) {
    super(props);


    this.state = {
      hoverColor: this.props.hoverColor,
      hoverBackgroundColor: this.props.hoverBackgroundColor,
      renderData: this.props.renderData,
      defaultColor: this.props.defaultColor,
      id: this.props.id
    };
  }

  componentWillMount() { }
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
          <span id={this.state.id} ref="myRef1">
            Abuja
          </span>
          <svg
            height={this.props.height}
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", overflow: "hidden", position: "relative", left: "-0.2px", top: "0.733333px" }}
            viewBox="119.68960099155106 141.23217091550424 36.421988493088335 29.59756293089628"
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
              strokeWidth="0.2693399655446129"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0" }}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
              stroke="#ffffff" id={this.state.id} ref="myRef2"
              d="M413.1,389.4L413.3,391.09999999999997L413,392.7L412,393.4L411,393.7L409.5,396.4L407.6,405.5L407.40000000000003,410.7L407.70000000000005,419L403.80000000000007,436L400.20000000000005,446L397.30000000000007,450.8L393.6000000000001,454.8L382.9000000000001,460.2L371.2000000000001,463.3L359.2000000000001,465.2L355.5000000000001,465.8L352.4000000000001,465.40000000000003L347.30000000000007,465.6L343.50000000000006,465.20000000000005L341.50000000000006,461.6L341.00000000000006,460.1L340.20000000000005,400L340.6,397.6L342.6,396.70000000000005L358,396.1L363,397.6L370.7,405.20000000000005L374.7,407.40000000000003L375.2,407.3L386.9,390.6L394.79999999999995,389.70000000000005L397.09999999999997,389.80000000000007L399.4,390.1000000000001L401.5,391.00000000000006L403.3,389.70000000000005L405.90000000000003,386.00000000000006L408.90000000000003,387.1000000000001L410.40000000000003,390.00000000000006L413.1,389.40000000000003Z"
              className="sm_state_NGA3470"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.1864505911482583"
              strokeLinejoin="round"
              transform="matrix(0.3663,0,0,0.3663,0,0)"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1" }}
              fillOpacity="1"
            />
            <desc style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}>
              Created by Uchendu Precious. @allindeveloper
            </desc>
            <defs style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }} />
            <text
              x="134.78322134126984"
              y="157.80555540079365"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1" }}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontFamily="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,85.4162,100.0061)"
              className="sm_label_0"
            >
              <tspan
                dy="7.641492900793651"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                FCT
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
const fctData =
  '<div class="hoverinfo">' +
  "<h6>" +
  state +
  " </h6>" +
  "Total No Of Farms - " +
  val +
  "" +
  "</div>";
Fct.defaultProps = {
  hoverColor: "red",
  hoverBackgroundColor: "grey",
  renderData: fctData,
  defaultColor: "green",
  id: "fc",
  height: ""
};

Fct.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
};

export default Fct;
