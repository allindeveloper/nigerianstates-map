import React, { Component } from "react";
import PropTypes from "prop-types";
class Jigawa extends Component {
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
          {(showRenderData)&&<span id={this.state.id} ref="myRef1">Jigawa State</span>}
          <svg
            height={this.props.height}
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", overflow: "hidden", position: "relative", left: "-0.2px", top: "0.733333px" }}
            viewBox="164.58652402170293 28.24717412217412 79.21782497246708 64.37469937469938"
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
              strokeWidth="0.5858144250595327"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0" }}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
              stroke="#ffffff" id={this.state.id} ref="myRef2"
              d="M661.3,118.8L650.3,126.2L645.9,125.10000000000001L643.3,123.4L637.0999999999999,124.5L634.4999999999999,125.5L632.5999999999999,127.3L631.3999999999999,131L630.5999999999999,134.8L624.5999999999999,151.70000000000002L624.0999999999999,154.50000000000003L624.8,158.00000000000003L623.5,160.90000000000003L598.1,170.60000000000002L595.4,172.40000000000003L592.6,173.70000000000005L585.6,174.30000000000004L581.1,178.30000000000004L579.4,184.60000000000005L582.9,187.00000000000006L588,185.60000000000005L591,185.20000000000005L593.8,185.90000000000003L595.0999999999999,188.70000000000005L596.3999999999999,194.80000000000004L596.4999999999999,197.70000000000005L593.6999999999999,202.90000000000003L593.4,205.70000000000005L595,208.00000000000006L597.7,208.00000000000006L599.2,207.50000000000006L602.6,213.60000000000005L610.6,224.30000000000004L616.7,226.70000000000005L629.9000000000001,229.20000000000005L637.0000000000001,229.50000000000006L643.0000000000001,231.50000000000006L642.6000000000001,234.30000000000007L640.6000000000001,236.60000000000008L637.8000000000002,238.4000000000001L628.6000000000001,242.00000000000009L626.8000000000002,247.70000000000007L627.8000000000002,250.80000000000007L625.5000000000002,252.20000000000007L622.3000000000002,251.00000000000009L619.4000000000002,249.50000000000009L606.3000000000002,250.50000000000009L601.5000000000002,248.50000000000009L599.6000000000003,243.8000000000001L600.3000000000003,238.4000000000001L600.3000000000003,232.9000000000001L598.4000000000003,227.8000000000001L594.8000000000003,224.4000000000001L590.0000000000003,225.60000000000008L579.3000000000003,226.4000000000001L575.1000000000003,224.9000000000001L571.8000000000003,220.7000000000001L566.6000000000003,221.5000000000001L561.3000000000003,221.2000000000001L556.1000000000003,219.0000000000001L551.2000000000003,217.6000000000001L546.1000000000003,217.5000000000001L546.3000000000003,216.40000000000012L546.2000000000003,214.1000000000001L546.3000000000003,213.0000000000001L547.1000000000003,210.40000000000012L548.4000000000002,208.1000000000001L555.8000000000002,201.40000000000012L556.5000000000002,199.5000000000001L554.7000000000003,198.30000000000013L553.6000000000003,198.0000000000001L551.7000000000003,196.80000000000013L549.4000000000003,194.30000000000013L548.2000000000003,192.5000000000001L546.3000000000003,187.7000000000001L545.4000000000003,187.0000000000001L543.1000000000004,186.7000000000001L539.5000000000003,187.0000000000001L538.2000000000004,185.80000000000013L539.3000000000004,180.60000000000014L542.3000000000004,176.20000000000013L543.1000000000004,174.20000000000013L543.4000000000003,172.10000000000014L544.4000000000003,169.50000000000014L544.6000000000004,166.60000000000014L543.4000000000003,161.50000000000014L542.5000000000003,159.00000000000014L538.6000000000004,158.60000000000014L535.7000000000004,160.60000000000014L530.5000000000003,160.60000000000014L530.4000000000003,158.40000000000015L529.8000000000003,156.40000000000015L529.2000000000003,156.10000000000014L525.7000000000003,156.60000000000014L523.8000000000003,157.30000000000013L522.1000000000003,156.40000000000012L521.0000000000002,154.5000000000001L521.7000000000003,153.2000000000001L522.5000000000002,152.0000000000001L523.0000000000002,150.6000000000001L522.9000000000002,142.7000000000001L519.4000000000002,138.4000000000001L514.2000000000002,137.8000000000001L509.50000000000017,136.2000000000001L508.8000000000002,133.6000000000001L508.9000000000002,130.7000000000001L507.9000000000002,128.3000000000001L505.8000000000002,126.90000000000009L503.6000000000002,125.70000000000009L501.6000000000002,124.20000000000009L500.9000000000002,121.20000000000009L501.0000000000002,117.90000000000009L500.60000000000025,115.70000000000009L498.60000000000025,114.80000000000008L493.2000000000003,113.40000000000008L488.3000000000003,112.70000000000007L483.4000000000003,113.60000000000008L479.20000000000033,115.80000000000008L476.70000000000033,119.60000000000008L475.30000000000035,123.80000000000008L474.30000000000035,125.40000000000008L472.80000000000035,124.50000000000007L472.50000000000034,123.30000000000007L472.50000000000034,122.10000000000007L471.9000000000003,120.60000000000007L467.70000000000033,113.10000000000007L466.70000000000033,110.50000000000007L464.9000000000003,108.60000000000007L458.3000000000003,108.40000000000006L453.9000000000003,105.70000000000006L453.8000000000003,100.20000000000006L454.5000000000003,94.50000000000006L455.6000000000003,92.30000000000005L464.5000000000003,90.90000000000005L470.5000000000003,90.80000000000005L475.90000000000026,91.50000000000006L488.7000000000003,90.90000000000006L490.3000000000003,92.40000000000006L491.8000000000003,96.80000000000007L494.0000000000003,100.70000000000007L496.0000000000003,101.90000000000008L498.0000000000003,102.70000000000007L499.90000000000026,102.60000000000008L502.60000000000025,101.10000000000008L503.60000000000025,102.40000000000008L504.80000000000024,103.50000000000007L508.10000000000025,103.80000000000007L512.6000000000003,102.80000000000007L516.6000000000003,100.60000000000007L520.3000000000003,97.70000000000006L521.2000000000003,96.20000000000006L521.8000000000003,94.60000000000007L522.6000000000003,93.40000000000006L523.6000000000003,92.50000000000006L525.0000000000002,91.80000000000005L525.5000000000002,89.70000000000006L549.8000000000002,92.60000000000007L552.9000000000002,92.60000000000007L557.3000000000002,91.30000000000007L558.8000000000002,91.20000000000007L576.5000000000002,93.30000000000007L578.2000000000003,93.20000000000007L579.7000000000003,92.30000000000007L581.3000000000003,90.80000000000007L583.5000000000003,91.40000000000006L591.4000000000003,94.10000000000007L598.7000000000003,90.90000000000006L600.0000000000002,88.80000000000007L600.9000000000002,86.50000000000007L602.4000000000002,85.40000000000008L608.2000000000002,82.90000000000008L612.2000000000002,81.90000000000008L620.1000000000001,78.70000000000007L623.8000000000002,77.70000000000007L627.3000000000002,78.80000000000007L629.4000000000002,82.10000000000007L631.6000000000003,90.60000000000007L632.4000000000002,92.80000000000007L636.0000000000002,93.30000000000007L641.5000000000002,91.70000000000007L644.2000000000003,92.00000000000007L647.2000000000003,93.40000000000008L650.3000000000003,94.10000000000008L653.1000000000003,94.00000000000009L655.4000000000002,95.70000000000009L658.0000000000002,101.20000000000009L659.5000000000002,113.30000000000008L661.3000000000002,118.80000000000008Z"
              className="sm_state_NGA2868"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.4055300357474615"
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
              x="210.89817460317457"
              y="49.190039682539684"
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
              transform="matrix(0.3663,0,0,0.3663,133.6525,31.1732)"
              className="sm_label_8"
            >
              <tspan
                dy="7.682227182539684"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Jigawa
              </tspan>
            </text>
            <text
              x="210.89817460317457"
              y="49.190039682539684"
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
              transform="matrix(0.3663,0,0,0.3663,133.6525,31.1732)"
              className="sm_label_43"
            >
              <tspan
                dy="7.682227182539684"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Jigawa
              </tspan>
            </text>
            <text
              x="210.89817460317457"
              y="49.190039682539684"
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
              transform="matrix(0.3663,0,0,0.3663,133.6525,31.1732)"
              className="sm_label_80"
            >
              <tspan
                dy="7.682227182539684"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Jigawa
              </tspan>
            </text>
            <text
              x="210.89817460317457"
              y="49.190039682539684"
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
              transform="matrix(0.3663,0,0,0.3663,133.6525,31.1732)"
              className="sm_label_117"
            >
              <tspan
                dy="7.682227182539684"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Jigawa
              </tspan>
            </text>
            <text
              x="210.89817460317457"
              y="49.190039682539684"
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
              transform="matrix(0.3663,0,0,0.3663,133.6525,31.1732)"
              className="sm_label_154"
            >
              <tspan
                dy="7.682227182539684"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Jigawa
              </tspan>
            </text>
            <text
              x="210.89817460317457"
              y="49.190039682539684"
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
              transform="matrix(0.3663,0,0,0.3663,133.6525,31.1732)"
              className="sm_label_191"
            >
              <tspan
                dy="7.682227182539684"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Jigawa
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
const jigawaData =
'<div class="hoverinfo">' +
"<h3>State</h3>"+
"<h5>PVHHTarget - " + 14000 +"</h5>"+
"<h5>ZoneName - " + 34030+"</h5>"+
"" +
"</div>";
Jigawa.defaultProps = {
  hoverColor: "red",
  hoverBackgroundColor: "grey",
  renderData: jigawaData,
  showRenderData:false,
  defaultColor: "green",
  id: "jiga",
  height: ""
};

Jigawa.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  showRenderData:PropTypes.bool,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  height: PropTypes.string
};

export default Jigawa;
