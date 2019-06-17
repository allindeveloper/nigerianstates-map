import React, { Component } from "react";
import PropTypes from 'prop-types';
class Abia extends Component {
  constructor(props) {
    super(props);
    this.myRef1 = React.createRef();
    this.myRef2 = React.createRef();

    this.state = {
      ...props
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
    this.myRef1.current.innerHTML += this.state.renderData;
  }
  render() {
    return (
      <div className="App">
        <a href="javascript:void(0)" className="tip">
          <span id={this.state.id} ref={this.myRef1}>Abia State</span>
          <svg
            height="300.0226150793651"
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              overflow: "hidden",
              position: "relative",
              left: "-0.2px",
              top: "0.2px"
            }}
            viewBox="126.44671500183323 243.748879669713 45.98276047252394 37.36692320025649"
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
              strokeWidth="0.3400417065000732"
              style={{
                "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)",
                "fillOpacity": "0"
              }}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
              stroke="#ffffff"
              id={this.state.id}
              ref={this.myRef2}
              d="M405.4,669.8L405.5,674.6999999999999L404.8,680.0999999999999L409.7,682.5999999999999L421.8,682.6999999999999L426.3,684.8L426.90000000000003,687.6999999999999L428.3,690.3L431,692.4L434,693.5L435.4,697.3L434.7,702L436.59999999999997,710.8L440.59999999999997,718.5L439.59999999999997,721.4L435.59999999999997,720.6999999999999L431.29999999999995,717.3L426.59999999999997,714.6999999999999L423.79999999999995,710.3L419.69999999999993,707.4L416.49999999999994,706.9L414.29999999999995,708.5L414.79999999999995,714.2L412.79999999999995,718.8000000000001L412.69999999999993,719.9000000000001L414.69999999999993,720.5000000000001L415.5999999999999,722.1000000000001L415.0999999999999,723.7000000000002L412.69999999999993,725.3000000000002L408.3999999999999,724.7000000000002L404.69999999999993,725.7000000000002L404.5999999999999,727.4000000000002L405.3999999999999,728.9000000000002L405.5999999999999,730.5000000000002L404.3999999999999,735.8000000000002L404.0999999999999,739.4000000000002L404.5999999999999,743.3000000000002L404.0999999999999,747.0000000000002L401.3999999999999,749.7000000000003L399.49999999999994,752.7000000000003L400.59999999999997,756.8000000000003L400.09999999999997,758.3000000000003L399.9,759.7000000000003L401.7,763.0000000000002L402.3,766.5000000000002L396.7,762.7000000000003L392.3,762.6000000000003L389.2,761.3000000000003L385.9,761.4000000000003L379.09999999999997,762.8000000000003L375.7,761.8000000000003L374.59999999999997,755.3000000000003L383.2,742.1000000000003L383.59999999999997,738.0000000000002L381.9,734.9000000000002L388,717.3000000000002L391.2,713.8000000000002L392.2,711.7000000000002L392.9,709.5000000000001L394.09999999999997,707.8000000000001L394.7,705.8000000000001L394.7,703.5000000000001L394.3,701.2000000000002L394.3,698.9000000000002L393.7,696.8000000000002L392.8,695.2000000000002L393.5,694.0000000000001L394.4,690.2000000000002L393.29999999999995,680.8000000000002L390.09999999999997,677.9000000000002L387.79999999999995,677.4000000000002L383.59999999999997,675.3000000000002L381.79999999999995,673.7000000000002L385.69999999999993,668.8000000000002L391.29999999999995,665.8000000000002L391.99999999999994,666.5000000000002L395.99999999999994,665.9000000000002L399.99999999999994,665.7000000000002L405.3999999999999,669.8000000000002Z"
              className="sm_state_NGA2841"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.23539387132467562"
              strokeLinejoin="round"
              transform="matrix(0.3663,0,0,0.3663,0,0)"
              style={{
                "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)",
                opacity: "1",
                cursor: "pointer",
                "strokeOpacity": "1",
                "strokeLinejoin": "round",
                "fillOpacity": "1"
              }}
              fillOpacity="1"
            />
            <desc style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}>
              Created by Uchendu Precious. @allindeveloper
            </desc>
            <defs
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
            />
            <text
              x="149.47472222222223"
              y="254.9604365079365"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{
                "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)",
                "textAnchor": "middle",
                font: "bold 22px Arial",
                cursor: "pointer",
                opacity: "1"
              }}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontStyle="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,94.7266,161.5761)"
              className="sm_label_35"
            >
              <tspan
                dy="7.6479365079364925"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Abia
              </tspan>
            </text>
            <text
              x="149.47472222222223"
              y="254.9604365079365"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{
                "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)",
                "textAnchor": "middle",
                font: "bold 22px Arial",
                cursor: "pointer",
                opacity: "1"
              }}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,94.7266,161.5761)"
              className="sm_label_72"
            >
              <tspan
                dy="7.6479365079364925"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Abia
              </tspan>
            </text>
           
          </svg>
        </a>
      </div>
    );
  }
}

const state = "State Info";
    const val = 55;
const abiaData =
      '<div class="hoverinfo">' +
      "<h6>" +
      state +
      " </h6>" +
      "Total No Of Farms - " +
      val +
      "" +
      "</div>";
Abia.defaultProps = {
  hoverColor:"red",
  hoverBackgroundColor:"grey",
  renderData:abiaData,
  defaultColor:"green",
  id:"ab"
};

Abia.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Abia;
