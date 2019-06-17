import React, { Component } from "react";
import PropTypes from "prop-types"; 
class Zamfara extends Component {
  constructor(props) {
    super(props);
    this.myRef1 = React.createRef();
    this.myRef2 = React.createRef();

    this.state = {
      hoverColor:this.props.hoverColor,
   hoverBackgroundColor:this.props.hoverBackgroundColor,
      renderData:this.props.renderData,
      defaultColor:this.props.defaultColor,
      id:this.props.id
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
          <span id={this.state.id} ref={this.myRef1}>Zamfara State</span>
          <svg
            height="300.0226150793651"
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{overflow: "hidden", position: "relative", left: "-0.2px", top: "0.733333px"}}
            viewBox="60.82427587423421 21.978040323873657 89.68914666422997 72.88399871733203"
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
              strokeWidth="0.6632496651536088"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0"}}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
               stroke="#ffffff"id={this.state.id}ref={this.myRef2}
              d="M366.3,76.8L364.90000000000003,85.7L367.50000000000006,120.9L369.30000000000007,125.2L368.9000000000001,130.3L371.2000000000001,134.8L372.4000000000001,139.10000000000002L372.9000000000001,143.50000000000003L373.6000000000001,145.90000000000003L374.1000000000001,148.50000000000003L373.6000000000001,150.70000000000002L371.80000000000007,155.70000000000002L370.4000000000001,158.3L372.1000000000001,160.4L374.9000000000001,161.70000000000002L379.5000000000001,165.50000000000003L380.4000000000001,170.50000000000003L377.9000000000001,171.50000000000003L375.30000000000007,170.80000000000004L373.80000000000007,172.20000000000005L373.4000000000001,175.00000000000006L371.4000000000001,177.00000000000006L367.9000000000001,179.70000000000005L366.5000000000001,180.40000000000003L364.8000000000001,179.20000000000005L358.60000000000014,179.20000000000005L353.8000000000001,181.50000000000006L350.7000000000001,196.70000000000005L353.5000000000001,201.90000000000003L353.0000000000001,204.80000000000004L353.3000000000001,207.80000000000004L352.5000000000001,211.70000000000005L351.2000000000001,215.50000000000006L349.8000000000001,218.00000000000006L348.2000000000001,219.70000000000005L342.3000000000001,223.40000000000003L340.60000000000014,225.50000000000003L339.70000000000016,228.10000000000002L338.10000000000014,235.70000000000002L337.3000000000001,237.60000000000002L336.2000000000001,239.00000000000003L334.9000000000001,240.10000000000002L333.5000000000001,241.00000000000003L325.0000000000001,244.20000000000002L322.7000000000001,244.20000000000002L317.3000000000001,245.8L315.40000000000015,245.8L313.60000000000014,245.4L308.10000000000014,243.4L306.3000000000001,243.20000000000002L304.7000000000001,243.8L303.7000000000001,245.10000000000002L302.2000000000001,248.20000000000002L301.2000000000001,249.50000000000003L300.3000000000001,250.10000000000002L298.3000000000001,250.8L297.5000000000001,251.4L296.8000000000001,252.5L296.7000000000001,254.7L296.3000000000001,255.79999999999998L295.10000000000014,256.9L291.3000000000001,258.2L290.0000000000001,252.6L283.60000000000014,241.79999999999998L280.10000000000014,237.1L279.40000000000015,224.2L273.00000000000017,214L269.70000000000016,212.7L268.10000000000014,210.1L270.20000000000016,203.7L270.60000000000014,197.89999999999998L266.70000000000016,194.09999999999997L263.60000000000014,192.99999999999997L257.40000000000015,191.89999999999998L256.00000000000017,192.29999999999998L254.70000000000016,192.99999999999997L242.10000000000016,193.89999999999998L237.10000000000016,192.79999999999998L229.90000000000018,189.7L228.7000000000002,187.2L226.7000000000002,185.6L222.0000000000002,186.29999999999998L220.0000000000002,186.2L218.2000000000002,185.29999999999998L216.40000000000018,185.39999999999998L215.00000000000017,186.89999999999998L214.30000000000018,188.89999999999998L212.80000000000018,189.79999999999998L210.90000000000018,189.89999999999998L206.50000000000017,190.99999999999997L204.80000000000018,190.59999999999997L203.40000000000018,189.49999999999997L200.00000000000017,188.19999999999996L196.60000000000016,188.79999999999995L197.30000000000015,148.89999999999995L200.30000000000015,138.69999999999996L212.60000000000016,140.69999999999996L238.00000000000017,139.69999999999996L242.10000000000016,135.19999999999996L241.80000000000015,128.59999999999997L240.10000000000016,122.29999999999997L240.60000000000016,116.69999999999997L244.60000000000016,113.99999999999997L248.90000000000018,108.49999999999997L252.00000000000017,103.39999999999998L256.20000000000016,100.09999999999998L275.00000000000017,98.29999999999998L278.1000000000002,97.39999999999998L281.1000000000002,96.09999999999998L283.50000000000017,91.39999999999998L282.1000000000002,76.79999999999998L283.00000000000017,74.39999999999998L288.3000000000002,71.49999999999997L294.3000000000002,70.69999999999997L297.6000000000002,71.99999999999997L299.6000000000002,71.39999999999998L300.6000000000002,67.89999999999998L300.7000000000002,65.59999999999998L301.1000000000002,63.49999999999998L302.3000000000002,62.39999999999998L306.20000000000016,62.39999999999998L308.00000000000017,62.699999999999974L311.00000000000017,63.59999999999997L312.3000000000002,65.19999999999997L313.70000000000016,66.49999999999997L321.8000000000002,68.49999999999997L329.9000000000002,68.49999999999997L336.4000000000002,64.69999999999997L340.6000000000002,61.39999999999998L342.6000000000002,65.19999999999997L347.50000000000017,70.89999999999998L350.6000000000002,73.69999999999997L353.3000000000002,75.79999999999997L355.8000000000002,76.69999999999997L358.6000000000002,76.99999999999997L364.8000000000002,76.99999999999997L366.3000000000002,76.79999999999997Z"
              className="sm_state_NGA2872"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.45913458070258567"
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
              x="111.71230158730158"
              y="54.83059523809523"
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
              transform="matrix(0.3663,0,0,0.3663,70.7955,34.7478)"
              className="sm_label_4"
            >
              <tspan
                dy="7.650907738095228"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Zamfara
              </tspan>
            </text>
            <text
              x="111.71230158730158"
              y="54.83059523809523"
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
              transform="matrix(0.3663,0,0,0.3663,70.7955,34.7478)"
              className="sm_label_41"
            >
              <tspan
                dy="7.650907738095228"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Zamfara
              </tspan>
            </text>
            <text
              x="111.71230158730158"
              y="54.83059523809523"
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
              transform="matrix(0.3663,0,0,0.3663,70.7955,34.7478)"
              className="sm_label_78"
            >
              <tspan
                dy="7.650907738095228"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Zamfara
              </tspan>
            </text>
            <text
              x="111.71230158730158"
              y="54.83059523809523"
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
              transform="matrix(0.3663,0,0,0.3663,70.7955,34.7478)"
              className="sm_label_115"
            >
              <tspan
                dy="7.650907738095228"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Zamfara
              </tspan>
            </text>
            <text
              x="111.71230158730158"
              y="54.83059523809523"
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
              transform="matrix(0.3663,0,0,0.3663,70.7955,34.7478)"
              className="sm_label_152"
            >
              <tspan
                dy="7.650907738095228"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Zamfara
              </tspan>
            </text>
            <text
              x="111.71230158730158"
              y="54.83059523809523"
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
              transform="matrix(0.3663,0,0,0.3663,70.7955,34.7478)"
              className="sm_label_189"
            >
              <tspan
                dy="7.650907738095228"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Zamfara
              </tspan>
            </text>
            <text
              x="111.71230158730158"
              y="54.83059523809523"
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
              transform="matrix(0.3663,0,0,0.3663,70.7955,34.7478)"
              className="sm_label_226"
            >
              <tspan
                dy="7.650907738095228"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Zamfara
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
const zamfaraData =
      '<div class="hoverinfo">' +
      "<h6>" +
      state +
      " </h6>" +
      "Total No Of Farms - " +
      val +
      "" +
      "</div>";
Zamfara.defaultProps = {
  hoverColor:"red",
  hoverBackgroundColor:"grey",
  renderData:zamfaraData,
  defaultColor:"green",
  id:"zam"
};

Zamfara.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Zamfara;
