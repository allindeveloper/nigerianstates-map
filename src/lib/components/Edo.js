import React, { Component } from "react";

class Edo extends Component {
  constructor(props) {
    super(props);
    this.myRef1 = React.createRef();
    this.myRef2 = React.createRef();

    this.state = {
      ...props
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
        <a href="javascript:void(0)" class="tip">
          <span id={this.state.id} ref={this.myRef1}>Edo State</span>
          <svg
            height="300.0226150793651"
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{overflow: "hidden", position: "relative", left: "-0.2px", top: "0.733333px"}}
            viewBox="62.41611636062715 196.03760822510822 69.65705299303141 56.605339105339105"
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
              strokeWidth="0.515112684104072"
              style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)", "fillOpacity": "0"}}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
               stroke="#ffffff"id={this.state.id}ref={this.myRef2}
              d="M334.1,622.8L331.5,625.9L329.2,626.6999999999999L326.2,626.1999999999999L323.3,626.3L318.2,628.4L308.09999999999997,634.5L300.2,637.8L298,639.1999999999999L294.6,643.4999999999999L292.3,643.4999999999999L290.6,640.7999999999998L288.5,638.5999999999998L285.6,638.2999999999998L283.70000000000005,640.0999999999998L282.50000000000006,642.4999999999998L282.20000000000005,645.4999999999998L284.90000000000003,650.1999999999998L285.20000000000005,652.9999999999998L286.20000000000005,656.2999999999997L288.70000000000005,660.4999999999998L293.70000000000005,665.0999999999998L295.20000000000005,665.4999999999998L296.30000000000007,666.3999999999997L296.4000000000001,669.6999999999997L295.4000000000001,672.8999999999997L291.9000000000001,676.8999999999997L287.30000000000007,680.3999999999997L283.9000000000001,684.3999999999997L279.6000000000001,687.4999999999998L271.50000000000006,689.1999999999998L270.00000000000006,689.2999999999998L268.6000000000001,688.7999999999998L268.50000000000006,687.4999999999999L268.80000000000007,686.4999999999999L268.4000000000001,685.4999999999999L267.4000000000001,684.6999999999999L267.1000000000001,683.8L268.80000000000007,680.8L269.20000000000005,677.8L266.90000000000003,676L264.1,674.5L259.5,669.5L249.8,664.2L244.70000000000002,664.4000000000001L240.10000000000002,667.3000000000001L239.60000000000002,668.4000000000001L238.8,669.1000000000001L236.4,668.3000000000002L233.20000000000002,666.0000000000002L230.10000000000002,665.8000000000002L227.60000000000002,666.2000000000002L222.20000000000002,665.9000000000002L221.4,668.0000000000002L221.8,670.7000000000003L217,674.9000000000003L215.6,675.5000000000003L213.9,674.2000000000004L213.20000000000002,669.9000000000004L214.00000000000003,664.3000000000004L210.10000000000002,659.8000000000004L204.20000000000002,657.0000000000005L204.3,654.3000000000004L202.70000000000002,651.9000000000004L200.8,650.8000000000004L199,650.5000000000005L198.8,649.4000000000004L197.10000000000002,647.3000000000004L195.10000000000002,645.6000000000004L193.40000000000003,644.6000000000004L192.90000000000003,643.8000000000004L194.10000000000002,641.5000000000005L194.50000000000003,639.1000000000005L195.70000000000002,637.3000000000005L197.50000000000003,636.7000000000005L199.60000000000002,635.6000000000005L200.8,633.5000000000005L201.4,631.0000000000005L202.8,628.9000000000004L204.70000000000002,624.5000000000005L203.20000000000002,620.1000000000005L201.8,617.8000000000005L201.10000000000002,617.5000000000006L200.70000000000002,616.8000000000005L200.70000000000002,614.2000000000005L201.00000000000003,613.0000000000005L201.30000000000004,610.3000000000004L202.30000000000004,608.5000000000005L204.80000000000004,605.3000000000004L207.80000000000004,602.4000000000004L208.90000000000003,600.2000000000004L210.20000000000005,598.4000000000004L210.20000000000005,596.2000000000004L211.20000000000005,595.1000000000004L212.60000000000005,594.5000000000003L235.90000000000006,594.5000000000003L239.70000000000007,597.5000000000003L238.30000000000007,599.6000000000004L237.50000000000006,602.0000000000003L239.70000000000005,607.5000000000003L241.50000000000006,607.2000000000004L245.60000000000005,603.9000000000004L248.00000000000006,604.1000000000005L249.10000000000005,605.1000000000005L251.70000000000005,605.7000000000005L253.10000000000005,605.2000000000005L254.00000000000006,604.6000000000005L255.20000000000005,602.6000000000005L255.60000000000005,601.4000000000004L256.6,596.1000000000005L257.40000000000003,594.0000000000005L259.3,593.5000000000005L259.2,592.2000000000005L260.3,590.7000000000005L260,589.7000000000005L258.8,587.2000000000005L259,584.2000000000005L260.1,581.2000000000005L262.3,578.9000000000005L263.40000000000003,577.4000000000005L263.90000000000003,575.4000000000005L267.70000000000005,566.6000000000006L267.50000000000006,565.8000000000006L267.6000000000001,564.7000000000006L269.4000000000001,562.6000000000006L271.4000000000001,560.8000000000006L272.80000000000007,559.9000000000007L273.9000000000001,558.7000000000006L274.7000000000001,556.0000000000006L274.4000000000001,554.1000000000006L273.9000000000001,552.9000000000005L273.6000000000001,550.3000000000005L274.50000000000006,548.5000000000006L274.1000000000001,547.0000000000006L271.6000000000001,545.4000000000005L272.4000000000001,542.5000000000006L273.5000000000001,541.5000000000006L275.8000000000001,541.0000000000006L276.8000000000001,540.5000000000006L278.7000000000001,538.2000000000006L280.2000000000001,535.7000000000006L281.6000000000001,536.4000000000007L283.30000000000007,536.1000000000007L284.70000000000005,537.0000000000007L284.40000000000003,538.6000000000007L287.1,539.5000000000007L287.70000000000005,541.4000000000007L286.80000000000007,545.1000000000007L288.9000000000001,548.0000000000007L292.7000000000001,547.9000000000007L296.5000000000001,546.3000000000006L298.2000000000001,545.3000000000006L299.8000000000001,544.9000000000007L300.7000000000001,546.4000000000007L301.9000000000001,547.4000000000007L304.7000000000001,549.3000000000006L307.0000000000001,552.0000000000007L309.0000000000001,552.1000000000007L312.10000000000014,551.3000000000008L313.8000000000001,551.5000000000008L315.90000000000015,553.4000000000008L317.8000000000001,558.1000000000008L318.90000000000015,559.6000000000008L319.3000000000001,561.2000000000008L320.40000000000015,562.8000000000009L324.50000000000017,562.0000000000009L327.90000000000015,560.6000000000009L330.10000000000014,560.4000000000009L331.40000000000015,561.4000000000009L332.3000000000001,562.5000000000009L332.5000000000001,564.0000000000009L333.60000000000014,564.6000000000009L335.8000000000001,565.300000000001L336.0000000000001,566.000000000001L337.3000000000001,568.900000000001L337.7000000000001,571.300000000001L337.3000000000001,572.800000000001L336.3000000000001,575.900000000001L335.90000000000015,580.300000000001L335.20000000000016,582.200000000001L335.10000000000014,583.1000000000009L335.20000000000016,586.800000000001L335.00000000000017,587.500000000001L332.8000000000002,592.2000000000011L331.9000000000002,595.500000000001L331.8000000000002,596.900000000001L332.3000000000002,601.300000000001L332.00000000000017,612.000000000001L332.3000000000002,615.600000000001L334.00000000000017,620.3000000000011L334.1000000000002,622.8000000000011Z"
              class="sm_state_NGA2861"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.3565867555710438"
              strokeLinejoin="round"
              transform="matrix(0.3663,0,0,0.3663,0,0)"
              style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1"}}
              fillOpacity="1"
            />
            <desc style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"}}>
             Created by Uchendu Precious. @allindeveloper
            </desc>
            <defs style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"}} />
            <text
              x="108.15948412698413"
              y="219.61539682539683"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,68.5439,139.1769)"
              class="sm_label_15"
            >
              <tspan
                dy="7.654459325396829"
                style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"}}
              >
                Edo
              </tspan>
            </text>
            <text
              x="108.15948412698413"
              y="219.61539682539683"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,68.5439,139.1769)"
              class="sm_label_52"
            >
              <tspan
                dy="7.654459325396829"
                style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"}}
              >
                Edo
              </tspan>
            </text>
            <text
              x="108.15948412698413"
              y="219.61539682539683"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,68.5439,139.1769)"
              class="sm_label_89"
            >
              <tspan
                dy="7.654459325396829"
                style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"}}
              >
                Edo
              </tspan>
            </text>
            <text
              x="108.15948412698413"
              y="219.61539682539683"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,68.5439,139.1769)"
              class="sm_label_126"
            >
              <tspan
                dy="7.654459325396829"
                style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"}}
              >
                Edo
              </tspan>
            </text>
            <text
              x="108.15948412698413"
              y="219.61539682539683"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,68.5439,139.1769)"
              class="sm_label_163"
            >
              <tspan
                dy="7.654459325396829"
                style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"}}
              >
                Edo
              </tspan>
            </text>
            <text
              x="108.15948412698413"
              y="219.61539682539683"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,68.5439,139.1769)"
              class="sm_label_200"
            >
              <tspan
                dy="7.654459325396829"
                style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"}}
              >
                Edo
              </tspan>
            </text>
            <text
              x="108.15948412698413"
              y="219.61539682539683"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,68.5439,139.1769)"
              class="sm_label_237"
            >
              <tspan
                dy="7.654459325396829"
                style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"}}
              >
                Edo
              </tspan>
            </text>
            <text
              x="108.15948412698413"
              y="219.61539682539683"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,68.5439,139.1769)"
              class="sm_label_274"
            >
              <tspan
                dy="7.654459325396829"
                style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"}}
              >
                Edo
              </tspan>
            </text>
            <text
              x="108.15948412698413"
              y="219.61539682539683"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,68.5439,139.1769)"
              class="sm_label_311"
            >
              <tspan
                dy="7.654459325396829"
                style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"}}
              >
                Edo
              </tspan>
            </text>
            <text
              x="108.15948412698413"
              y="219.61539682539683"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,68.5439,139.1769)"
              class="sm_label_348"
            >
              <tspan
                dy="7.654459325396829"
                style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"}}
              >
                Edo
              </tspan>
            </text>
          </svg>
        </a>
      </div>
    );
  }
}

export default Edo;
