import React, { Component } from "react";
import PropTypes from "prop-types"; 
class Ekiti extends Component {
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
          <span id={this.state.id} ref={this.myRef1}>Ekiti State</span>
          <svg
            height="300.0226150793651"
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{overflow: "hidden", position: "relative", left: "-0.2px", top: "0.733333px"}}
            viewBox="67.20350911168042 180.8152116402116 30.04814050679786 24.417989417989418"
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
              strokeWidth="0.22220547157430554"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0"}}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
               stroke="#ffffff"id={this.state.id}ref={this.myRef2}
              d="M262.2,520.3L260.7,522.6999999999999L258.59999999999997,523.4999999999999L256.29999999999995,522.4999999999999L254.19999999999996,523.6999999999999L253.39999999999995,525.1999999999999L252.29999999999995,526.5999999999999L250.19999999999996,527.8999999999999L246.49999999999997,531.7999999999998L245.39999999999998,534.1999999999998L243.99999999999997,542.1999999999998L239.39999999999998,552.8999999999999L230.59999999999997,560.2999999999998L225.99999999999997,558.4999999999999L224.19999999999996,552.5999999999999L222.19999999999996,548.5999999999999L217.89999999999995,547.3L211.99999999999994,547.5999999999999L202.89999999999995,546.9999999999999L199.79999999999995,547.0999999999999L193.99999999999994,548.9999999999999L187.39999999999995,531.0999999999999L186.89999999999995,526.8L187.79999999999995,523.0999999999999L188.49999999999994,512.9999999999999L192.39999999999995,507.89999999999986L195.49999999999994,506.39999999999986L198.09999999999994,504.09999999999985L199.99999999999994,497.1999999999999L200.99999999999994,497.7999999999999L201.39999999999995,499.2999999999999L203.09999999999994,499.9999999999999L208.29999999999993,498.39999999999986L213.79999999999993,501.89999999999986L217.09999999999994,502.09999999999985L219.19999999999993,502.59999999999985L222.69999999999993,501.99999999999983L224.09999999999994,501.99999999999983L225.09999999999994,499.99999999999983L225.59999999999994,497.29999999999984L227.39999999999995,495.1999999999998L230.29999999999995,494.29999999999984L239.29999999999995,493.99999999999983L237.59999999999997,496.29999999999984L237.69999999999996,499.89999999999986L239.29999999999995,500.4999999999999L241.59999999999997,499.0999999999999L244.59999999999997,498.3999999999999L247.59999999999997,498.0999999999999L249.19999999999996,498.2999999999999L250.39999999999995,499.1999999999999L250.29999999999995,501.09999999999985L248.39999999999995,502.1999999999999L245.99999999999994,505.1999999999999L245.39999999999995,508.7999999999999L246.59999999999994,512.3999999999999L249.39999999999995,514.8999999999999L250.49999999999994,514.7999999999998L251.89999999999995,515.9999999999999L258.4,519.1999999999999L262.2,520.3Z"
              className="sm_state_NGA2854"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.153821737697313"
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
              x="77.35619047619046"
              y="192.14515873015873"
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
              transform="matrix(0.3663,0,0,0.3663,49.023,121.7682)"
              className="sm_label_22"
            >
              <tspan
                dy="7.613908730158727"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Ekiti
              </tspan>
            </text>
            <text
              x="77.35619047619046"
              y="192.14515873015873"
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
              transform="matrix(0.3663,0,0,0.3663,49.023,121.7682)"
              className="sm_label_59"
            >
              <tspan
                dy="7.613908730158727"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Ekiti
              </tspan>
            </text>
            <text
              x="77.35619047619046"
              y="192.14515873015873"
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
              transform="matrix(0.3663,0,0,0.3663,49.023,121.7682)"
              className="sm_label_96"
            >
              <tspan
                dy="7.613908730158727"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Ekiti
              </tspan>
            </text>
            <text
              x="77.35619047619046"
              y="192.14515873015873"
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
              transform="matrix(0.3663,0,0,0.3663,49.023,121.7682)"
              className="sm_label_133"
            >
              <tspan
                dy="7.613908730158727"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Ekiti
              </tspan>
            </text>
            <text
              x="77.35619047619046"
              y="192.14515873015873"
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
              transform="matrix(0.3663,0,0,0.3663,49.023,121.7682)"
              className="sm_label_170"
            >
              <tspan
                dy="7.613908730158727"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Ekiti
              </tspan>
            </text>
            <text
              x="77.35619047619046"
              y="192.14515873015873"
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
              transform="matrix(0.3663,0,0,0.3663,49.023,121.7682)"
              className="sm_label_207"
            >
              <tspan
                dy="7.613908730158727"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Ekiti
              </tspan>
            </text>
            <text
              x="77.35619047619046"
              y="192.14515873015873"
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
              transform="matrix(0.3663,0,0,0.3663,49.023,121.7682)"
              className="sm_label_244"
            >
              <tspan
                dy="7.613908730158727"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Ekiti
              </tspan>
            </text>
            <text
              x="77.35619047619046"
              y="192.14515873015873"
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
              transform="matrix(0.3663,0,0,0.3663,49.023,121.7682)"
              className="sm_label_281"
            >
              <tspan
                dy="7.613908730158727"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Ekiti
              </tspan>
            </text>
            <text
              x="77.35619047619046"
              y="192.14515873015873"
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
              transform="matrix(0.3663,0,0,0.3663,49.023,121.7682)"
              className="sm_label_318"
            >
              <tspan
                dy="7.613908730158727"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Ekiti
              </tspan>
            </text>
            <text
              x="77.35619047619046"
              y="192.14515873015873"
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
              transform="matrix(0.3663,0,0,0.3663,49.023,121.7682)"
              className="sm_label_355"
            >
              <tspan
                dy="7.613908730158727"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Ekiti
              </tspan>
            </text>
            <text
              x="77.35619047619046"
              y="192.14515873015873"
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
              transform="matrix(0.3663,0,0,0.3663,49.023,121.7682)"
              className="sm_label_392"
            >
              <tspan
                dy="7.613908730158727"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Ekiti
              </tspan>
            </text>
            <text
              x="77.35619047619046"
              y="192.14515873015873"
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
              transform="matrix(0.3663,0,0,0.3663,49.023,121.7682)"
              className="sm_label_429"
            >
              <tspan
                dy="7.613908730158727"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Ekiti
              </tspan>
            </text>
            <text
              x="77.35619047619046"
              y="192.14515873015873"
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
              transform="matrix(0.3663,0,0,0.3663,49.023,121.7682)"
              className="sm_label_466"
            >
              <tspan
                dy="7.613908730158727"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Ekiti
              </tspan>
            </text>
            <text
              x="77.35619047619046"
              y="192.14515873015873"
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
              transform="matrix(0.3663,0,0,0.3663,49.023,121.7682)"
              className="sm_label_503"
            >
              <tspan
                dy="7.613908730158727"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Ekiti
              </tspan>
            </text>
            <text
              x="77.35619047619046"
              y="192.14515873015873"
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
              transform="matrix(0.3663,0,0,0.3663,49.023,121.7682)"
              className="sm_label_540"
            >
              <tspan
                dy="7.613908730158727"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Ekiti
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
const ekitiData =
      '<div class="hoverinfo">' +
      "<h6>" +
      state +
      " </h6>" +
      "Total No Of Farms - " +
      val +
      "" +
      "</div>";
Ekiti.defaultProps = {
  hoverColor:"red",
  hoverBackgroundColor:"grey",
  renderData:ekitiData,
  defaultColor:"green",
  id:"ekit"
};

Ekiti.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Ekiti;
