import React, { Component } from "react";

class Anambra extends Component {
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
          <span id={this.state.id} ref={this.myRef1}>Anambra State</span>
          <svg
            height="300.0226150793651"
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{overflow: "hidden", position: "relative", left: "-0.2px", top: "0.733333px"}}
            viewBox="111.18663940914574 220.694227994228 40.974737054724365 33.2972582972583"
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
              strokeWidth="0.3030074612376894"
              style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)", "fillOpacity": "0"}}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
               stroke="#ffffff"id={this.state.id}ref={this.myRef2}
              d="M391.3,665.8L385.7,668.8L381.8,673.6999999999999L378.40000000000003,674.4999999999999L375.00000000000006,675.5999999999999L367.40000000000003,673.9999999999999L363.6,674.3999999999999L359.90000000000003,675.2999999999998L356.70000000000005,677.1999999999998L355.6,680.7999999999998L352.40000000000003,687.4999999999999L349.1,688.3999999999999L345.5,686.8999999999999L339,688.6999999999998L333.5,693.1999999999998L330.7,692.9999999999998L328.2,690.6999999999998L328.5,687.1999999999998L329.1,684.8999999999999L329.90000000000003,682.7999999999998L331.50000000000006,679.8999999999999L334.80000000000007,675.4999999999999L335.30000000000007,673.9999999999999L335.20000000000005,671.7999999999998L336.30000000000007,667.4999999999999L336.00000000000006,663.0999999999999L336.40000000000003,661.1999999999999L338.00000000000006,659.9L340.00000000000006,659.1L340.50000000000006,658.4L340.90000000000003,657.3L341.1,653.5999999999999L341,652.3999999999999L340.6,651.2999999999998L339.5,649.1999999999998L339.1,647.9999999999998L338.8,644.7999999999997L337.3,640.6999999999997L336.8,636.0999999999997L334.5,627.8999999999996L334.1,625.3999999999996L334.1,622.7999999999996L334.90000000000003,622.5999999999996L336.70000000000005,622.6999999999996L338.90000000000003,623.1999999999996L341.00000000000006,622.7999999999996L343.80000000000007,620.0999999999996L345.6000000000001,611.8999999999995L347.6000000000001,607.8999999999995L353.2000000000001,602.5999999999996L353.9000000000001,604.8999999999995L353.80000000000007,607.5999999999996L354.9000000000001,608.0999999999996L359.4000000000001,607.8999999999995L364.2000000000001,609.9999999999995L366.8000000000001,610.4999999999995L369.40000000000015,611.5999999999996L369.00000000000017,617.2999999999996L364.40000000000015,622.2999999999996L362.10000000000014,628.5999999999996L362.90000000000015,630.6999999999996L364.10000000000014,631.2999999999996L366.90000000000015,631.7999999999996L368.10000000000014,632.4999999999997L369.8000000000001,634.7999999999996L373.2000000000001,642.4999999999997L372.1000000000001,643.4999999999997L372.1000000000001,645.0999999999997L371.6000000000001,647.5999999999997L372.30000000000007,648.5999999999997L373.6000000000001,648.2999999999997L374.80000000000007,647.3999999999997L376.1000000000001,648.2999999999997L376.50000000000006,650.2999999999997L378.50000000000006,651.7999999999997L378.00000000000006,654.6999999999997L379.00000000000006,657.0999999999997L380.40000000000003,659.3999999999996L381.3,661.9999999999997L383.1,664.0999999999997L385.40000000000003,664.4999999999997L387.6,663.7999999999996L388.5,663.8999999999996L390,664.7999999999996L390.4,665.6999999999996L391.29999999999995,665.7999999999996Z"
              class="sm_state_NGA2857"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.20975691504179048"
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
              x="131.2344841269841"
              y="241.11543650793647"
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
              transform="matrix(0.3663,0,0,0.3663,83.1673,152.8021)"
              class="sm_label_19"
            >
              <tspan
                dy="7.779499007936465"
                style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"}}
              >
                Anambra
              </tspan>
            </text>
            <text
              x="131.2344841269841"
              y="241.11543650793647"
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
              transform="matrix(0.3663,0,0,0.3663,83.1673,152.8021)"
              class="sm_label_56"
            >
              <tspan
                dy="7.779499007936465"
                style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"}}
              >
                Anambra
              </tspan>
            </text>
            <text
              x="131.2344841269841"
              y="241.11543650793647"
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
              transform="matrix(0.3663,0,0,0.3663,83.1673,152.8021)"
              class="sm_label_93"
            >
              <tspan
                dy="7.779499007936465"
                style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"}}
              >
                Anambra
              </tspan>
            </text>
            <text
              x="131.2344841269841"
              y="241.11543650793647"
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
              transform="matrix(0.3663,0,0,0.3663,83.1673,152.8021)"
              class="sm_label_128"
            >
              <tspan
                dy="7.779499007936465"
                style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"}}
              >
                Anambra
              </tspan>
            </text>
            <text
              x="131.2344841269841"
              y="241.11543650793647"
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
              transform="matrix(0.3663,0,0,0.3663,83.1673,152.8021)"
              class="sm_label_165"
            >
              <tspan
                dy="7.779499007936465"
                style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"}}
              >
                Anambra
              </tspan>
            </text>
            <text
              x="131.2344841269841"
              y="241.11543650793647"
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
              transform="matrix(0.3663,0,0,0.3663,83.1673,152.8021)"
              class="sm_label_202"
            >
              <tspan
                dy="7.779499007936465"
                style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"}}
              >
                Anambra
              </tspan>
            </text>
            <text
              x="131.2344841269841"
              y="241.11543650793647"
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
              transform="matrix(0.3663,0,0,0.3663,83.1673,152.8021)"
              class="sm_label_239"
            >
              <tspan
                dy="7.779499007936465"
                style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"}}
              >
                Anambra
              </tspan>
            </text>
            <text
              x="131.2344841269841"
              y="241.11543650793647"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)","textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,83.1673,152.8021)"
              class="sm_label_276"
            >
              <tspan
                dy="7.779499007936465"
                style={{"-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"}}
              >
                Anambra
              </tspan>
            </text>
          </svg>
        </a>
      </div>
    );
  }
}

export default Anambra;
