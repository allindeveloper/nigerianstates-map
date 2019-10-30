import React, { Component } from "react";
import PropTypes from "prop-types";
class Ondo extends Component {
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
          {(showRenderData)&&<span id={this.state.id} ref="myRef1">Ondo State</span>}
          <svg
            height={this.props.height}
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", overflow: "hidden", position: "relative", left: "-0.2px", top: "0.733333px" }}
            viewBox="40.45017566613146 189.79622214205546 73.29925184234023 59.565095398428724"
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
              strokeWidth="0.5420466806585331"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0" }}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
              stroke="#ffffff" id={this.state.id} ref="myRef2"
              d="M280.2,535.7L278.7,538.2L276.8,540.5L275.8,541L273.5,541.5L272.4,542.5L271.59999999999997,545.4L274.09999999999997,547L274.49999999999994,548.5L273.59999999999997,550.3L273.9,552.9L274.4,554.1L274.7,556L273.9,558.7L272.79999999999995,559.9000000000001L271.4,560.8000000000001L269.4,562.6L267.59999999999997,564.7L267.49999999999994,565.8000000000001L267.69999999999993,566.6L263.8999999999999,575.4L263.3999999999999,577.4L262.2999999999999,578.9L260.0999999999999,581.1999999999999L258.9999999999999,584.1999999999999L258.7999999999999,587.1999999999999L259.9999999999999,589.6999999999999L260.2999999999999,590.6999999999999L259.1999999999999,592.1999999999999L259.2999999999999,593.4999999999999L257.3999999999999,593.9999999999999L256.5999999999999,596.0999999999999L255.5999999999999,601.3999999999999L255.1999999999999,602.5999999999999L253.99999999999991,604.5999999999999L253.0999999999999,605.1999999999999L251.6999999999999,605.6999999999999L249.0999999999999,605.0999999999999L247.99999999999991,604.0999999999999L245.5999999999999,603.8999999999999L241.49999999999991,607.1999999999998L239.6999999999999,607.4999999999998L237.49999999999991,601.9999999999998L238.29999999999993,599.5999999999998L239.69999999999993,597.4999999999998L235.89999999999992,594.4999999999998L212.5999999999999,594.4999999999998L211.1999999999999,595.0999999999998L210.1999999999999,596.1999999999998L210.1999999999999,598.3999999999999L208.8999999999999,600.1999999999998L207.7999999999999,602.3999999999999L204.7999999999999,605.2999999999998L202.2999999999999,608.4999999999999L201.2999999999999,610.2999999999998L200.9999999999999,612.9999999999999L200.69999999999987,614.1999999999999L200.69999999999987,616.8L201.09999999999988,617.5L201.79999999999987,617.8L203.19999999999987,620.0999999999999L204.69999999999987,624.4999999999999L202.79999999999987,628.8999999999999L201.39999999999986,630.9999999999999L200.79999999999987,633.4999999999999L199.59999999999988,635.5999999999999L197.4999999999999,636.6999999999999L195.69999999999987,637.3L194.4999999999999,639.0999999999999L194.09999999999988,641.4999999999999L192.8999999999999,643.7999999999998L193.3999999999999,644.5999999999998L195.09999999999988,645.5999999999998L197.09999999999988,647.2999999999998L198.79999999999987,649.3999999999999L198.99999999999986,650.4999999999999L200.79999999999987,650.7999999999998L202.69999999999987,651.8999999999999L204.29999999999987,654.2999999999998L204.19999999999987,656.9999999999999L194.89999999999986,679.6999999999999L185.19999999999987,666.9999999999999L183.4999999999999,665.3999999999999L180.19999999999987,663.9999999999999L178.69999999999987,662.2999999999998L176.59999999999988,658.9999999999999L173.69999999999987,655.8999999999999L171.09999999999988,653.8999999999999L162.09999999999988,648.1999999999998L156.9999999999999,643.3999999999999L153.7999999999999,641.2999999999998L152.4999999999999,640.6999999999998L152.59999999999988,640.5999999999998L157.59999999999988,640.9999999999998L158.8999999999999,639.4999999999998L158.7999999999999,637.1999999999998L154.1999999999999,635.1999999999998L151.6999999999999,635.1999999999998L150.1999999999999,633.4999999999998L151.5999999999999,632.9999999999998L154.2999999999999,632.5999999999998L158.4999999999999,629.4999999999998L159.7999999999999,629.0999999999998L160.7999999999999,628.0999999999998L160.9999999999999,626.8999999999997L160.19999999999987,622.9999999999998L160.19999999999987,617.0999999999998L158.69999999999987,614.8999999999997L156.59999999999988,615.8999999999997L155.29999999999987,617.7999999999997L151.69999999999987,620.0999999999997L147.39999999999986,619.8999999999996L145.99999999999986,619.6999999999996L143.29999999999987,618.7999999999996L142.19999999999987,617.9999999999997L140.9999999999999,615.8999999999996L140.9999999999999,613.2999999999996L143.09999999999988,607.7999999999996L147.19999999999987,603.3999999999996L154.69999999999987,597.8999999999996L156.29999999999987,595.7999999999996L158.19999999999987,584.7999999999996L161.39999999999986,583.0999999999996L162.69999999999987,581.2999999999996L163.29999999999987,579.0999999999996L165.59999999999988,575.2999999999996L169.09999999999988,572.3999999999996L172.3999999999999,571.4999999999997L175.4999999999999,572.7999999999996L179.69999999999987,575.4999999999997L180.69999999999987,575.9999999999997L182.89999999999986,576.1999999999997L183.79999999999987,575.5999999999997L183.99999999999986,573.6999999999997L183.79999999999987,571.7999999999997L184.09999999999988,569.5999999999997L183.9999999999999,563.2999999999997L184.69999999999987,559.2999999999997L186.19999999999987,555.2999999999997L189.79999999999987,553.4999999999998L193.89999999999986,552.2999999999997L193.99999999999986,548.9999999999998L199.79999999999987,547.0999999999998L202.89999999999986,546.9999999999998L211.99999999999986,547.5999999999998L217.89999999999986,547.2999999999998L222.19999999999987,548.5999999999998L224.19999999999987,552.5999999999998L225.9999999999999,558.4999999999998L230.59999999999988,560.2999999999997L239.3999999999999,552.8999999999997L243.9999999999999,542.1999999999997L245.3999999999999,534.1999999999997L246.4999999999999,531.7999999999997L250.19999999999987,527.8999999999997L252.29999999999987,526.5999999999998L253.39999999999986,525.1999999999998L254.19999999999987,523.6999999999998L256.2999999999999,522.4999999999998L258.5999999999999,523.4999999999998L260.69999999999993,522.6999999999998L262.19999999999993,520.2999999999998L268.8999999999999,519.0999999999998L271.3999999999999,520.1999999999998L270.7999999999999,523.4999999999998L274.9999999999999,529.9999999999998L280.1999999999999,535.6999999999998Z"
              className="sm_state_NGA2853"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.3752318146858695"
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
              x="65.78206349206349"
              y="219.79853174603173"
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
              transform="matrix(0.3663,0,0,0.3663,41.6881,139.293)"
              className="sm_label_23"
            >
              <tspan
                dy="7.626656746031728"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Ondo
              </tspan>
            </text>
            <text
              x="65.78206349206349"
              y="219.79853174603173"
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
              transform="matrix(0.3663,0,0,0.3663,41.6881,139.293)"
              className="sm_label_60"
            >
              <tspan
                dy="7.626656746031728"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Ondo
              </tspan>
            </text>
            <text
              x="65.78206349206349"
              y="219.79853174603173"
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
              transform="matrix(0.3663,0,0,0.3663,41.6881,139.293)"
              className="sm_label_97"
            >
              <tspan
                dy="7.626656746031728"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Ondo
              </tspan>
            </text>
            <text
              x="65.78206349206349"
              y="219.79853174603173"
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
              transform="matrix(0.3663,0,0,0.3663,41.6881,139.293)"
              className="sm_label_134"
            >
              <tspan
                dy="7.626656746031728"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Ondo
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
const ondoData =
  '<div class="hoverinfo">' +
  "<h6>" +
  state +
  " </h6>" +
  "Total No Of Farms - " +
  val +
  "" +
  "</div>";
Ondo.defaultProps = {
  hoverColor: "red",
  hoverBackgroundColor: "grey",
  renderData: ondoData,
  showRenderData:false,
  defaultColor: "green",
  id: "ond",
  height: ""
};

Ondo.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  showRenderData:PropTypes.bool,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  height: PropTypes.string
};

export default Ondo;
