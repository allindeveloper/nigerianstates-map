import React, { Component } from "react";
import PropTypes from "prop-types";
class Osun extends Component {
  constructor(props) {
    super(props);


    this.state = {
      hoverColor: this.props.hoverColor,
      hoverBackgroundColor: this.props.hoverBackgroundColor,
      renderData: this.props.renderData,
      showRenderData: this.props.showRenderData,
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
          <span id={this.state.id} ref="myRef1">Osun State</span>
          <svg
            height={this.props.height}
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", overflow: "hidden", position: "relative", left: "-0.2px", top: "0.733333px" }}
            viewBox="36.56172169583928 180.40084575917908 41.885286767051575 34.03719737053071"
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
              strokeWidth="0.3097409603763048"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0" }}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
              stroke="#ffffff" id={this.state.id} ref="myRef2"
              d="M200,497.2L198.1,504.09999999999997L195.5,506.4L192.4,507.9L188.5,513L187.8,523.1L186.9,526.8000000000001L187.4,531.1L194,549L193.9,552.3L189.8,553.5L186.20000000000002,555.3L184.70000000000002,559.3L184.00000000000003,563.3L184.10000000000002,569.5999999999999L183.8,571.8L184,573.6999999999999L183.8,575.5999999999999L182.9,576.1999999999999L180.70000000000002,575.9999999999999L179.70000000000002,575.4999999999999L175.50000000000003,572.7999999999998L172.40000000000003,571.4999999999999L169.10000000000002,572.3999999999999L165.60000000000002,575.2999999999998L163.3,579.0999999999998L162.70000000000002,581.2999999999998L161.4,583.0999999999998L158.20000000000002,584.7999999999998L156.9,583.1999999999998L153.5,583.4999999999998L152,583.8999999999997L150.6,584.4999999999998L148.79999999999998,584.3999999999997L147.1,583.8999999999997L144.1,585.4999999999998L141.79999999999998,585.3999999999997L141.29999999999998,584.1999999999997L141.1,582.7999999999997L140.29999999999998,580.6999999999997L139.29999999999998,578.5999999999997L136.6,576.2999999999997L132.7,576.3999999999997L129.6,578.3999999999997L126.19999999999999,578.7999999999997L125.49999999999999,575.0999999999997L123.79999999999998,571.4999999999997L117.89999999999998,574.3999999999996L123.59999999999998,543.9999999999997L123.09999999999998,541.5999999999997L121.49999999999999,539.6999999999997L120.19999999999999,536.9999999999997L118.29999999999998,534.6999999999997L115.99999999999999,533.1999999999997L114.29999999999998,531.2999999999997L114.39999999999998,528.8999999999997L115.79999999999998,526.7999999999997L116.59999999999998,524.3999999999997L116.99999999999999,521.8999999999997L117.29999999999998,516.3999999999997L118.69999999999999,512.5999999999998L124.29999999999998,514.0999999999998L128.6,510.9999999999998L128.5,509.19999999999976L130.1,507.69999999999976L131.6,505.4999999999998L133.4,503.69999999999976L136,504.69999999999976L138.3,506.69999999999976L141.4,511.69999999999976L144.70000000000002,512.3999999999997L146.50000000000003,510.59999999999974L148.90000000000003,508.89999999999975L149.90000000000003,507.59999999999974L150.70000000000005,507.2999999999997L152.10000000000005,506.09999999999974L153.70000000000005,505.19999999999976L155.20000000000005,504.59999999999974L157.00000000000006,504.2999999999997L158.10000000000005,502.6999999999997L158.30000000000004,499.7999999999997L157.70000000000005,496.9999999999997L163.10000000000005,496.6999999999997L168.50000000000006,497.1999999999997L173.20000000000005,496.1999999999997L175.30000000000004,495.2999999999997L177.60000000000005,494.7999999999997L183.00000000000006,494.2999999999997L186.30000000000007,492.9999999999997L189.80000000000007,493.09999999999974L191.50000000000006,495.9999999999997L194.00000000000006,497.59999999999974L198.80000000000007,496.9999999999997L200.00000000000006,497.1999999999997Z"
              className="sm_state_NGA2855"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.21441817982049696"
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
              x="57.06484126984127"
              y="198.70138888888889"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1" }}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,36.1637,125.9231)"
              className="sm_label_21"
            >
              <tspan
                dy="7.646701388888886"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Osun
              </tspan>
            </text>
            <text
              x="57.06484126984127"
              y="198.70138888888889"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1" }}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,36.1637,125.9231)"
              className="sm_label_58"
            >
              <tspan
                dy="7.646701388888886"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Osun
              </tspan>
            </text>
            <text
              x="57.06484126984127"
              y="198.70138888888889"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1" }}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,36.1637,125.9231)"
              className="sm_label_95"
            >
              <tspan
                dy="7.646701388888886"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Osun
              </tspan>
            </text>
            <text
              x="57.06484126984127"
              y="198.70138888888889"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1" }}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,36.1637,125.9231)"
              className="sm_label_132"
            >
              <tspan
                dy="7.646701388888886"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Osun
              </tspan>
            </text>
            <text
              x="57.06484126984127"
              y="198.70138888888889"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1" }}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,36.1637,125.9231)"
              className="sm_label_169"
            >
              <tspan
                dy="7.646701388888886"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Osun
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
const osunData =
  '<div class="hoverinfo">' +
  "<h6>" +
  state +
  " </h6>" +
  "Total No Of Farms - " +
  val +
  "" +
  "</div>";
Osun.defaultProps = {
  hoverColor: "red",
  hoverBackgroundColor: "grey",
  renderData: osunData,
  defaultColor: "green",
  id: "osu",
  height: ""
};

Osun.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  height: PropTypes.string
};

export default Osun;
