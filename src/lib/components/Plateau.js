import React, { Component } from "react";
import PropTypes from "prop-types"; 
class Plateau extends Component {
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
          <span id={this.state.id} ref={this.myRef1}>Plateau State</span>
          <svg
            height="300.0226150793651"
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{overflow: "hidden", position: "relative", left: "-0.2px", top: "0.733333px"}}
            viewBox="173.2332429081437 110.30086780503447 76.94145069164905 62.52485169151834"
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
              strokeWidth="0.5689806772129944"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0"}}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
               stroke="#ffffff"id={this.state.id}ref={this.myRef2}
              d="M657.2,373.8L659,377.8L659.5,382.3L658.9,387.7L659.8,394L660.5,396.5L661.9,398.8L664.3,406.8L664.3,409.2L663.6999999999999,411.9L664.8,417.09999999999997L664.9,420.29999999999995L662,425.69999999999993L648.8,432.29999999999995L629.5999999999999,436.99999999999994L625.5999999999999,441.79999999999995L623.6999999999999,444.79999999999995L619.3,450.09999999999997L617,452.2L611.1,455.4L605.6,459.4L600.8000000000001,464.29999999999995L595.4000000000001,468.4L589.4000000000001,470.09999999999997L583.1000000000001,470.59999999999997L578.6000000000001,470.29999999999995L575.5000000000001,465.9L571.0000000000001,463L561.3000000000001,458.9L556.1,458.7L550.8000000000001,460.3L543.2,461.7L535.4000000000001,461.59999999999997L530.3000000000001,460.2L523.4000000000001,456.5L521.5000000000001,453.1L522.0000000000001,449L521.4000000000001,445.5L519.4000000000001,442.7L517.8000000000001,438.59999999999997L519.2,435.09999999999997L521.3000000000001,432.49999999999994L523.3000000000001,429.49999999999994L526.4000000000001,428.49999999999994L528.3000000000001,426.59999999999997L531.8000000000001,421.9L533.0000000000001,418.9L533.5000000000001,416.5L532.0000000000001,414.6L529.7000000000002,413.1L527.1000000000001,413.8L525.8000000000002,414.40000000000003L524.4000000000002,414.6L518.7000000000002,414.70000000000005L513.2000000000002,413.6L509.3000000000002,409.5L508.00000000000017,403.8L503.90000000000015,400.8L499.10000000000014,398.40000000000003L500.8000000000001,393.6L501.2000000000001,388.40000000000003L498.0000000000001,383.90000000000003L494.10000000000014,379.8L490.70000000000016,374.8L490.70000000000016,362.8L493.10000000000014,361L493.3000000000001,359.5L493.3000000000001,358.1L496.7000000000001,353.3L496.0000000000001,350.5L496.5000000000001,347.2L496.5000000000001,340.7L499.8000000000001,329.59999999999997L497.60000000000014,323.2L499.10000000000014,316.9L503.3000000000001,312.2L506.3000000000001,310.8L508.3000000000001,308.1L508.7000000000001,305.3L509.5000000000001,302.90000000000003L514.3000000000001,302.00000000000006L519.2,303.30000000000007L522.1,307.00000000000006L523.8000000000001,311.6000000000001L524.2,315.80000000000007L524.1,329.30000000000007L527.2,331.4000000000001L536.8000000000001,329.7000000000001L542.1,331.6000000000001L543.9,337.4000000000001L544.3,344.30000000000007L543.5999999999999,346.80000000000007L542.1999999999999,349.1000000000001L541.0999999999999,351.50000000000006L540.6999999999999,354.1000000000001L542.6999999999999,356.2000000000001L545.6999999999999,357.1000000000001L549.4,361.50000000000006L552.3,366.50000000000006L557.4,368.20000000000005L569.1999999999999,370.40000000000003L582.3,369.70000000000005L585.5999999999999,369.00000000000006L588.4999999999999,367.80000000000007L590.9999999999999,362.6000000000001L593.0999999999999,360.80000000000007L598.5999999999999,358.70000000000005L599.3999999999999,355.90000000000003L598.2999999999998,352.90000000000003L594.9999999999999,348.3L596.0999999999999,346.40000000000003L597.3,345.6L599.9,345L640.6999999999999,364L654.5999999999999,372.7L657.1999999999999,373.8Z"
              className="sm_state_NGA2866"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.3938768738006953"
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
              x="213.75507936507935"
              y="152.84440476190477"
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
              transform="matrix(0.3663,0,0,0.3663,135.463,96.8621)"
              className="sm_label_10"
            >
              <tspan
                dy="7.680342261904769"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Plateau
              </tspan>
            </text>
            <text
              x="213.75507936507935"
              y="152.84440476190477"
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
              transform="matrix(0.3663,0,0,0.3663,135.463,96.8621)"
              className="sm_label_47"
            >
              <tspan
                dy="7.680342261904769"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Plateau
              </tspan>
            </text>
            <text
              x="213.75507936507935"
              y="152.84440476190477"
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
              transform="matrix(0.3663,0,0,0.3663,135.463,96.8621)"
              className="sm_label_84"
            >
              <tspan
                dy="7.680342261904769"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Plateau
              </tspan>
            </text>
            <text
              x="213.75507936507935"
              y="152.84440476190477"
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
              transform="matrix(0.3663,0,0,0.3663,135.463,96.8621)"
              className="sm_label_121"
            >
              <tspan
                dy="7.680342261904769"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Plateau
              </tspan>
            </text>
            <text
              x="213.75507936507935"
              y="152.84440476190477"
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
              transform="matrix(0.3663,0,0,0.3663,135.463,96.8621)"
              className="sm_label_158"
            >
              <tspan
                dy="7.680342261904769"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Plateau
              </tspan>
            </text>
            <text
              x="213.75507936507935"
              y="152.84440476190477"
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
              transform="matrix(0.3663,0,0,0.3663,135.463,96.8621)"
              className="sm_label_195"
            >
              <tspan
                dy="7.680342261904769"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Plateau
              </tspan>
            </text>
            <text
              x="213.75507936507935"
              y="152.84440476190477"
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
              transform="matrix(0.3663,0,0,0.3663,135.463,96.8621)"
              className="sm_label_232"
            >
              <tspan
                dy="7.680342261904769"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Plateau
              </tspan>
            </text>
            <text
              x="213.75507936507935"
              y="152.84440476190477"
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
              transform="matrix(0.3663,0,0,0.3663,135.463,96.8621)"
              className="sm_label_269"
            >
              <tspan
                dy="7.680342261904769"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Plateau
              </tspan>
            </text>
            <text
              x="213.75507936507935"
              y="152.84440476190477"
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
              transform="matrix(0.3663,0,0,0.3663,135.463,96.8621)"
              className="sm_label_306"
            >
              <tspan
                dy="7.680342261904769"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Plateau
              </tspan>
            </text>
            <text
              x="213.75507936507935"
              y="152.84440476190477"
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
              transform="matrix(0.3663,0,0,0.3663,135.463,96.8621)"
              className="sm_label_343"
            >
              <tspan
                dy="7.680342261904769"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Plateau
              </tspan>
            </text>
            <text
              x="213.75507936507935"
              y="152.84440476190477"
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
              transform="matrix(0.3663,0,0,0.3663,135.463,96.8621)"
              className="sm_label_380"
            >
              <tspan
                dy="7.680342261904769"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Plateau
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
const plateauData =
      '<div class="hoverinfo">' +
      "<h6>" +
      state +
      " </h6>" +
      "Total No Of Farms - " +
      val +
      "" +
      "</div>";
Plateau.defaultProps = {
  hoverColor:"red",
  hoverBackgroundColor:"grey",
  renderData:plateauData,
  defaultColor:"green",
  id:"ab"
};

Plateau.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Plateau;
