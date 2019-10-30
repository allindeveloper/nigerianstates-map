import React, { Component } from "react";
import PropTypes from "prop-types";
class Oyo extends Component {
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
    let styles = document.head.appendChild(document.createElement("style"));
    styles.innerHTML += `
    #${this.state.id}:hover{fill: ${this.state.hoverColor} }
    #${this.state.id}{fill: ${this.state.defaultColor} }
    #${this.state.id}{background-color: ${this.state.hoverBackgroundColor} }
    `;
    if(showRenderData){
    this.refs.myRef1.innerHTML = "";
    this.refs.myRef1.innerHTML += this.state.renderData;
    }
  }
  render() {
    let {showRenderData} = this.state;
    return (
      <div className="App">
        <a href="javascript:void(0)" className="tip">
          {(showRenderData)&&<span id={this.state.id} ref="myRef1">Oyo State</span>}
          <svg
            height={this.props.height}
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", overflow: "hidden", position: "relative", left: "-0.2px", top: "0.733333px" }}
            viewBox="-11.628647245690185 146.54308361391693 81.49419925328512 66.2245470578804"
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
              strokeWidth="0.6026481729060711"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0" }}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
              stroke="#ffffff" id={this.state.id} ref="myRef2"
              d="M157.7,497L158.29999999999998,499.8L158.1,502.7L157,504.3L155.2,504.6L153.7,505.20000000000005L152.1,506.1L150.7,507.3L149.89999999999998,507.6L148.89999999999998,508.90000000000003L146.49999999999997,510.6L144.69999999999996,512.4L141.39999999999995,511.7L138.29999999999995,506.7L135.99999999999994,504.7L133.39999999999995,503.7L131.59999999999994,505.5L130.09999999999994,507.7L128.49999999999994,509.2L128.59999999999994,511L124.29999999999994,514.1L118.69999999999995,512.6L117.29999999999994,516.4L116.99999999999994,521.9L116.59999999999994,524.4L115.79999999999994,526.8L114.39999999999993,528.9L114.29999999999994,531.3L115.99999999999994,533.1999999999999L118.29999999999994,534.6999999999999L120.19999999999995,536.9999999999999L121.49999999999994,539.6999999999999L123.09999999999994,541.5999999999999L123.59999999999994,543.9999999999999L117.89999999999993,574.3999999999999L115.39999999999993,574.7999999999998L112.89999999999993,574.9999999999999L110.19999999999993,575.8999999999999L107.89999999999993,577.3999999999999L102.79999999999994,578.7999999999998L92.49999999999994,579.9999999999999L87.49999999999994,579.7999999999998L89.79999999999994,575.9999999999999L92.89999999999993,571.6999999999999L91.89999999999993,566.6999999999999L91.29999999999994,565.4999999999999L91.09999999999994,564.1999999999999L91.09999999999994,562.5999999999999L90.59999999999994,561.0999999999999L88.19999999999993,559.8L85.69999999999993,558L85.49999999999993,556.6L85.59999999999992,551.9L82.69999999999992,547.8L74.39999999999992,547.5999999999999L71.89999999999992,548.6999999999999L69.49999999999991,549.9999999999999L67.09999999999991,548.6999999999999L65.59999999999991,544.5999999999999L62.59999999999991,542.3L59.09999999999991,544.5999999999999L55.79999999999991,552.8999999999999L52.39999999999991,555.7999999999998L47.79999999999991,555.9999999999999L43.19999999999991,554.3999999999999L37.39999999999991,549.0999999999999L33.599999999999916,542.3L30.899999999999917,538.6999999999999L27.399999999999917,535.8L25.799999999999915,531.5L25.699999999999914,529.7L28.799999999999915,521.2L28.299999999999915,513.8000000000001L25.099999999999916,513.9000000000001L23.899999999999917,517.6000000000001L23.099999999999916,521.9000000000001L20.799999999999915,521.5000000000001L19.299999999999915,516.9000000000001L18.899999999999917,507.6000000000001L16.799999999999915,503.6000000000001L8.699999999999916,503.4000000000001L1.5999999999999162,508.5000000000001L0.9999999999999162,508.8000000000001L1.0999999999999162,507.8000000000001L2.2999999999999163,505.40000000000015L2.599999999999916,500.10000000000014L3.599999999999916,494.8000000000001L3.7999999999999163,489.8000000000001L4.099999999999916,488.2000000000001L4.699999999999916,486.8000000000001L5.599999999999916,485.40000000000015L6.199999999999916,483.8000000000001L6.2999999999999154,482.0000000000001L5.699999999999916,480.2000000000001L4.099999999999916,476.7000000000001L3.399999999999916,474.9000000000001L3.099999999999916,472.80000000000007L3.1999999999999162,471.20000000000005L3.899999999999916,467.80000000000007L3.699999999999916,464.70000000000005L4.099999999999916,463.6L5.799999999999916,461.70000000000005L6.399999999999916,460.70000000000005L7.099999999999916,457.90000000000003L6.899999999999916,455.40000000000003L11.799999999999915,451.20000000000005L14.999999999999915,451.30000000000007L21.599999999999916,449.80000000000007L23.599999999999916,448.50000000000006L25.099999999999916,446.6000000000001L29.699999999999918,442.9000000000001L31.599999999999916,442.1000000000001L32.19999999999992,441.30000000000007L33.499999999999915,440.20000000000005L35.19999999999992,439.20000000000005L38.599999999999916,436.20000000000005L40.39999999999991,435.1L42.29999999999991,434.5L43.59999999999991,434.4L44.99999999999991,434.7L45.59999999999991,435.59999999999997L46.59999999999991,436.09999999999997L47.49999999999991,437.09999999999997L48.59999999999991,436.9L58.399999999999906,432.4L62.09999999999991,429.59999999999997L65.49999999999991,427.9L69.09999999999991,425.2L86.1999999999999,416.59999999999997L88.09999999999991,415.2L89.6999999999999,413.4L90.4999999999999,407.9L92.5999999999999,403.79999999999995L96.2999999999999,401.09999999999997L100.2999999999999,400.7L104.0999999999999,402.4L106.4999999999999,405.5L108.3999999999999,409.2L111.59999999999991,412L115.29999999999991,413.9L125.09999999999991,417.4L131.1999999999999,418.79999999999995L133.49999999999991,418.79999999999995L137.5999999999999,416.29999999999995L138.99999999999991,419.49999999999994L136.1999999999999,423.59999999999997L133.3999999999999,425.2L131.3999999999999,427.3L129.9999999999999,429.5L128.19999999999987,431.3L127.09999999999988,436.40000000000003L128.19999999999987,441.50000000000006L135.59999999999988,457.90000000000003L138.4999999999999,462.40000000000003L141.3999999999999,473.70000000000005L144.3999999999999,478.1L146.2999999999999,479.8L148.4999999999999,481.2L151.4999999999999,486.09999999999997L153.8999999999999,494.09999999999997L154.8999999999999,495.79999999999995L156.2999999999999,496.09999999999997L157.6999999999999,496.99999999999994Z"
              className="sm_state_NGA2856"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.4171831976942277"
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
              x="26.701071428571428"
              y="177.60424603174602"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1" }}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              transform="matrix(0.3663,0,0,0.3663,16.9213,112.5532)"
              className="sm_label_20"
            >
              <tspan
                dy="7.666746031746015"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Oyo
            </tspan>
            </text>
            <text
              x="26.701071428571428"
              y="177.60424603174602"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1" }}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              transform="matrix(0.3663,0,0,0.3663,16.9213,112.5532)"
              className="sm_label_57"
            >
              <tspan
                dy="7.666746031746015"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Oyo
            </tspan>
            </text>
            <text
              x="26.701071428571428"
              y="177.60424603174602"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1" }}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              transform="matrix(0.3663,0,0,0.3663,16.9213,112.5532)"
              className="sm_label_94"
            >
              <tspan
                dy="7.666746031746015"
                style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
              >
                Oyo
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
const oyoData =
'<div class="hoverinfo">' +
"<h3>State</h3>"+
"<h5>PVHHTarget - " + 14000 +"</h5>"+
"<h5>ZoneName - " + 34030+"</h5>"+
"" +
"</div>";
Oyo.defaultProps = {
  hoverColor: "red",
  hoverBackgroundColor: "grey",
  renderData: oyoData,
  showRenderData:false,
  defaultColor: "green",
  id: "oy",
  height: ""
};

Oyo.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  showRenderData:PropTypes.bool,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  height: PropTypes.string
};


export default Oyo;
