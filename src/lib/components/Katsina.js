import React, { Component } from "react";
import PropTypes from "prop-types"; 
class Katsina extends Component {
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
          <span id={this.state.id} ref="myRef1">Katsina State</span>
           <svg
            height={this.props.height}
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{overflow: "hidden", position: "relative", left: "-0.2px", top:" 0.133333px"}}
            viewBox="111.79428333309463 8.345964832420023 96.06299465052042 78.06357223023889"
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
              strokeWidth="0.7103841591239162"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0"}}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
              id="kd"
             
               stroke="#ffffff"id={this.state.id}ref="myRef2"
              d="M525.5,89.7L525,91.8L523.6,92.5L522.6,93.4L521.8000000000001,94.60000000000001L521.2,96.2L520.3000000000001,97.7L516.6,100.60000000000001L512.6,102.80000000000001L508.1,103.80000000000001L504.8,103.50000000000001L503.6,102.40000000000002L502.6,101.10000000000002L499.90000000000003,102.60000000000002L498.00000000000006,102.70000000000002L496.00000000000006,101.90000000000002L494.00000000000006,100.70000000000002L491.80000000000007,96.80000000000001L490.30000000000007,92.4L488.70000000000005,90.9L475.90000000000003,91.5L470.50000000000006,90.8L464.50000000000006,90.89999999999999L455.6000000000001,92.3L454.50000000000006,94.5L453.80000000000007,100.2L453.9000000000001,105.7L458.30000000000007,108.4L464.9000000000001,108.60000000000001L466.7000000000001,110.50000000000001L467.7000000000001,113.10000000000001L463.6000000000001,113.10000000000001L459.80000000000007,114.30000000000001L457.80000000000007,117.9L455.00000000000006,126.10000000000001L452.00000000000006,129L437.40000000000003,134.5L431.00000000000006,139L430.00000000000006,142.8L430.80000000000007,151.10000000000002L430.30000000000007,168.90000000000003L432.1000000000001,174.40000000000003L432.50000000000006,177.10000000000002L432.40000000000003,178.70000000000002L431.90000000000003,180.3L432.20000000000005,181.60000000000002L433.00000000000006,182.70000000000002L435.1000000000001,188.00000000000003L435.4000000000001,191.30000000000004L431.6000000000001,192.20000000000005L427.00000000000006,194.60000000000005L423.1000000000001,195.60000000000005L420.50000000000006,198.70000000000005L419.20000000000005,202.80000000000004L418.6,206.90000000000003L419.90000000000003,211.20000000000005L425.6,216.10000000000005L422.70000000000005,220.50000000000006L416.00000000000006,223.30000000000007L413.6000000000001,222.20000000000007L412.00000000000006,220.00000000000009L409.1000000000001,217.9000000000001L405.9000000000001,216.50000000000009L399.80000000000007,215.3000000000001L394.6000000000001,218.4000000000001L393.2000000000001,221.10000000000008L392.8000000000001,224.10000000000008L390.5000000000001,225.4000000000001L387.5000000000001,224.3000000000001L381.2000000000001,224.2000000000001L379.8000000000001,228.8000000000001L381.2000000000001,230.9000000000001L381.3000000000001,233.4000000000001L379.3000000000001,235.60000000000008L376.5000000000001,237.10000000000008L373.8000000000001,236.70000000000007L369.40000000000015,232.20000000000007L366.50000000000017,230.40000000000006L360.40000000000015,228.80000000000007L360.3000000000001,226.40000000000006L362.60000000000014,223.90000000000006L363.90000000000015,222.90000000000006L364.20000000000016,221.30000000000007L363.20000000000016,219.30000000000007L361.40000000000015,218.00000000000006L357.00000000000017,217.90000000000006L355.00000000000017,217.40000000000006L351.20000000000016,215.50000000000006L352.50000000000017,211.70000000000005L353.3000000000002,207.80000000000004L353.00000000000017,204.80000000000004L353.50000000000017,201.90000000000003L350.70000000000016,196.70000000000005L353.8000000000002,181.50000000000006L358.6000000000002,179.20000000000005L364.8000000000002,179.20000000000005L366.50000000000017,180.40000000000003L367.90000000000015,179.70000000000005L371.40000000000015,177.00000000000006L373.40000000000015,175.00000000000006L373.8000000000001,172.20000000000005L375.3000000000001,170.80000000000004L377.90000000000015,171.50000000000003L380.40000000000015,170.50000000000003L379.50000000000017,165.50000000000003L374.90000000000015,161.70000000000002L372.10000000000014,160.4L370.40000000000015,158.3L371.8000000000001,155.70000000000002L373.60000000000014,150.70000000000002L374.10000000000014,148.50000000000003L373.60000000000014,145.90000000000003L372.90000000000015,143.50000000000003L372.40000000000015,139.10000000000002L371.20000000000016,134.8L368.90000000000015,130.3L369.3000000000001,125.20000000000002L367.5000000000001,120.90000000000002L364.9000000000001,85.70000000000002L366.30000000000007,76.80000000000001L368.50000000000006,75.80000000000001L372.50000000000006,72.30000000000001L377.50000000000006,66.30000000000001L379.40000000000003,66.00000000000001L388.00000000000006,67.60000000000001L391.00000000000006,67.60000000000001L393.6000000000001,66.7L423.9000000000001,48.400000000000006L426.7000000000001,47.10000000000001L429.6000000000001,46.80000000000001L450.7000000000001,49.80000000000001L452.9000000000001,50.70000000000001L453.9000000000001,51.50000000000001L455.9000000000001,53.300000000000004L458.1000000000001,54.800000000000004L461.00000000000006,57.00000000000001L462.20000000000005,57.60000000000001L464.6,58.20000000000001L465.8,58.80000000000001L466.90000000000003,59.80000000000001L469.00000000000006,62.30000000000001L477.30000000000007,69.9L479.1000000000001,70.60000000000001L481.30000000000007,69.60000000000001L484.30000000000007,69.4L486.6000000000001,69.9L488.6000000000001,70.80000000000001L492.2000000000001,73.60000000000001L493.8000000000001,75.4L496.2000000000001,79.4L497.7000000000001,81.10000000000001L500.7000000000001,82.9L522.6000000000001,89.4L525.5000000000001,89.7Z"
              className=" sm_state_NGA2864"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.4917634341535309"
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
              x="149.69448412698412"
              y="38.38507936507936"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font:" bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,94.8659,24.3258)"
              className="sm_label_49"
            >
              <tspan
                dy="7.596016865079363"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Katsina
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
const katsinaData =
      '<div class="hoverinfo">' +
      "<h6>" +
      state +
      " </h6>" +
      "Total No Of Farms - " +
      val +
      "" +
      "</div>";
Katsina.defaultProps = {
  hoverColor:"red",
  hoverBackgroundColor:"grey",
  renderData:katsinaData,
  defaultColor:"green",
  id:"kats",
    height: ""
};

Katsina.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
    height: PropTypes.string
};


export default Katsina;
