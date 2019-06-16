import React, { Component } from "react";
import PropTypes from "prop-types"; 
class Enugu extends Component {
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
          <span id={this.state.id} ref={this.myRef1}>Enugu State</span>
          <svg
            height="300.0226150793651"
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{overflow: "hidden", position: "relative", left: "-0.2px", top: "0.733333px"}}
            viewBox="121.4079422389492 210.42202380952378 45.07221076019681 36.62698412698414"
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
              strokeWidth="0.33330820736145844"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0"}}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
               stroke="#ffffff"id={this.state.id}ref={this.myRef2}
              d="M402.1,577.5L402.90000000000003,580.9L406.1,587.6L408.40000000000003,590.5L411.20000000000005,593.1L414.30000000000007,595.4L417.50000000000006,596.9L420.80000000000007,596.5L423.30000000000007,594.6L426.30000000000007,593.8000000000001L429.70000000000005,595.5000000000001L431.80000000000007,598.9000000000001L432.70000000000005,602.9000000000001L432.70000000000005,607.0000000000001L429.90000000000003,614.8000000000001L424.3,615.4000000000001L421.5,615.1000000000001L418.9,616.8000000000002L422.2,627.5000000000002L422.09999999999997,633.4000000000002L418.49999999999994,644.6000000000003L419.99999999999994,646.8000000000003L420.09999999999997,647.9000000000003L420.99999999999994,651.4000000000003L421.19999999999993,654.0000000000003L421.79999999999995,656.6000000000004L421.99999999999994,659.1000000000004L420.29999999999995,661.6000000000004L418.29999999999995,663.9000000000003L417.69999999999993,668.1000000000004L418.69999999999993,672.4000000000003L416.3999999999999,673.6000000000004L413.49999999999994,670.8000000000004L411.69999999999993,669.6000000000004L409.5999999999999,668.5000000000003L405.3999999999999,669.8000000000003L399.99999999999994,665.7000000000003L395.99999999999994,665.9000000000003L391.99999999999994,666.5000000000003L391.29999999999995,665.8000000000003L390.4,665.7000000000003L390,664.8000000000003L388.5,663.9000000000003L387.6,663.8000000000003L385.40000000000003,664.5000000000003L383.1,664.1000000000004L381.3,662.0000000000003L380.40000000000003,659.4000000000003L379.00000000000006,657.1000000000004L378.00000000000006,654.7000000000004L378.50000000000006,651.8000000000004L376.50000000000006,650.3000000000004L376.1000000000001,648.3000000000004L374.80000000000007,647.4000000000004L373.6000000000001,648.3000000000004L372.30000000000007,648.6000000000004L371.6000000000001,647.6000000000004L372.1000000000001,645.1000000000004L372.1000000000001,643.5000000000003L373.2000000000001,642.5000000000003L369.8000000000001,634.8000000000003L368.10000000000014,632.5000000000003L366.90000000000015,631.8000000000003L364.10000000000014,631.3000000000003L362.90000000000015,630.7000000000003L362.10000000000014,628.6000000000003L364.40000000000015,622.3000000000003L369.00000000000017,617.3000000000003L369.40000000000015,611.6000000000003L366.8000000000001,610.5000000000002L364.2000000000001,610.0000000000002L359.4000000000001,607.9000000000002L354.9000000000001,608.1000000000003L353.80000000000007,607.6000000000003L353.9000000000001,604.9000000000002L353.2000000000001,602.6000000000003L355.4000000000001,598.1000000000003L358.2000000000001,596.3000000000003L358.8000000000001,599.0000000000003L359.40000000000015,599.5000000000003L360.70000000000016,601.4000000000003L362.8000000000002,602.4000000000003L366.4000000000002,599.5000000000003L369.6000000000002,595.7000000000004L376.50000000000017,590.8000000000004L380.70000000000016,587.0000000000005L385.40000000000015,580.7000000000005L387.00000000000017,579.3000000000005L389.6000000000002,578.4000000000005L392.2000000000002,576.3000000000005L395.30000000000024,574.7000000000005L399.30000000000024,575.0000000000005L402.10000000000025,577.5000000000005Z"
              className="sm_state_NGA2862"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.23073260654596958"
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
              x="144.38357142857143"
              y="229.13841269841268"
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
              transform="matrix(0.3663,0,0,0.3663,91.5002,145.2119)"
              className="sm_label_14"
            >
              <tspan
                dy="7.6306001984126794"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Enugu
              </tspan>
            </text>
            <text
              x="144.38357142857143"
              y="229.13841269841268"
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
              transform="matrix(0.3663,0,0,0.3663,91.5002,145.2119)"
              className="sm_label_51"
            >
              <tspan
                dy="7.6306001984126794"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Enugu
              </tspan>
            </text>
            <text
              x="144.38357142857143"
              y="229.13841269841268"
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
              transform="matrix(0.3663,0,0,0.3663,91.5002,145.2119)"
              className="sm_label_88"
            >
              <tspan
                dy="7.6306001984126794"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Enugu
              </tspan>
            </text>
            <text
              x="144.38357142857143"
              y="229.13841269841268"
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
              transform="matrix(0.3663,0,0,0.3663,91.5002,145.2119)"
              className="sm_label_125"
            >
              <tspan
                dy="7.6306001984126794"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Enugu
              </tspan>
            </text>
            <text
              x="144.38357142857143"
              y="229.13841269841268"
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
              transform="matrix(0.3663,0,0,0.3663,91.5002,145.2119)"
              className="sm_label_162"
            >
              <tspan
                dy="7.6306001984126794"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Enugu
              </tspan>
            </text>
            <text
              x="144.38357142857143"
              y="229.13841269841268"
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
              transform="matrix(0.3663,0,0,0.3663,91.5002,145.2119)"
              className="sm_label_199"
            >
              <tspan
                dy="7.6306001984126794"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Enugu
              </tspan>
            </text>
            <text
              x="144.38357142857143"
              y="229.13841269841268"
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
              transform="matrix(0.3663,0,0,0.3663,91.5002,145.2119)"
              className="sm_label_236"
            >
              <tspan
                dy="7.6306001984126794"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Enugu
              </tspan>
            </text>
            <text
              x="144.38357142857143"
              y="229.13841269841268"
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
              transform="matrix(0.3663,0,0,0.3663,91.5002,145.2119)"
              className="sm_label_273"
            >
              <tspan
                dy="7.6306001984126794"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Enugu
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
const enuguData =
      '<div class="hoverinfo">' +
      "<h6>" +
      state +
      " </h6>" +
      "Total No Of Beneficiaries - " +
      val +
      "" +
      "</div>";
Enugu.defaultProps = {
  hoverColor:"red",
  hoverBackgroundColor:"grey",
  renderData:enuguData,
  defaultColor:"green",
  id:"enug"
};

Enugu.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Enugu;
