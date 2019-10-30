import React, { Component } from "react";
import PropTypes from "prop-types";
class Borno extends Component {
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
    let {showRenderData} = this.props;
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
    let {showRenderData} = this.props;
    return (
      <div className="App">
        <a href="javascript:void(0)" className="tip">
          {(showRenderData)&&<span id={this.state.id} ref="myRef1">Borno State</span>}
          <svg
            height={this.props.height}
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", overflow: "hidden", position: "relative", left: "-0.2px", top: "0.733333px" }}
            viewBox="248.50305643896738 4.9150452942119625 142.50102997920803 115.80046496713162"
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
              strokeWidth="1.0537926151932973"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0" }}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
              stroke="#ffffff" id={this.state.id} ref="myRef2"
              d="M922.5,251.5L917.6,251.8L905.5,254.4L902.8,254.1L900.0999999999999,253.1L899.1999999999999,252.29999999999998L897.9999999999999,252.1L895.1999999999999,252.5L894.4999999999999,257.3L894.4999999999999,263.1L893.3999999999999,269L888.7999999999998,280.4L885.8999999999999,291.7L881.6999999999998,294L875.9999999999998,292.8L871.0999999999998,289.6L866.4999999999998,285.5L860.8999999999997,283L853.6999999999997,282L846.8999999999997,283.6L842.3999999999997,288.90000000000003L837.4999999999998,293.3L834.3999999999997,293.5L832.2999999999997,295.1L830.7999999999997,298.1L828.4999999999998,300.70000000000005L822.4999999999998,303.40000000000003L815.7999999999997,304.1L809.7999999999997,305.40000000000003L804.9999999999998,309.50000000000006L796.3999999999997,320.70000000000005L785.7999999999997,328.20000000000005L772.3999999999997,327.50000000000006L766.4999999999998,323.70000000000005L760.8999999999997,314.6L757.7999999999997,312.6L754.1999999999997,311.20000000000005L751.0999999999997,309.00000000000006L748.4999999999997,305.80000000000007L746.6999999999997,302.1000000000001L746.8999999999997,298.4000000000001L753.0999999999998,288.30000000000007L751.9999999999998,281.00000000000006L755.2999999999997,280.1000000000001L757.7999999999997,278.00000000000006L759.7999999999997,275.50000000000006L760.6999999999997,272.50000000000006L760.0999999999997,265.40000000000003L761.2999999999997,258.6L765.9999999999998,253.40000000000003L785.5999999999998,246.50000000000003L790.7999999999998,242.60000000000002L793.2999999999998,236.8L792.8999999999999,229.60000000000002L793.2999999999998,222.40000000000003L795.0999999999998,219.70000000000005L797.3999999999997,217.30000000000004L800.7999999999997,211.10000000000005L809.1999999999997,200.60000000000005L808.7999999999997,197.50000000000006L807.2999999999997,194.50000000000006L804.8999999999997,191.70000000000005L801.4999999999998,190.60000000000005L798.6999999999998,191.00000000000006L796.4999999999998,190.30000000000007L796.9999999999998,186.90000000000006L801.9999999999998,177.00000000000006L802.3999999999997,173.20000000000005L800.3999999999997,164.70000000000005L804.2999999999997,136.10000000000005L802.5999999999997,123.30000000000005L811.6999999999997,114.60000000000005L815.3999999999997,109.50000000000006L817.4999999999998,104.30000000000005L816.7999999999997,99.00000000000006L812.2999999999997,95.70000000000006L808.5999999999997,91.60000000000007L807.0999999999997,86.10000000000007L809.0999999999997,69.60000000000007L811.3999999999996,69.70000000000006L813.2999999999996,70.00000000000006L814.8999999999996,70.60000000000005L816.1999999999996,70.90000000000005L817.3999999999996,70.30000000000005L817.7999999999996,69.30000000000005L818.4999999999997,64.70000000000006L818.8999999999996,64.40000000000006L821.3999999999996,63.90000000000006L822.4999999999997,62.20000000000006L822.9999999999997,60.30000000000006L821.6999999999997,59.80000000000006L822.2999999999997,58.60000000000006L823.2999999999997,57.00000000000006L823.5999999999997,55.60000000000006L826.5999999999997,52.70000000000006L827.8999999999996,52.70000000000006L829.0999999999997,51.70000000000006L829.2999999999997,49.80000000000006L831.6999999999997,51.80000000000006L832.9999999999997,52.10000000000006L833.6999999999997,51.60000000000006L834.2999999999997,49.70000000000006L835.2999999999997,49.20000000000006L837.1999999999997,48.80000000000006L838.4999999999997,47.70000000000006L840.6999999999997,45.10000000000006L841.5999999999997,43.30000000000006L842.6999999999997,44.60000000000006L843.8999999999997,44.50000000000006L842.9999999999998,42.50000000000006L843.1999999999998,42.20000000000006L844.8999999999999,41.50000000000006L845.9999999999999,41.300000000000054L845.8999999999999,40.400000000000055L848.1999999999998,37.800000000000054L849.2999999999998,36.900000000000055L848.2999999999998,35.70000000000005L846.9999999999999,35.20000000000005L846.9999999999999,34.50000000000005L849.2999999999998,35.40000000000005L850.0999999999998,35.30000000000005L850.3999999999997,33.90000000000005L852.7999999999997,34.40000000000005L855.0999999999997,34.00000000000005L862.4999999999997,30.20000000000005L864.6999999999997,29.40000000000005L866.9999999999997,29.300000000000047L866.4999999999997,30.600000000000048L867.3999999999996,31.000000000000046L868.9999999999997,30.900000000000045L870.3999999999996,30.400000000000045L870.9999999999997,31.000000000000046L871.5999999999997,29.600000000000048L872.0999999999997,29.300000000000047L872.8999999999996,29.40000000000005L873.0999999999997,30.100000000000048L872.5999999999997,31.600000000000048L874.7999999999997,30.600000000000048L877.0999999999997,30.20000000000005L879.0999999999997,29.50000000000005L880.5999999999997,27.50000000000005L879.3999999999996,27.30000000000005L879.1999999999996,26.900000000000052L879.9999999999995,25.700000000000053L881.4999999999995,25.500000000000053L881.6999999999996,24.800000000000054L881.1999999999996,23.700000000000053L881.6999999999996,22.500000000000053L882.1999999999996,21.800000000000054L885.5999999999996,18.600000000000055L886.7999999999996,17.700000000000056L886.7999999999996,16.300000000000058L887.4999999999997,15.600000000000058L889.9999999999997,15.200000000000058L910.5999999999997,16.10000000000006L929.5999999999997,42.90000000000006L948.6999999999997,69.70000000000006L957.9999999999997,115.10000000000005L958.0999999999997,121.70000000000005L958.6999999999997,123.50000000000004L958.6999999999997,125.20000000000005L958.1999999999997,127.80000000000004L958.1999999999997,128.80000000000004L958.9999999999997,130.10000000000005L960.0999999999997,130.70000000000005L961.3999999999996,131.00000000000006L978.4999999999997,131.50000000000006L983.7999999999996,132.90000000000006L986.0999999999996,134.10000000000005L986.2999999999996,134.90000000000006L985.8999999999996,136.20000000000007L986.0999999999997,137.00000000000009L986.6999999999997,137.60000000000008L989.0999999999997,139.4000000000001L989.9999999999997,139.8000000000001L989.9999999999997,140.50000000000009L988.8999999999996,141.00000000000009L990.4999999999997,142.20000000000007L992.1999999999997,143.10000000000008L993.4999999999997,144.20000000000007L994.0999999999997,146.00000000000009L994.4999999999997,146.4000000000001L997.4999999999997,145.10000000000008L998.4999999999997,145.60000000000008L998.9999999999997,147.4000000000001L997.3999999999996,149.00000000000009L996.2999999999996,151.00000000000009L994.7999999999996,157.10000000000008L994.9999999999997,158.00000000000009L993.4999999999997,159.00000000000009L993.6999999999997,160.70000000000007L995.2999999999997,164.30000000000007L995.3999999999997,165.90000000000006L995.0999999999998,168.70000000000007L994.1999999999998,171.40000000000006L992.3999999999999,180.10000000000005L991.7999999999998,181.50000000000006L988.6999999999998,185.60000000000005L988.2999999999998,186.30000000000004L988.4999999999999,187.00000000000003L989.1999999999999,188.10000000000002L990.9999999999999,188.20000000000002L991.5999999999999,188.60000000000002L992.6999999999999,190.3L993.9999999999999,191.70000000000002L994.9999999999999,193.10000000000002L995.3999999999999,194.8L995.4999999999999,197L995.1999999999999,198.7L994.4999999999999,200.79999999999998L993.6999999999999,202.89999999999998L992.6999999999999,204.39999999999998L991.1999999999999,205.2L986.9,206.79999999999998L985.1999999999999,207.79999999999998L982.0999999999999,210.6L980.3999999999999,211.6L975.4999999999999,213.2L973.8999999999999,214.1L966.4999999999999,221L965.7999999999998,221.2L963.5999999999998,221.5L962.5999999999998,221.9L960.2999999999998,224.3L958.7999999999998,225.4L956.9999999999999,226.4L955.1999999999999,226.8L953.4999999999999,226.60000000000002L947.5999999999999,224.10000000000002L944.3999999999999,223.10000000000002L941.7999999999998,223.10000000000002L938.5999999999998,225.70000000000002L935.4999999999998,228.9L932.6999999999998,232.4L930.6999999999998,236L929.2999999999998,239.4L928.2999999999998,240.70000000000002L925.0999999999998,242.50000000000003L923.7999999999998,243.70000000000002L922.8999999999999,245.20000000000002L922.4999999999999,246.9L923.0999999999999,250.1L922.4999999999999,251.5Z"
              className="sm_state_NGA2839"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.7294879378675599"
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
              x="323.85579365079366"
              y="60.25138888888888"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1" }}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,205.2372,38.1831)"
              className="sm_label_36"
            >
              <tspan
                dy="7.626388888888883"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Borno
              </tspan>
            </text>
            <text
              x="323.85579365079366"
              y="60.25138888888888"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1" }}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,205.2372,38.1831)"
              className="sm_label_73"
            >
              <tspan
                dy="7.626388888888883"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Borno
              </tspan>
            </text>
            <text
              x="323.85579365079366"
              y="60.25138888888888"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1" }}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,205.2372,38.1831)"
              className="sm_label_110"
            >
              <tspan
                dy="7.626388888888883"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Borno
              </tspan>
            </text>
            <text
              x="323.85579365079366"
              y="60.25138888888888"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1" }}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,205.2372,38.1831)"
              className="sm_label_182"
            >
              <tspan
                dy="7.626388888888883"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Borno
              </tspan>
            </text>
            <text
              x="323.85579365079366"
              y="60.25138888888888"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1" }}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,205.2372,38.1831)"
              className="sm_label_219"
            >
              <tspan
                dy="7.626388888888883"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Borno
              </tspan>
            </text>
            <text
              x="323.85579365079366"
              y="60.25138888888888"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1" }}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,205.2372,38.1831)"
              className="sm_label_252"
            >
              <tspan
                dy="7.626388888888883"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Borno
              </tspan>
            </text>
            <text
              x="323.85579365079366"
              y="60.25138888888888"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1" }}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,205.2372,38.1831)"
              className="sm_label_256"
            >
              <tspan
                dy="7.626388888888883"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Borno
              </tspan>
            </text>
            <text
              x="323.85579365079366"
              y="60.25138888888888"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1" }}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,205.2372,38.1831)"
              className="sm_label_293"
            >
              <tspan
                dy="7.626388888888883"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Borno
              </tspan>
            </text>
            <text
              x="323.85579365079366"
              y="60.25138888888888"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1" }}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,205.2372,38.1831)"
              className="sm_label_329"
            >
              <tspan
                dy="7.626388888888883"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Borno
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
const bornoData =
'<div class="hoverinfo">' +
"<h3>State</h3>"+
"<h5>PVHHTarget - " + 14000 +"</h5>"+
"<h5>ZoneName - " + 34030+"</h5>"+
"" +
"</div>";
Borno.defaultProps = {
  hoverColor: "red",
  hoverBackgroundColor: "grey",
  renderData: bornoData,
  showRenderData:false,
  defaultColor: "green",
  id: "born",
  height: ""
};

Borno.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  showRenderData:PropTypes.bool,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  height: PropTypes.string
};

export default Borno;
