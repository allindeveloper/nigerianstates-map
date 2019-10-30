import React, { Component } from "react";
import PropTypes from "prop-types";
class Kano extends Component {
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
    let {showRenderData} = this.state;
    if(showRenderData){
    let styles = document.head.appendChild(document.createElement("style"));
    styles.innerHTML += `
    #${this.state.id}:hover{fill: ${this.state.hoverColor} }
    #${this.state.id}{fill: ${this.state.defaultColor} }
    #${this.state.id}{background-color: ${this.state.hoverBackgroundColor} }
    `;
    this.refs.myRef1.innerHTML = "";
    this.refs.myRef1.innerHTML += this.state.renderData;
    }
  }
  render() {
    let {showRenderData} = this.state;
    return (
      <div className="App">
        <a href="javascript:void(0)" className="tip">
          {(showRenderData)&&<span id={this.state.id} ref="myRef1">Kano State</span>}
          <svg
            height={this.props.height}
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: "hidden", position: "relative", left: "-0.2px", top: "0.6px" }}
            viewBox="139.58604490961258 41.07031826198492 78.30727526013989 63.63476030142697"
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
              strokeWidth="0.5790809259209175"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0" }}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
              id="kn"
              stroke="#ffffff" id={this.state.id} ref="myRef2"
              d="M546.1,217.5L539.8000000000001,220.1L538.3000000000001,220.4L535.6,218.9L530,221.5L521.5,230.4L518.3,235.3L516,237.70000000000002L513,239.10000000000002L508.1,239.40000000000003L505.5,244.70000000000005L505,251.10000000000005L505.3,258.20000000000005L507.6,264.70000000000005L511.40000000000003,269.20000000000005L512,275.00000000000006L509.7,280.6000000000001L505.9,284.80000000000007L504.09999999999997,285.20000000000005L500.7,284.30000000000007L499.09999999999997,283.50000000000006L495.4,279.1000000000001L488.7,278.30000000000007L484.2,274.4000000000001L485.9,272.1000000000001L489.4,271.2000000000001L490.59999999999997,268.0000000000001L489.29999999999995,257.9000000000001L490.9,251.4000000000001L489.29999999999995,239.60000000000008L480.79999999999995,230.50000000000009L474.49999999999994,228.8000000000001L468.69999999999993,226.6000000000001L466.5999999999999,223.8000000000001L463.8999999999999,221.6000000000001L458.0999999999999,219.5000000000001L455.3999999999999,217.7000000000001L453.69999999999993,214.9000000000001L454.0999999999999,211.9000000000001L455.5999999999999,209.10000000000008L455.69999999999993,205.9000000000001L452.79999999999995,204.50000000000009L441.09999999999997,208.3000000000001L431.29999999999995,215.6000000000001L425.59999999999997,216.1000000000001L419.9,211.2000000000001L418.59999999999997,206.9000000000001L419.2,202.8000000000001L420.5,198.7000000000001L423.1,195.6000000000001L427,194.6000000000001L431.6,192.2000000000001L435.40000000000003,191.3000000000001L435.1,188.00000000000009L433,182.70000000000007L432.2,181.60000000000008L431.9,180.30000000000007L432.4,178.70000000000007L432.5,177.10000000000008L432.1,174.4000000000001L430.3,168.9000000000001L430.8,151.10000000000008L430,142.80000000000007L431,139.00000000000006L437.4,134.50000000000006L452,129.00000000000006L455,126.10000000000005L457.8,117.90000000000005L459.8,114.30000000000005L463.6,113.10000000000005L467.70000000000005,113.10000000000005L471.90000000000003,120.60000000000005L472.50000000000006,122.10000000000005L472.50000000000006,123.30000000000005L472.80000000000007,124.50000000000006L474.30000000000007,125.40000000000006L475.30000000000007,123.80000000000007L476.70000000000005,119.60000000000007L479.20000000000005,115.80000000000007L483.40000000000003,113.60000000000007L488.3,112.70000000000006L493.2,113.40000000000006L498.59999999999997,114.80000000000007L500.59999999999997,115.70000000000007L500.99999999999994,117.90000000000008L500.8999999999999,121.20000000000007L501.5999999999999,124.20000000000007L503.5999999999999,125.70000000000007L505.7999999999999,126.90000000000008L507.8999999999999,128.30000000000007L508.8999999999999,130.70000000000007L508.7999999999999,133.60000000000008L509.4999999999999,136.20000000000007L514.1999999999999,137.80000000000007L519.4,138.40000000000006L522.9,142.70000000000007L523,150.60000000000008L522.5,152.00000000000009L521.7,153.20000000000007L521,154.50000000000009L522.1,156.4000000000001L523.8000000000001,157.3000000000001L525.7,156.6000000000001L529.2,156.1000000000001L529.8000000000001,156.40000000000012L530.4000000000001,158.40000000000012L530.5000000000001,160.6000000000001L535.7000000000002,160.6000000000001L538.6000000000001,158.6000000000001L542.5000000000001,159.0000000000001L543.4000000000001,161.5000000000001L544.6000000000001,166.6000000000001L544.4000000000001,169.5000000000001L543.4000000000001,172.1000000000001L543.1000000000001,174.2000000000001L542.3000000000002,176.2000000000001L539.3000000000002,180.6000000000001L538.2000000000002,185.8000000000001L539.5000000000001,187.00000000000009L543.1000000000001,186.70000000000007L545.4000000000001,187.00000000000009L546.3000000000001,187.70000000000007L548.2,192.50000000000009L549.4000000000001,194.3000000000001L551.7,196.8000000000001L553.6,198.00000000000009L554.7,198.3000000000001L556.5,199.50000000000009L555.8,201.4000000000001L548.4,208.10000000000008L547.1,210.4000000000001L546.3000000000001,213.00000000000009L546.2,214.10000000000008L546.3000000000001,216.4000000000001L546.1,217.50000000000009Z"
              className="sm_state_NGA2869"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.4008687709687551"
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
              x="175.62638888888887"
              y="62.00948412698413"
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
              transform="matrix(0.3663,0,0,0.3663,111.2997,39.2973)"
              className="sm_label_7"
            >
              <tspan
                dy="7.423546626984127"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Kano
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
const kanoData =
  '<div class="hoverinfo">' +
  "<h6>" +
  state +
  " </h6>" +
  "Total No Of Farms - " +
  val +
  "" +
  "</div>";
Kano.defaultProps = {
  hoverColor: "red",
  hoverBackgroundColor: "grey",
  renderData: kanoData,
  showRenderData:false,
  defaultColor: "green",
  id: "kan",
  height: ""
};

Kano.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  showRenderData:PropTypes.bool,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  height: PropTypes.string
};

export default Kano;
