import React, { Component } from "react";
import PropTypes from "prop-types";
class CrossRiver extends Component {
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
          {(showRenderData)&&<span id={this.state.id} ref="myRef1">CrossRiver State</span>}
          <svg
            height={this.props.height}
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", overflow: "hidden", position: "relative", left: "-0.2px", top: "0.733333px" }}
            viewBox="141.66040621658578 216.85949374699373 83.3152986779395 67.70442520442518"
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
              strokeWidth="0.6161151711833015"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0" }}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
              stroke="#ffffff" id={this.state.id} ref="myRef2"
              d="M568,632.6L567.5,632.7L565.1,634.3000000000001L562.6,639.2L560.2,640.6L556.9000000000001,640.7L555.7,641.3000000000001L554.6,642.6L552.2,647.6L550.1,650.6L538.7,659.8000000000001L531,667.8000000000001L529.3,670.4000000000001L528.1999999999999,671.6000000000001L526.9,672.3000000000002L526.4,672.8000000000002L526.1999999999999,675.2000000000002L525.9,676.3000000000002L524.5,676.5000000000002L522.7,675.8000000000002L520.9000000000001,675.6000000000001L519.5000000000001,676.9000000000001L518.3000000000001,678.4000000000001L515.4000000000001,680.3000000000001L514.5000000000001,681.7L514.7000000000002,683.4000000000001L515.6000000000001,684.7L516.3000000000002,686.2L515.9000000000002,688.3000000000001L514.5000000000002,690.1L513.0000000000002,691.2L512.3000000000002,692.4000000000001L513.4000000000002,694.5000000000001L515.1000000000003,696.1000000000001L517.0000000000002,697.6000000000001L518.5000000000002,699.2000000000002L519.4000000000002,701.5000000000001L519.0000000000002,703.5000000000001L517.8000000000002,705.1000000000001L516.2000000000002,706.6000000000001L514.9000000000002,708.2000000000002L514.4000000000002,710.0000000000001L514.8000000000002,713.3000000000001L514.9000000000002,715.1L514.3000000000002,716.9L512.5000000000002,720.5L512.0000000000002,722.5L512.1000000000003,723.6L512.8000000000003,725.6L512.9000000000003,726.5L510.70000000000033,737.9L510.1000000000003,738.9L507.3000000000003,739.9L506.4000000000003,740.8L504.8000000000003,743.3L504.3000000000003,744.4L503.1000000000003,748.1L502.3000000000003,749.7L501.1000000000003,751.5L497.8000000000003,756.7L497.3000000000003,758.2L495.0000000000003,759.8000000000001L494.3000000000003,761.1L494.6000000000003,762.9L495.1000000000003,765.3L493.70000000000033,766.5999999999999L492.9000000000003,765.8L492.20000000000033,765.6999999999999L491.50000000000034,765.9999999999999L489.9000000000003,767.5999999999999L488.70000000000033,770.5999999999999L488.50000000000034,772.1999999999999L489.00000000000034,773.4999999999999L489.00000000000034,774.1999999999999L488.30000000000035,775.4999999999999L487.30000000000035,775.8999999999999L485.00000000000034,775.3999999999999L483.80000000000035,775.4999999999999L483.20000000000033,775.2999999999998L484.30000000000035,773.0999999999998L484.50000000000034,772.1999999999998L483.4000000000003,772.0999999999998L481.8000000000003,772.8999999999997L480.7000000000003,773.0999999999998L478.2000000000003,772.1999999999998L478.10000000000025,769.8999999999999L478.90000000000026,766.8999999999999L479.30000000000024,763.9999999999999L478.80000000000024,763.9999999999999L478.2000000000002,766.7999999999998L476.4000000000002,768.2999999999998L474.0000000000002,768.0999999999998L471.80000000000024,766.1999999999998L472.5000000000002,764.9999999999998L471.80000000000024,764.8999999999997L470.2000000000002,763.9999999999998L470.5000000000002,762.7999999999997L469.9000000000002,761.8999999999997L467.6000000000002,760.1999999999997L465.50000000000017,758.9999999999997L465.00000000000017,757.5999999999997L464.1000000000002,755.7999999999997L463.50000000000017,755.0999999999997L461.6000000000002,754.3999999999996L460.6000000000002,753.4999999999997L459.3000000000002,751.8999999999996L458.8000000000002,752.3999999999996L463.4000000000002,756.7999999999996L464.5000000000002,758.1999999999996L466.60000000000025,762.1999999999996L467.0000000000002,764.0999999999996L465.60000000000025,764.9999999999995L467.0000000000002,767.4999999999995L467.9000000000002,768.5999999999996L469.1000000000002,769.3999999999995L468.1000000000002,769.1999999999995L464.9000000000002,766.7999999999995L455.2000000000002,756.5999999999995L452.2000000000002,752.3999999999994L449.9000000000002,748.1999999999994L448.8000000000002,743.5999999999993L449.4000000000002,733.3999999999993L448.0000000000002,731.7999999999993L444.30000000000024,729.3999999999993L442.2000000000002,728.8999999999993L437.30000000000024,729.6999999999992L435.60000000000025,728.3999999999993L434.7000000000003,726.8999999999993L433.3000000000003,723.2999999999993L435.6000000000003,720.6999999999992L439.6000000000003,721.3999999999993L440.6000000000003,718.4999999999993L436.6000000000003,710.7999999999993L434.70000000000033,701.9999999999993L435.4000000000003,697.2999999999993L434.00000000000034,693.4999999999993L434.30000000000035,691.3999999999993L435.10000000000036,689.3999999999993L436.4000000000004,687.8999999999993L437.5000000000004,686.1999999999992L437.2000000000004,684.2999999999993L437.3000000000004,682.2999999999993L438.5000000000004,681.1999999999992L441.4000000000004,676.5999999999992L442.5000000000004,672.8999999999992L441.1000000000004,670.2999999999992L442.1000000000004,668.1999999999991L445.5000000000004,667.0999999999991L448.6000000000004,667.9999999999991L450.20000000000044,671.799999999999L452.30000000000047,671.699999999999L453.9000000000005,670.199999999999L457.7000000000005,668.3999999999991L459.0000000000005,666.799999999999L460.10000000000053,664.9999999999991L462.3000000000005,664.9999999999991L464.7000000000005,666.0999999999991L466.1000000000005,663.8999999999991L467.6000000000005,657.5999999999991L469.2000000000005,655.0999999999991L471.1000000000005,652.5999999999991L475.80000000000047,647.8999999999991L476.50000000000045,642.199999999999L474.90000000000043,639.699999999999L475.50000000000045,636.8999999999991L480.70000000000044,633.9999999999991L480.40000000000043,631.299999999999L478.70000000000044,629.099999999999L477.80000000000047,626.799999999999L477.4000000000005,624.199999999999L476.0000000000005,622.599999999999L475.7000000000005,621.699999999999L475.1000000000005,620.8999999999991L472.9000000000005,619.299999999999L469.7000000000005,615.599999999999L468.5000000000005,610.999999999999L471.2000000000005,610.699999999999L473.7000000000005,609.3999999999991L476.0000000000005,606.8999999999991L478.4000000000005,605.0999999999991L481.7000000000005,605.0999999999991L485.0000000000005,605.6999999999991L488.7000000000005,605.5999999999991L492.2000000000005,604.6999999999991L495.0000000000005,603.1999999999991L496.4000000000005,600.7999999999992L495.6000000000005,597.5999999999991L496.7000000000005,594.8999999999991L502.1000000000005,592.8999999999991L507.80000000000047,593.3999999999991L513.8000000000004,595.4999999999991L523.8000000000004,601.3999999999991L525.8000000000004,605.699999999999L525.0000000000005,610.699999999999L526.6000000000005,612.099999999999L528.9000000000004,612.599999999999L533.6000000000005,612.499999999999L546.7000000000005,609.999999999999L554.1000000000005,613.7999999999989L564.0000000000005,625.499999999999L566.4000000000004,629.899999999999L568.0000000000005,632.599999999999Z"
              className="sm_state_NGA2847"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.42650572725164043"
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
              x="174.49095238095236"
              y="258.403373015873"
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
              transform="matrix(0.3663,0,0,0.3663,110.5802,163.758)"
              className="sm_label_29"
            >
              <tspan
                dy="7.559623015873001"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Cross River
              </tspan>
            </text>
            <text
              x="174.49095238095236"
              y="258.403373015873"
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
              transform="matrix(0.3663,0,0,0.3663,110.5802,163.758)"
              className="sm_label_66"
            >
              <tspan
                dy="7.559623015873001"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Cross River
              </tspan>
            </text>
            <text
              x="174.49095238095236"
              y="258.403373015873"
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
              transform="matrix(0.3663,0,0,0.3663,110.5802,163.758)"
              className="sm_label_103"
            >
              <tspan
                dy="7.559623015873001"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Cross River
              </tspan>
            </text>
            <text
              x="174.49095238095236"
              y="258.403373015873"
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
              transform="matrix(0.3663,0,0,0.3663,110.5802,163.758)"
              className="sm_label_140"
            >
              <tspan
                dy="7.559623015873001"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Cross River
              </tspan>
            </text>
            <text
              x="174.49095238095236"
              y="258.403373015873"
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
              transform="matrix(0.3663,0,0,0.3663,110.5802,163.758)"
              className="sm_label_177"
            >
              <tspan
                dy="7.559623015873001"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Cross River
              </tspan>
            </text>
            <text
              x="174.49095238095236"
              y="258.403373015873"
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
              transform="matrix(0.3663,0,0,0.3663,110.5802,163.758)"
              className="sm_label_214"
            >
              <tspan
                dy="7.559623015873001"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Cross River
              </tspan>
            </text>
            <text
              x="174.49095238095236"
              y="258.403373015873"
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
              transform="matrix(0.3663,0,0,0.3663,110.5802,163.758)"
              className="sm_label_251"
            >
              <tspan
                dy="7.559623015873001"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Cross River
              </tspan>
            </text>
            <text
              x="174.49095238095236"
              y="258.403373015873"
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
              transform="matrix(0.3663,0,0,0.3663,110.5802,163.758)"
              className="sm_label_288"
            >
              <tspan
                dy="7.559623015873001"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Cross River
              </tspan>
            </text>
            <text
              x="174.49095238095236"
              y="258.403373015873"
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
              transform="matrix(0.3663,0,0,0.3663,110.5802,163.758)"
              className="sm_label_325"
            >
              <tspan
                dy="7.559623015873001"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Cross River
              </tspan>
            </text>
            <text
              x="174.49095238095236"
              y="258.403373015873"
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
              transform="matrix(0.3663,0,0,0.3663,110.5802,163.758)"
              className="sm_label_362"
            >
              <tspan
                dy="7.559623015873001"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Cross River
              </tspan>
            </text>
            <text
              x="174.49095238095236"
              y="258.403373015873"
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
              transform="matrix(0.3663,0,0,0.3663,110.5802,163.758)"
              className="sm_label_399"
            >
              <tspan
                dy="7.559623015873001"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Cross River
              </tspan>
            </text>
            <text
              x="174.49095238095236"
              y="258.403373015873"
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
              transform="matrix(0.3663,0,0,0.3663,110.5802,163.758)"
              className="sm_label_436"
            >
              <tspan
                dy="7.559623015873001"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Cross River
              </tspan>
            </text>
            <text
              x="174.49095238095236"
              y="258.403373015873"
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
              transform="matrix(0.3663,0,0,0.3663,110.5802,163.758)"
              className="sm_label_473"
            >
              <tspan
                dy="7.559623015873001"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Cross River
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
const crossriverData =
'<div class="hoverinfo">' +
"<h3>State</h3>"+
"<h5>PVHHTarget - " + 14000 +"</h5>"+
"<h5>ZoneName - " + 34030+"</h5>"+
"" +
"</div>";
CrossRiver.defaultProps = {
  hoverColor: "red",
  hoverBackgroundColor: "grey",
  renderData: crossriverData,
  showRenderData:false,
  defaultColor: "green",
  id: "crossr",
  height: ""
};

CrossRiver.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  showRenderData:PropTypes.bool,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  height: PropTypes.string
};

export default CrossRiver;
