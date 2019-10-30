import React, { Component } from "react";
import PropTypes from "prop-types";
class Bauchi extends Component {
  constructor(props) {
    super(props);


    this.state = {
      hoverColor: this.props.hoverColor,
      hoverBackgroundColor: this.props.hoverBackgroundColor,
      renderData: this.props.renderData,
      showRenderData:this.props.showRenderData,
      defaultColor: this.props.defaultColor,
      id: this.props.id
    };
  }

  componentWillMount() { }
  componentDidMount() {
    let {showRenderData} = this.state;
    let styles = document.head.appendChild(document.createElement("style"));
    styles.innerHTML += `
    #${this.state.id}:hover{fill: ${this.state.hoverColor} }
    #${this.state.id}{fill: ${this.state.defaultColor} }
    #${this.state.id}{background-color: ${this.state.hoverBackgroundColor} }
    `;
    if(showRenderData){
    this.refs.myRef1.innerHTML = "";
    this.refs.myRef1.innerHTML += this.state.renderData;
    }
  }
  render() {
    let {showRenderData} = this.state;
    return (
      <div className="App">
        <a href="javascript:void(0)" className="tip">
          {(showRenderData)&&<span id={this.state.id} ref="myRef1">Bauchi State</span>}
          <svg
            height={this.props.height}
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: "hidden", position: "relative", left: "-0.2px", top: "0.2px" }}
            viewBox="162.08063044231506 43.11439995189995 116.095088321719 94.34223184223184"
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
              strokeWidth="0.8585211401734532"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0" }}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
              stroke="#ffffff" id={this.state.id} ref="myRef2"
              d="M694.9,221.6L693.1999999999999,222.79999999999998L691.9,224.7L689.9,226.89999999999998L682.1,231.39999999999998L678.1,236.89999999999998L675.4,238.99999999999997L669.1,240.89999999999998L666.6,243.09999999999997L664.1,249.39999999999998L661.2,259.4L660,262.5L655.6,268.7L655.4,271L664.3,274.9L666.9,280.7L667.8,287.4L673.6999999999999,290.2L678.9999999999999,293.5L680.7999999999998,298.6L680.5999999999998,310.40000000000003L680.8999999999997,312.90000000000003L680.6999999999997,315.40000000000003L671.1999999999997,320.20000000000005L670.6999999999997,323.00000000000006L674.1999999999997,327.90000000000003L691.3999999999997,340.70000000000005L693.7999999999997,346.30000000000007L694.3999999999997,351.70000000000005L695.7999999999997,357.00000000000006L698.0999999999997,361.80000000000007L699.9999999999997,364.20000000000005L699.3999999999996,366.20000000000005L693.6999999999996,366.20000000000005L687.8999999999996,364.80000000000007L682.3999999999996,365.70000000000005L672.1999999999996,370.6L661.5999999999996,370.90000000000003L657.1999999999996,373.8L654.5999999999996,372.7L640.6999999999996,364L599.8999999999996,345L597.2999999999996,345.6L596.0999999999996,346.40000000000003L594.9999999999995,348.3L598.2999999999995,352.90000000000003L599.3999999999995,355.90000000000003L598.5999999999996,358.70000000000005L593.0999999999996,360.80000000000007L590.9999999999995,362.6000000000001L588.4999999999995,367.80000000000007L585.5999999999996,369.00000000000006L582.2999999999996,369.70000000000005L569.1999999999996,370.40000000000003L557.3999999999996,368.20000000000005L552.2999999999996,366.50000000000006L549.3999999999996,361.50000000000006L545.6999999999996,357.1000000000001L542.6999999999996,356.2000000000001L540.6999999999996,354.1000000000001L541.0999999999996,351.50000000000006L542.1999999999996,349.1000000000001L543.5999999999996,346.80000000000007L544.2999999999996,344.30000000000007L543.8999999999996,337.4000000000001L542.0999999999997,331.6000000000001L536.7999999999997,329.7000000000001L527.1999999999997,331.4000000000001L524.0999999999997,329.30000000000007L524.1999999999997,315.80000000000007L523.7999999999997,311.6000000000001L522.0999999999997,307.00000000000006L519.1999999999997,303.30000000000007L514.2999999999997,302.00000000000006L509.4999999999997,302.90000000000003L507.6999999999997,300.8L505.7999999999997,299L503.2999999999997,297.6L502.09999999999974,295.40000000000003L504.9999999999997,290.3L505.8999999999997,284.8L509.6999999999997,280.6L511.9999999999997,275L511.3999999999997,269.2L507.5999999999997,264.7L505.29999999999967,258.2L504.99999999999966,251.1L505.49999999999966,244.7L508.0999999999997,239.39999999999998L512.9999999999997,239.09999999999997L515.9999999999997,237.69999999999996L518.2999999999996,235.29999999999995L521.4999999999997,230.39999999999995L529.9999999999997,221.49999999999994L535.5999999999997,218.89999999999995L538.2999999999997,220.39999999999995L539.7999999999997,220.09999999999994L546.0999999999997,217.49999999999994L551.1999999999997,217.59999999999994L556.0999999999997,218.99999999999994L561.2999999999997,221.19999999999993L566.5999999999997,221.49999999999994L571.7999999999997,220.69999999999993L575.0999999999997,224.89999999999992L579.2999999999997,226.39999999999992L589.9999999999998,225.5999999999999L594.7999999999997,224.39999999999992L598.3999999999997,227.79999999999993L600.2999999999997,232.89999999999992L600.2999999999997,238.39999999999992L599.5999999999997,243.79999999999993L601.4999999999997,248.49999999999991L606.2999999999996,250.49999999999991L619.3999999999996,249.49999999999991L622.2999999999996,250.99999999999991L625.4999999999997,252.1999999999999L627.7999999999996,250.7999999999999L626.7999999999996,247.6999999999999L628.5999999999996,241.99999999999991L637.7999999999996,238.39999999999992L640.5999999999996,236.5999999999999L642.5999999999996,234.2999999999999L642.9999999999995,231.4999999999999L636.9999999999995,229.4999999999999L629.8999999999995,229.19999999999987L616.6999999999995,226.69999999999987L610.5999999999995,224.29999999999987L602.5999999999995,213.59999999999988L599.1999999999995,207.4999999999999L597.6999999999995,207.9999999999999L594.9999999999994,207.9999999999999L593.3999999999994,205.69999999999987L593.6999999999994,202.89999999999986L596.4999999999993,197.69999999999987L596.3999999999993,194.79999999999987L595.0999999999993,188.69999999999987L593.7999999999994,185.89999999999986L590.9999999999994,185.19999999999987L587.9999999999994,185.59999999999988L582.8999999999994,186.9999999999999L579.3999999999994,184.59999999999988L581.0999999999995,178.29999999999987L585.5999999999995,174.29999999999987L592.5999999999995,173.69999999999987L595.3999999999994,172.39999999999986L598.0999999999995,170.59999999999985L623.4999999999994,160.89999999999986L624.7999999999994,157.99999999999986L624.0999999999993,154.49999999999986L624.5999999999993,151.69999999999985L630.5999999999993,134.79999999999984L631.3999999999993,130.99999999999983L632.5999999999993,127.29999999999983L634.4999999999993,125.49999999999983L637.0999999999993,124.49999999999983L643.2999999999994,123.39999999999984L645.8999999999994,125.09999999999984L650.2999999999994,126.19999999999983L661.2999999999994,118.79999999999983L666.8999999999994,122.69999999999983L671.6999999999994,127.39999999999984L672.7999999999994,130.59999999999982L674.0999999999993,137.2999999999998L674.1999999999994,140.69999999999982L674.5999999999993,143.69999999999982L676.2999999999994,146.3999999999998L677.9999999999994,149.69999999999982L678.4999999999994,153.3999999999998L678.5999999999995,159.2999999999998L681.0999999999995,172.8999999999998L691.0999999999995,197.69999999999982L691.5999999999995,204.8999999999998L688.6999999999995,218.0999999999998L690.8999999999995,220.8999999999998L694.8999999999995,221.5999999999998Z"
              className="sm_state_NGA2858"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.5943112592850729"
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
              x="212.65626984126985"
              y="108.48912698412697"
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
              transform="matrix(0.3663,0,0,0.3663,134.7667,68.7528)"
              className="sm_label_18"
            >
              <tspan
                dy="7.786001984126969"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Bauchi
            </tspan>
            </text>
            <text
              x="212.65626984126985"
              y="108.48912698412697"
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
              transform="matrix(0.3663,0,0,0.3663,134.7667,68.7528)"
              className="sm_label_55"
            >
              <tspan
                dy="7.786001984126969"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Bauchi
            </tspan>
            </text>
            <text
              x="212.65626984126985"
              y="108.48912698412697"
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
              transform="matrix(0.3663,0,0,0.3663,134.7667,68.7528)"
              className="sm_label_92"
            >
              <tspan
                dy="7.786001984126969"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Bauchi
            </tspan>
            </text>
            <text
              x="212.65626984126985"
              y="108.48912698412697"
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
              transform="matrix(0.3663,0,0,0.3663,134.7667,68.7528)"
              className="sm_label_129"
            >
              <tspan
                dy="7.786001984126969"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Bauchi
            </tspan>
            </text>
            <text
              x="212.65626984126985"
              y="108.48912698412697"
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
              transform="matrix(0.3663,0,0,0.3663,134.7667,68.7528)"
              className="sm_label_166"
            >
              <tspan
                dy="7.786001984126969"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Bauchi
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
const bauchiData =
  '<div class="hoverinfo">' +
  "<h6>" +
  state +
  " </h6>" +
  "Total No Of Farms - " +
  val +
  "" +
  "</div>";
Bauchi.defaultProps = {
  hoverColor: "red",
  hoverBackgroundColor: "grey",
  renderData: bauchiData,
  showRenderData:false,
  defaultColor: "green",
  id: "anam",
  height: ""
};

Bauchi.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  showRenderData:PropTypes.bool,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  height: PropTypes.string
};
export default Bauchi;
