import React, { Component } from "react";
import PropTypes from "prop-types"; 
class Benue extends Component {
  constructor(props) {
    super(props);
     

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
      this.refs.myRef1.innerHTML = "";
this.refs.myRef1.innerHTML += this.state.renderData;
  }                                                      
 render() {
    return (
      <div className="App">
        <a href="javascript:void(0)" className="tip">
          <span id={this.state.id} ref="myRef1">Benue State</span>
          <svg
            height="300.0226150793651"
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{overflow: "hidden", position: "relative", left: "-0.2px", top: "0.4px"}}
            viewBox="146.86680695847363 175.1119367053312 74.73384640051306 60.73088849409947"
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
              strokeWidth="0.552655482232947"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0"}}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
               stroke="#ffffff"id={this.state.id}ref="myRef2"
              d="M541.5,507L536.9,513.9L537.9,515.6999999999999L540.5,515.1999999999999L546.1,512.5999999999999L549.4,511.9999999999999L562.1999999999999,511.5999999999999L574.9,513.0999999999999L584.3,519.5999999999999L591.8,528.9999999999999L600.3,536.5999999999999L604,546.3L600.7,556.4L600.1,566.3L596.5,569.6999999999999L592.3,572.6999999999999L588.9,576.9L586.4,581.8L583.6999999999999,596.4L583.9999999999999,601.6999999999999L582.9999999999999,615.8L580.9999999999999,623.9L579.9999999999999,623.9L577.4999999999999,624.4L576.2999999999998,625.5L574.3999999999999,629.2L572.9999999999999,630.5L571.2999999999998,631.3L567.9999999999999,632.5999999999999L566.3999999999999,629.8999999999999L563.9999999999999,625.4999999999999L554.0999999999999,613.7999999999998L546.6999999999999,609.9999999999999L533.5999999999999,612.4999999999999L528.8999999999999,612.5999999999999L526.5999999999999,612.0999999999999L524.9999999999999,610.6999999999999L525.7999999999998,605.6999999999999L523.7999999999998,601.4L513.7999999999998,595.5L507.79999999999984,593.4L502.09999999999985,592.9L496.6999999999999,594.9L495.59999999999985,597.6L496.39999999999986,600.8000000000001L494.9999999999999,603.2L492.1999999999999,604.7L488.6999999999999,605.6L484.9999999999999,605.7L481.6999999999999,605.1L478.39999999999986,605.1L475.9999999999999,606.9L473.6999999999999,609.4L471.1999999999999,610.6999999999999L468.4999999999999,610.9999999999999L466.5999999999999,608.7999999999998L465.4999999999999,605.9999999999999L464.89999999999986,602.7999999999998L463.9999999999999,601.3999999999999L462.2999999999999,601.2999999999998L461.8999999999999,602.1999999999998L460.99999999999994,603.4999999999998L459.09999999999997,603.4999999999998L457.2,603.8999999999997L454.09999999999997,607.9999999999998L450.9,608.7999999999997L447.59999999999997,608.7999999999997L444.09999999999997,609.2999999999997L442.79999999999995,612.0999999999997L441.99999999999994,619.0999999999997L438.29999999999995,624.0999999999997L432.59999999999997,620.5999999999997L429.9,614.7999999999997L432.7,606.9999999999998L432.7,602.8999999999997L431.8,598.8999999999997L429.7,595.4999999999998L426.3,593.7999999999997L423.3,594.5999999999997L420.8,596.4999999999997L417.5,596.8999999999996L414.3,595.3999999999996L411.2,593.0999999999997L408.4,590.4999999999997L406.09999999999997,587.5999999999997L402.9,580.8999999999996L402.09999999999997,577.4999999999997L405.29999999999995,579.0999999999997L408.79999999999995,581.9999999999997L411.49999999999994,583.2999999999996L413.69999999999993,582.5999999999996L413.99999999999994,578.7999999999996L415.29999999999995,575.4999999999997L426.4,569.3999999999996L429.79999999999995,563.6999999999996L431.29999999999995,556.8999999999996L431.49999999999994,554.1999999999996L432.49999999999994,551.7999999999996L434.19999999999993,548.8999999999996L432.0999999999999,547.3999999999996L428.8999999999999,547.7999999999996L426.19999999999993,546.3999999999996L425.19999999999993,543.0999999999997L423.8999999999999,532.9999999999997L424.0999999999999,523.2999999999996L423.7999999999999,520.2999999999996L422.0999999999999,517.2999999999996L419.69999999999993,514.7999999999996L417.19999999999993,511.1999999999996L416.19999999999993,506.8999999999996L415.99999999999994,502.4999999999996L416.3999999999999,497.6999999999996L420.5999999999999,498.6999999999996L425.9999999999999,499.2999999999996L429.9999999999999,500.6999999999996L432.7999999999999,501.2999999999996L438.6999999999999,501.9999999999996L441.59999999999985,502.7999999999996L445.6999999999999,505.2999999999996L447.09999999999985,505.7999999999996L454.09999999999985,506.9999999999996L456.39999999999986,507.8999999999996L460.89999999999986,510.1999999999996L463.4999999999999,510.9999999999996L466.1999999999999,511.2999999999996L468.59999999999985,511.9999999999996L470.49999999999983,513.9999999999995L474.29999999999984,516.1999999999996L476.39999999999986,517.7999999999996L477.39999999999986,518.2999999999996L478.9999999999999,518.6999999999996L480.0999999999999,517.3999999999996L479.4999999999999,514.3999999999996L475.5999999999999,505.7999999999996L473.69999999999993,499.6999999999996L474.99999999999994,493.7999999999996L479.69999999999993,489.89999999999964L490.5999999999999,488.5999999999996L507.3999999999999,494.19999999999965L513.4999999999999,495.5999999999996L522.5999999999999,495.89999999999964L525.5999999999999,495.5999999999996L525.5999999999999,495.19999999999965L541.4999999999999,506.99999999999966Z"
              className="sm_state_NGA2846"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.3825757575757575"
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
              x="199.8001984126984"
              y="205.55063492063493"
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
              transform="matrix(0.3663,0,0,0.3663,126.6194,130.2636)"
              className="sm_label_30"
            >
              <tspan
                dy="7.675634920634934"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Benue
              </tspan>
            </text>
            <text
              x="199.8001984126984"
              y="205.55063492063493"
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
              transform="matrix(0.3663,0,0,0.3663,126.6194,130.2636)"
              className="sm_label_67"
            >
              <tspan
                dy="7.675634920634934"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Benue
              </tspan>
            </text>
            <text
              x="199.8001984126984"
              y="205.55063492063493"
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
              transform="matrix(0.3663,0,0,0.3663,126.6194,130.2636)"
              className="sm_label_102"
            >
              <tspan
                dy="7.675634920634934"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Benue
              </tspan>
            </text>
            <text
              x="199.8001984126984"
              y="205.55063492063493"
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
              transform="matrix(0.3663,0,0,0.3663,126.6194,130.2636)"
              className="sm_label_139"
            >
              <tspan
                dy="7.675634920634934"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Benue
              </tspan>
            </text>
            <text
              x="199.8001984126984"
              y="205.55063492063493"
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
              transform="matrix(0.3663,0,0,0.3663,126.6194,130.2636)"
              className="sm_label_176"
            >
              <tspan
                dy="7.675634920634934"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Benue
              </tspan>
            </text>
            <text
              x="199.8001984126984"
              y="205.55063492063493"
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
              transform="matrix(0.3663,0,0,0.3663,126.6194,130.2636)"
              className="sm_label_213"
            >
              <tspan
                dy="7.675634920634934"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Benue
              </tspan>
            </text>
            <text
              x="199.8001984126984"
              y="205.55063492063493"
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
              transform="matrix(0.3663,0,0,0.3663,126.6194,130.2636)"
              className="sm_label_250"
            >
              <tspan
                dy="7.675634920634934"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Benue
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
const benueData =
      '<div class="hoverinfo">' +
      "<h6>" +
      state +
      " </h6>" +
      "Total No Of Farms - " +
      val +
      "" +
      "</div>";
Benue.defaultProps = {
  hoverColor:"red",
  hoverBackgroundColor:"grey",
  renderData:benueData,
  defaultColor:"green",
  id:"benu"
};

Benue.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Benue;
