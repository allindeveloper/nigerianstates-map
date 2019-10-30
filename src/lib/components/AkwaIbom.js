import React, { Component } from "react";
import PropTypes from "prop-types";
class AkwaIbom extends Component {
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
          <span id={this.state.id} ref="myRef1">AkwaIbom State</span>
          <svg
            height={this.props.height}
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: "hidden", position: "relative", left: " -0.2px" }}
            viewBox="120.72314808421582 242.8850008016675 78.30727526013978 63.63476030142688"
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
              strokeWidth="0.5790809259209168"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0" }}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
              stroke="#ffffff" id={this.state.id} ref="myRef2"
              d="M435.6,720.7L433.3,723.3000000000001L434.7,726.9000000000001L435.59999999999997,728.4000000000001L437.29999999999995,729.7L442.19999999999993,728.9000000000001L444.29999999999995,729.4000000000001L447.99999999999994,731.8000000000001L449.3999999999999,733.4000000000001L448.7999999999999,743.6000000000001L449.8999999999999,748.2000000000002L452.19999999999993,752.4000000000002L455.19999999999993,756.6000000000003L464.8999999999999,766.8000000000003L468.0999999999999,769.2000000000003L469.0999999999999,769.4000000000003L469.5999999999999,769.8000000000003L470.7999999999999,773.4000000000003L471.7999999999999,774.8000000000003L470.8999999999999,777.2000000000003L470.7999999999999,778.0000000000002L471.0999999999999,779.1000000000003L472.8999999999999,779.9000000000002L473.5999999999999,780.5000000000002L473.8999999999999,782.5000000000002L472.5999999999999,783.7000000000003L470.8999999999999,784.6000000000003L470.19999999999993,786.0000000000002L468.99999999999994,788.5000000000002L467.3999999999999,789.1000000000003L463.7999999999999,789.1000000000003L459.0999999999999,788.5000000000002L451.8999999999999,788.5000000000002L448.49999999999994,788.0000000000002L446.8999999999999,788.1000000000003L444.0999999999999,789.5000000000002L442.4999999999999,789.7000000000003L438.7999999999999,789.7000000000003L424.5999999999999,791.4000000000003L423.7999999999999,790.9000000000003L422.7999999999999,790.8000000000003L421.7999999999999,791.1000000000003L421.1999999999999,792.0000000000002L422.7999999999999,792.0000000000002L423.9999999999999,792.6000000000003L422.1999999999999,793.0000000000002L419.4999999999999,793.2000000000003L417.0999999999999,792.8000000000003L415.9999999999999,791.7000000000003L414.7999999999999,791.4000000000003L407.4999999999999,790.9000000000003L408.0999999999999,790.0000000000003L407.4999999999999,789.4000000000003L405.89999999999986,789.5000000000003L405.6999999999999,788.5000000000003L405.9999999999999,788.0000000000003L407.0999999999999,787.2000000000004L407.4999999999999,786.3000000000004L405.6999999999999,784.0000000000005L406.2999999999999,782.8000000000004L405.0999999999999,781.4000000000004L405.3999999999999,779.3000000000004L406.8999999999999,775.4000000000004L406.2999999999999,775.4000000000004L405.3999999999999,776.0000000000005L405.49999999999994,774.0000000000005L404.79999999999995,770.9000000000004L403.29999999999995,768.6000000000005L402.29999999999995,766.5000000000005L401.69999999999993,763.0000000000005L399.8999999999999,759.7000000000005L400.0999999999999,758.3000000000005L400.5999999999999,756.8000000000005L399.4999999999999,752.7000000000005L401.39999999999986,749.7000000000005L404.09999999999985,747.0000000000005L404.59999999999985,743.3000000000004L404.09999999999985,739.4000000000004L404.39999999999986,735.8000000000004L405.59999999999985,730.5000000000005L405.39999999999986,728.9000000000004L404.59999999999985,727.4000000000004L404.6999999999999,725.7000000000004L408.39999999999986,724.7000000000004L412.6999999999999,725.3000000000004L415.09999999999985,723.7000000000004L415.59999999999985,722.1000000000004L414.6999999999999,720.5000000000003L412.6999999999999,719.9000000000003L412.7999999999999,718.8000000000003L414.7999999999999,714.2000000000003L414.2999999999999,708.5000000000002L416.4999999999999,706.9000000000002L419.6999999999999,707.4000000000002L423.7999999999999,710.3000000000002L426.5999999999999,714.7000000000002L431.2999999999999,717.3000000000002L435.5999999999999,720.7000000000002Z"
              className="sm_state_NGA2842"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.40086877096875456"
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
              x="157.1663888888889"
              y="279.5737698412698"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", opacity: "1" }}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,99.6011,177.1743)"
              className="sm_label_35"
            >
              <tspan
                dy="7.58158234126978"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Akwa Ibom
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
const akwaibomState =
  '<div class="hoverinfo">' +
  "<h6>" +
  state +
  " </h6>" +
  "Total No Of Farms - " +
  val +
  "" +
  "</div>";
AkwaIbom.defaultProps = {
  hoverColor: "red",
  hoverBackgroundColor: "grey",
  renderData: akwaibomState,
  defaultColor: "green",
  id: "akwai",
  height: ""
};

AkwaIbom.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  height: PropTypes.string
};

export default AkwaIbom;
