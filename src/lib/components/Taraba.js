import React, { Component } from "react";
import PropTypes from "prop-types"; 
class Taraba extends Component {
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
          <span id={this.state.id} ref="myRef1">Taraba State</span>
          <svg
            height="300.0226150793651"
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display:"block", overflow: "hidden", position: "relative", left: "-0.2px", top: "0.733333px"}}
            viewBox="179.5383250826216 133.19643257976588 121.10311173951865 98.41189674523008"
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
              strokeWidth="0.8955553854358375"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0"}}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
               stroke="#ffffff"id={this.state.id}ref="myRef2"
              d="M699.4,366.2L708.3,366.9L737.5,365.7L745.2,380.2L747.2,382.09999999999997L750,382.59999999999997L752.8,383.49999999999994L757.5999999999999,387.79999999999995L760.3999999999999,393.9L761.9999999999999,396.4L762.7999999999998,399L762.3999999999999,401.9L762.3999999999999,404.9L765.2999999999998,409.79999999999995L770.5999999999998,412.29999999999995L773.9999999999998,416.59999999999997L774.4999999999998,422.49999999999994L766.1999999999998,439.8999999999999L765.5999999999998,445.69999999999993L765.9999999999998,448.79999999999995L765.1999999999998,451.49999999999994L759.5999999999998,456.09999999999997L738.0999999999998,481.99999999999994L732.6999999999998,486.8999999999999L728.0999999999998,492.2999999999999L727.3999999999997,494.8999999999999L730.9999999999998,503.8999999999999L734.2999999999997,509.8999999999999L736.5999999999997,512.1999999999999L739.2999999999997,512.4999999999999L741.4999999999998,510.5999999999999L743.2999999999997,508.2999999999999L744.9999999999998,505.7999999999999L747.5999999999998,504.5999999999999L750.5999999999998,505.8999999999999L752.5999999999998,508.3999999999999L760.6999999999998,516.0999999999999L764.6999999999998,525.6999999999999L764.6999999999998,531.4L765.6999999999998,536.9L767.7999999999998,541.4L768.8999999999999,545.6999999999999L763.9999999999999,550.4999999999999L758.7999999999998,558.1999999999999L757.1999999999998,559.8L755.6999999999998,561L754.9999999999998,561.7L755.4999999999998,562.2L757.4999999999998,562.6L758.5999999999998,563.6L762.7999999999998,569.6L765.9999999999999,573.1L766.9999999999999,575.2L766.2999999999998,577.1L765.4999999999999,577.5L763.9999999999999,576.9L763.0999999999999,576.8L761.9999999999999,577.1999999999999L760.9999999999999,577.8L757.4999999999999,581L756.1999999999999,581.8L755.9,583.3L755.4,584L752.6,584.5L751.7,584.4L751,584.9L750.4,586.4L745.6,589.5L740.5,594.2L739,596.3000000000001L738.5,598.6L739,599.8000000000001L740.9,601.9000000000001L741.3,603.4000000000001L741.0999999999999,605.7L740.4999999999999,607.9000000000001L738.0999999999999,613.5000000000001L736.0999999999999,616.3000000000001L733.8999999999999,617.6L730.5999999999999,617.9L728.3999999999999,619.6999999999999L727.1999999999998,622.4999999999999L726.5999999999998,625.9999999999999L726.0999999999998,627.8999999999999L724.4999999999998,629.3999999999999L722.3999999999997,630.4999999999999L720.2999999999997,630.9999999999999L719.3999999999997,630.8999999999999L716.6999999999997,630.3999999999999L715.4999999999997,631.3999999999999L714.3999999999996,631.4999999999999L712.9999999999997,630.6999999999999L705.3999999999996,631.4999999999999L703.1999999999996,631.1999999999999L701.7999999999996,629.9999999999999L700.1999999999996,625.9999999999999L698.7999999999996,619.4999999999999L698.4999999999997,616.1999999999999L698.6999999999997,612.9L698.3999999999997,608.9L696.7999999999997,605.5L693.9999999999998,603.3L686.1999999999998,601.9L683.4999999999998,599.1999999999999L681.8999999999997,595.4999999999999L681.0999999999998,591.6999999999999L679.7999999999998,588.4L676.9999999999999,586.5L670.1999999999999,583.9L664.4,580.8L662.1999999999999,580.0999999999999L660.6999999999999,578.8999999999999L660.1999999999999,574.7999999999998L658.6999999999999,572.7999999999998L657.4999999999999,575.1999999999998L656.4999999999999,578.1999999999998L655.7999999999998,581.3999999999999L655.2999999999998,587.7999999999998L653.8999999999999,588.5999999999998L652.1999999999998,591.0999999999998L651.8999999999999,592.3999999999997L651.7999999999998,594.2999999999997L630.3999999999999,594.5999999999997L628.0999999999999,593.8999999999996L626.3999999999999,592.5999999999997L625.4999999999999,590.8999999999996L624.2999999999998,584.7999999999996L623.5999999999998,583.3999999999996L622.3999999999997,583.0999999999997L620.4999999999998,584.2999999999997L600.0999999999998,601.5999999999997L598.1999999999998,602.3999999999996L596.5999999999998,601.8999999999996L594.8999999999997,601.0999999999997L592.9999999999998,600.9999999999997L591.3999999999997,602.7999999999996L584.9999999999998,623.0999999999996L583.9999999999998,623.8999999999995L580.9999999999998,623.8999999999995L582.9999999999998,615.7999999999995L583.9999999999998,601.6999999999995L583.6999999999998,596.3999999999995L586.3999999999999,581.7999999999995L588.8999999999999,576.8999999999995L592.2999999999998,572.6999999999995L596.4999999999999,569.6999999999995L600.0999999999999,566.2999999999995L600.6999999999999,556.3999999999995L603.9999999999999,546.2999999999995L600.2999999999998,536.5999999999995L591.7999999999998,528.9999999999994L584.2999999999998,519.5999999999995L574.8999999999999,513.0999999999995L562.1999999999998,511.59999999999945L549.3999999999999,511.99999999999943L546.0999999999999,512.5999999999995L540.4999999999999,515.1999999999995L537.8999999999999,515.6999999999995L536.8999999999999,513.8999999999995L541.4999999999999,506.99999999999955L544.2999999999998,504.59999999999957L556.3999999999999,496.49999999999955L558.0999999999999,494.99999999999955L557.8,492.69999999999953L557.1999999999999,491.19999999999953L557.4,489.69999999999953L557.1,485.3999999999995L552.7,479.7999999999995L553,477.1999999999995L553.9,474.9999999999995L555.3,473.1999999999995L557.3,472.2999999999995L561.4,473.6999999999995L563.4,474.6999999999995L565.6999999999999,475.09999999999945L568.1999999999999,475.89999999999947L570.5999999999999,476.1999999999995L572.8999999999999,476.09999999999945L576.2999999999998,473.89999999999947L578.5999999999998,470.29999999999944L583.0999999999998,470.59999999999945L589.3999999999997,470.09999999999945L595.3999999999997,468.39999999999947L600.7999999999997,464.29999999999944L605.5999999999997,459.39999999999947L611.0999999999997,455.39999999999947L616.9999999999997,452.1999999999995L619.2999999999996,450.09999999999945L623.6999999999996,444.79999999999944L625.5999999999996,441.79999999999944L629.5999999999996,436.99999999999943L648.7999999999996,432.29999999999944L661.9999999999997,425.6999999999994L664.8999999999996,420.29999999999944L664.7999999999996,417.09999999999945L663.6999999999996,411.89999999999947L664.2999999999996,409.1999999999995L664.2999999999996,406.7999999999995L661.8999999999996,398.7999999999995L660.4999999999997,396.4999999999995L659.7999999999996,393.9999999999995L658.8999999999996,387.6999999999995L659.4999999999997,382.2999999999995L658.9999999999997,377.7999999999995L657.1999999999997,373.7999999999995L661.5999999999997,370.8999999999995L672.1999999999997,370.5999999999995L682.3999999999997,365.69999999999953L687.8999999999997,364.79999999999956L693.6999999999997,366.19999999999953L699.3999999999997,366.19999999999953Z"
              className="sm_state_NGA2848"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.6199482155679584"
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
              x="241.84797619047615"
              y="184.92964285714282"
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
              transform="matrix(0.3663,0,0,0.3663,153.2664,117.1955)"
              className="sm_label_28"
            >
              <tspan
                dy="7.703080357142824"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Taraba
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
const tarabaData =
      '<div class="hoverinfo">' +
      "<h6>" +
      state +
      " </h6>" +
      "Total No Of Farms - " +
      val +
      "" +
      "</div>";
Taraba.defaultProps = {
  hoverColor:"red",
  hoverBackgroundColor:"grey",
  renderData:tarabaData,
  defaultColor:"green",
  id:"ab"
};

Taraba.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Taraba;
