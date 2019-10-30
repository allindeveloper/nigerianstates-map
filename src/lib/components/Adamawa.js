import React, { Component } from "react";
import PropTypes from "prop-types";
class Adamawa extends Component {

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

    //document.getElementById(this.state.id).innerHTML += this.state.renderData;
  }
  render() {
    return (
      <div className="App">
        <a href="javascript:void(0)" className="tip">
          <span id={this.state.id} ref="myRef1">Adamawa State</span>
          <svg
            height={this.props.height}
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", overflow: "hidden", position: "relative", left: "-0.2px", top: "0.733333px" }}
            viewBox="235.24721519156927 91.75614478114477 133.85080771209957 108.77104377104376"
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
              strokeWidth="0.989824373376452"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0" }}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
              stroke="#ffffff" id={this.state.id} ref="myRef2"
              d="M768.9,545.7L767.8,541.4000000000001L765.6999999999999,536.9000000000001L764.6999999999999,531.4000000000001L764.6999999999999,525.7L760.6999999999999,516.1L752.5999999999999,508.40000000000003L750.5999999999999,505.90000000000003L747.5999999999999,504.6L744.9999999999999,505.8L743.2999999999998,508.3L741.4999999999999,510.6L739.2999999999998,512.5L736.5999999999998,512.2L734.2999999999998,509.90000000000003L730.9999999999999,503.90000000000003L727.3999999999999,494.90000000000003L728.0999999999999,492.3L732.6999999999999,486.90000000000003L738.0999999999999,482.00000000000006L759.5999999999999,456.1000000000001L765.1999999999999,451.50000000000006L765.9999999999999,448.80000000000007L765.5999999999999,445.70000000000005L766.1999999999999,439.90000000000003L774.4999999999999,422.50000000000006L773.9999999999999,416.6000000000001L770.5999999999999,412.30000000000007L765.3,409.80000000000007L762.4,404.9000000000001L762.4,401.9000000000001L762.8,399.0000000000001L762,396.4000000000001L760.4,393.9000000000001L757.6,387.80000000000007L752.8000000000001,383.50000000000006L750.0000000000001,382.6000000000001L747.2000000000002,382.1000000000001L745.2000000000002,380.2000000000001L737.5000000000001,365.7000000000001L745.1000000000001,364.5000000000001L752.2000000000002,361.3000000000001L767.6000000000001,352.0000000000001L770.7000000000002,349.5000000000001L772.0000000000001,346.0000000000001L771.5000000000001,334.8000000000001L772.4000000000001,327.5000000000001L785.8000000000001,328.2000000000001L796.4000000000001,320.7000000000001L805.0000000000001,309.5000000000001L809.8000000000001,305.4000000000001L815.8000000000001,304.1000000000001L822.5000000000001,303.4000000000001L828.5000000000001,300.7000000000001L830.8000000000001,298.1000000000001L832.3000000000001,295.1000000000001L834.4000000000001,293.50000000000006L837.5000000000001,293.30000000000007L842.4000000000001,288.9000000000001L846.9000000000001,283.6000000000001L853.7,282.00000000000006L860.9000000000001,283.00000000000006L866.5000000000001,285.50000000000006L871.1000000000001,289.6000000000001L876.0000000000001,292.80000000000007L881.7000000000002,294.00000000000006L885.9000000000002,291.70000000000005L888.8000000000002,280.40000000000003L893.4000000000002,269.00000000000006L894.5000000000002,263.1000000000001L894.5000000000002,257.30000000000007L895.2000000000003,252.50000000000006L898.0000000000002,252.10000000000005L899.2000000000003,252.30000000000004L900.1000000000003,253.10000000000005L902.8000000000003,254.10000000000005L905.5000000000003,254.40000000000006L917.6000000000004,251.80000000000007L922.5000000000003,251.50000000000006L922.0000000000003,252.50000000000006L907.2000000000004,273.80000000000007L904.9000000000004,278.70000000000005L901.8000000000004,289.30000000000007L899.0000000000005,305.20000000000005L897.1000000000005,310.50000000000006L897.1000000000005,311.6000000000001L897.6000000000005,313.30000000000007L897.8000000000005,314.30000000000007L897.6000000000005,315.4000000000001L896.3000000000005,318.30000000000007L895.3000000000005,319.50000000000006L893.5000000000006,320.90000000000003L891.6000000000006,322.1L890.0000000000006,322.70000000000005L883.5000000000006,323.50000000000006L880.7000000000006,324.50000000000006L879.2000000000006,327.40000000000003L879.3000000000006,329.1L880.3000000000006,331.90000000000003L880.6000000000006,333.50000000000006L880.2000000000006,335.50000000000006L878.3000000000006,338.6000000000001L877.7000000000006,340.30000000000007L877.8000000000006,342.20000000000005L878.6000000000006,343.6L881.1000000000006,346.1L882.0000000000006,348L881.8000000000005,349.3L881.0000000000006,350.7L880.2000000000006,352.8L879.1000000000006,358.5L878.7000000000006,363.9L876.4000000000007,369.9L870.9000000000007,372.09999999999997L864.4000000000007,373.09999999999997L858.6000000000007,375.59999999999997L857.5000000000007,376.49999999999994L855.1000000000007,379.59999999999997L853.5000000000007,380.99999999999994L848.6000000000007,383.3999999999999L848.1000000000007,383.7999999999999L847.5000000000007,385.2999999999999L847.9000000000007,385.5999999999999L850.2000000000006,385.8999999999999L851.1000000000006,387.69999999999993L851.7000000000006,390.19999999999993L851.6000000000006,393.49999999999994L851.3000000000006,395.09999999999997L850.8000000000006,396.49999999999994L847.0000000000007,403.49999999999994L845.3000000000006,407.49999999999994L845.2000000000006,410.8999999999999L845.8000000000006,413.99999999999994L843.9000000000007,429.79999999999995L843.0000000000007,433.49999999999994L841.2000000000007,435.8999999999999L840.1000000000007,436.3999999999999L836.8000000000008,436.19999999999993L835.9000000000008,436.5999999999999L835.3000000000008,437.5999999999999L834.5000000000008,439.9999999999999L833.3000000000008,442.6999999999999L831.8000000000008,444.2999999999999L823.3000000000008,448.8999999999999L822.0000000000008,449.19999999999993L820.8000000000008,448.8999999999999L818.1000000000007,447.69999999999993L817.1000000000007,447.3999999999999L815.5000000000007,447.5999999999999L813.5000000000007,448.7999999999999L812.2000000000007,449.3999999999999L811.1000000000007,449.49999999999994L809.9000000000007,449.29999999999995L807.6000000000007,448.49999999999994L808.3000000000008,449.79999999999995L810.2000000000007,454.49999999999994L810.5000000000007,455.69999999999993L810.5000000000007,458.0999999999999L809.8000000000006,458.7999999999999L807.3000000000006,460.5999999999999L805.5000000000007,463.3999999999999L804.5000000000007,464.0999999999999L802.7000000000007,464.3999999999999L799.5000000000007,463.7999999999999L797.7000000000007,464.5999999999999L795.8000000000008,467.2999999999999L795.2000000000007,470.9999999999999L795.4000000000008,474.7999999999999L796.7000000000007,481.5999999999999L796.6000000000007,483.2999999999999L796.0000000000007,485.0999999999999L792.6000000000007,489.8999999999999L792.1000000000007,491.99999999999994L792.1000000000007,495.19999999999993L792.6000000000007,498.49999999999994L793.1000000000007,500.49999999999994L793.4000000000007,501.8999999999999L792.9000000000007,503.0999999999999L789.8000000000006,506.3999999999999L781.5000000000007,517.9999999999999L778.5000000000007,523.3999999999999L777.9000000000007,525.1999999999998L777.7000000000006,526.9999999999998L777.8000000000006,528.7999999999997L779.0000000000007,533.6999999999997L778.7000000000007,535.3999999999997L777.6000000000007,536.3999999999997L776.3000000000008,537.2999999999997L774.1000000000007,540.5999999999997L768.9000000000007,545.6999999999997Z"
              className="sm_state_NGA2881"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.6852059224698488"
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
              x="294.1879365079365"
              y="139.14591269841267"
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
              transform="matrix(0.3663,0,0,0.3663,186.4358,88.181)"
              className="sm_label_1"
            >
              <tspan
                dy="7.544350198412673"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Adamawa
              </tspan>
            </text>
            <text
              x="294.1879365079365"
              y="139.14591269841267"
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
              transform="matrix(0.3663,0,0,0.3663,186.4358,88.181)"
              className="sm_label_38"
            >
              <tspan
                dy="7.544350198412673"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Adamawa
              </tspan>
            </text>
            <text
              x="294.1879365079365"
              y="139.14591269841267"
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
              transform="matrix(0.3663,0,0,0.3663,186.4358,88.181)"
              className="sm_label_75"
            >
              <tspan
                dy="7.544350198412673"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Adamawa
              </tspan>
            </text>
            <text
              x="294.1879365079365"
              y="139.14591269841267"
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
              transform="matrix(0.3663,0,0,0.3663,186.4358,88.181)"
              className="sm_label_112"
            >
              <tspan
                dy="7.544350198412673"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Adamawa
              </tspan>
            </text>
            <text
              x="294.1879365079365"
              y="139.14591269841267"
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
              transform="matrix(0.3663,0,0,0.3663,186.4358,88.181)"
              className="sm_label_149"
            >
              <tspan
                dy="7.544350198412673"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Adamawa
              </tspan>
            </text>
            <text
              x="294.1879365079365"
              y="139.14591269841267"
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
              transform="matrix(0.3663,0,0,0.3663,186.4358,88.181)"
              className="sm_label_186"
            >
              <tspan
                dy="7.544350198412673"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Adamawa
              </tspan>
            </text>
            <text
              x="294.1879365079365"
              y="139.14591269841267"
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
              transform="matrix(0.3663,0,0,0.3663,186.4358,88.181)"
              className="sm_label_223"
            >
              <tspan
                dy="7.544350198412673"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Adamawa
              </tspan>
            </text>
            <text
              x="294.1879365079365"
              y="139.14591269841267"
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
              transform="matrix(0.3663,0,0,0.3663,186.4358,88.181)"
              className="sm_label_260"
            >
              <tspan
                dy="7.544350198412673"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Adamawa
              </tspan>
            </text>
            <text
              x="294.1879365079365"
              y="139.14591269841267"
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
              transform="matrix(0.3663,0,0,0.3663,186.4358,88.181)"
              className="sm_label_297"
            >
              <tspan
                dy="7.544350198412673"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Adamawa
              </tspan>
            </text>
            <text
              x="294.1879365079365"
              y="139.14591269841267"
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
              transform="matrix(0.3663,0,0,0.3663,186.4358,88.181)"
              className="sm_label_334"
            >
              <tspan
                dy="7.544350198412673"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Adamawa
              </tspan>
            </text>
            <text
              x="294.1879365079365"
              y="139.14591269841267"
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
              transform="matrix(0.3663,0,0,0.3663,186.4358,88.181)"
              className="sm_label_371"
            >
              <tspan
                dy="7.544350198412673"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Adamawa
              </tspan>
            </text>
            <text
              x="294.1879365079365"
              y="139.14591269841267"
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
              transform="matrix(0.3663,0,0,0.3663,186.4358,88.181)"
              className="sm_label_408"
            >
              <tspan
                dy="7.544350198412673"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Adamawa
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
const adamawaState =
  '<div class="hoverinfo">' +
  "<h6>" +
  state +
  " </h6>" +
  "Total No Of Farms - " +
  val +
  "" +
  "</div>";
Adamawa.defaultProps = {
  hoverColor: "red",
  hoverBackgroundColor: "grey",
  renderData: adamawaState,
  defaultColor: "green",
  id: "ad",
  height: ""
};

Adamawa.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  height: PropTypes.string
};

export default Adamawa;
