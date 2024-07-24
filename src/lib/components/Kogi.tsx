import React, { useEffect, useRef, useState } from "react";

import { StateProps } from "../types/Nigeria";
const Kogi = (props: StateProps) => {
  const [hoverColor,] = useState(props.hoverColor)
  const [hoverBackgroundColor,] = useState(props.hoverBackgroundColor)
  const [renderData,] = useState(props.renderData)
  const [defaultColor,] = useState(props.defaultColor)
  const [showRenderData,] = useState(props.showRenderData);
  const [id,] = useState(props.id)
  const myRef1 = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let styles = document.head.appendChild(document.createElement("style"));
    styles.innerHTML += `
    #${id}:hover{fill: ${hoverColor} }
    #${id}{fill: ${defaultColor} }
    #${id}{background-color: ${hoverBackgroundColor} }
    `;
    if (showRenderData && myRef1.current) {
      myRef1.current.innerHTML = "";
      myRef1.current.innerHTML += renderData;
    }
  }, [])

  return (
    <div className="App">
      <a href="javascript:void(0)" className="tip">
        {(showRenderData) && <span id={id} ref="myRef1">Kogi State</span>}
        <svg
          height={props.height}
          version="1.1"
          width="369.2"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", overflow: "hidden", position: "relative", left: "-0.2px", top: "0.733333px" }}
          viewBox="78.3898535826444 160.083968654802 84.22584839026675 68.44436427769762"
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
            strokeWidth="0.6228486703219172"
            style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0" }}
            fillOpacity="0"
          />
          <path
            fill="#88a4bc"
            stroke="#ffffff" id={id} ref="myRef2"
            d="M347.3,465.6L352.40000000000003,465.40000000000003L355.50000000000006,465.8L359.20000000000005,465.2L358.50000000000006,468.09999999999997L356.40000000000003,473.49999999999994L360.40000000000003,480.59999999999997L360.8,486.09999999999997L359.5,498.49999999999994L358.5,501.09999999999997L357,503.49999999999994L356,506.8999999999999L355.9,510.3999999999999L356.59999999999997,510.5999999999999L358.59999999999997,509.69999999999993L361.4,507.8999999999999L363.7,505.69999999999993L368,503.19999999999993L384.8,497.49999999999994L387.6,497.19999999999993L402.20000000000005,498.3999999999999L414.00000000000006,497.2999999999999L416.40000000000003,497.6999999999999L416.00000000000006,502.4999999999999L416.20000000000005,506.89999999999986L417.20000000000005,511.1999999999999L419.70000000000005,514.7999999999998L422.1,517.2999999999998L423.8,520.2999999999998L424.1,523.2999999999998L423.90000000000003,532.9999999999999L425.20000000000005,543.0999999999999L426.20000000000005,546.3999999999999L428.90000000000003,547.7999999999998L432.1,547.3999999999999L434.20000000000005,548.8999999999999L432.50000000000006,551.7999999999998L431.50000000000006,554.1999999999998L431.30000000000007,556.8999999999999L429.80000000000007,563.6999999999998L426.4000000000001,569.3999999999999L415.30000000000007,575.4999999999999L414.00000000000006,578.7999999999998L413.70000000000005,582.5999999999998L411.50000000000006,583.2999999999998L408.80000000000007,581.9999999999999L405.30000000000007,579.0999999999999L402.1000000000001,577.4999999999999L399.30000000000007,574.9999999999999L395.30000000000007,574.6999999999999L392.20000000000005,576.3L389.6,578.4L387,579.3L385.4,580.6999999999999L380.7,586.9999999999999L376.5,590.7999999999998L369.6,595.6999999999998L366.40000000000003,599.4999999999998L362.8,602.3999999999997L360.7,601.3999999999997L359.4,599.4999999999998L358.79999999999995,598.9999999999998L358.19999999999993,596.2999999999997L355.3999999999999,598.0999999999997L353.19999999999993,602.5999999999997L347.5999999999999,607.8999999999996L345.5999999999999,611.8999999999996L343.7999999999999,620.0999999999997L340.9999999999999,622.7999999999997L338.89999999999986,623.1999999999997L336.6999999999999,622.6999999999997L334.89999999999986,622.5999999999997L334.09999999999985,622.7999999999997L333.99999999999983,620.2999999999997L332.29999999999984,615.5999999999997L331.99999999999983,611.9999999999997L332.29999999999984,601.2999999999996L331.79999999999984,596.8999999999996L331.89999999999986,595.4999999999997L332.79999999999984,592.1999999999997L334.99999999999983,587.4999999999997L335.1999999999998,586.7999999999996L335.0999999999998,583.0999999999996L335.1999999999998,582.1999999999996L335.8999999999998,580.2999999999996L336.2999999999998,575.8999999999996L337.2999999999998,572.7999999999996L337.69999999999976,571.2999999999996L337.2999999999998,568.8999999999996L335.9999999999998,565.9999999999997L335.7999999999998,565.2999999999996L333.5999999999998,564.5999999999996L332.4999999999998,563.9999999999995L332.2999999999998,562.4999999999995L331.3999999999998,561.3999999999995L330.0999999999998,560.3999999999995L327.8999999999998,560.5999999999996L324.49999999999983,561.9999999999995L320.3999999999998,562.7999999999995L319.2999999999998,561.1999999999995L318.8999999999998,559.5999999999995L317.7999999999998,558.0999999999995L315.8999999999998,553.3999999999994L313.7999999999998,551.4999999999994L312.0999999999998,551.2999999999994L308.9999999999998,552.0999999999993L306.9999999999998,551.9999999999993L304.69999999999976,549.2999999999993L301.89999999999975,547.3999999999993L300.69999999999976,546.3999999999993L299.7999999999998,544.8999999999993L298.19999999999976,545.2999999999993L296.4999999999998,546.2999999999993L292.69999999999976,547.8999999999993L288.89999999999975,547.9999999999993L286.7999999999997,545.0999999999993L287.6999999999997,541.3999999999993L287.0999999999997,539.4999999999993L284.3999999999997,538.5999999999993L284.6999999999997,536.9999999999993L283.2999999999997,536.0999999999993L281.59999999999974,536.3999999999993L280.19999999999976,535.6999999999992L274.9999999999998,529.9999999999992L270.7999999999998,523.4999999999992L271.3999999999998,520.1999999999992L268.8999999999998,519.0999999999992L262.1999999999998,520.2999999999993L258.3999999999998,519.1999999999992L251.8999999999998,515.9999999999992L250.4999999999998,514.7999999999992L249.3999999999998,514.8999999999992L246.5999999999998,512.3999999999992L245.3999999999998,508.79999999999916L245.9999999999998,505.19999999999914L248.3999999999998,502.19999999999914L250.2999999999998,501.0999999999991L250.3999999999998,499.19999999999914L249.19999999999982,498.29999999999916L247.59999999999982,498.09999999999917L244.59999999999982,498.3999999999992L241.59999999999982,499.09999999999917L239.2999999999998,500.49999999999915L237.69999999999982,499.8999999999991L237.59999999999982,496.2999999999991L239.2999999999998,493.9999999999991L238.59999999999982,488.89999999999907L233.09999999999982,485.4999999999991L229.69999999999982,482.39999999999907L228.8999999999998,480.79999999999905L227.3999999999998,479.59999999999906L226.19999999999982,478.09999999999906L223.69999999999982,473.29999999999905L224.3999999999998,470.49999999999903L233.8999999999998,458.59999999999906L237.5999999999998,455.1999999999991L240.8999999999998,456.4999999999991L245.0999999999998,460.6999999999991L253.3999999999998,463.7999999999991L261.5999999999998,465.6999999999991L273.0999999999998,466.2999999999991L282.2999999999998,468.3999999999991L285.0999999999998,467.7999999999991L286.7999999999998,465.7999999999991L287.5999999999998,463.2999999999991L288.8999999999998,454.5999999999991L292.2999999999998,442.9999999999991L295.7999999999998,438.39999999999907L299.4999999999998,437.6999999999991L300.89999999999975,437.7999999999991L301.4999999999998,438.2999999999991L304.5999999999998,440.3999999999991L306.2999999999998,440.69999999999914L307.5999999999998,441.3999999999991L308.6999999999998,442.49999999999915L310.6999999999998,445.99999999999915L310.8999999999998,448.19999999999914L312.1999999999998,450.8999999999991L312.8999999999998,451.5999999999991L313.3999999999998,453.0999999999991L313.5999999999998,455.5999999999991L314.6999999999998,459.5999999999991L316.5999999999998,463.4999999999991L317.1999999999998,463.7999999999991L325.3999999999998,470.0999999999991L326.3999999999998,471.19999999999914L329.6999999999998,476.3999999999991L332.79999999999984,479.7999999999991L333.79999999999984,480.2999999999991L333.89999999999986,480.7999999999991L335.09999999999985,481.8999999999991L335.39999999999986,482.3999999999991L336.79999999999984,480.8999999999991L337.29999999999984,478.69999999999914L338.29999999999984,476.5999999999991L339.29999999999984,475.7999999999991L340.49999999999983,476.4999999999991L340.8999999999998,475.0999999999991L340.6999999999998,473.19999999999914L341.99999999999983,471.8999999999991L343.6999999999998,471.2999999999991L346.1999999999998,468.8999999999991L347.29999999999984,465.5999999999991Z"
            className="sm_state_NGA2865"
            opacity="1"
            strokeOpacity="1"
            strokeWidth="0.43116699203034714"
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
            x="140.57436507936507"
            y="197.19968253968253"
            textAnchor="middle"

            stroke="none"
            fill="#d5ddec"
            style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1" }}
            strokeWidth="0"
            fontSize="22px"
            fontWeight="bold"

            opacity="1"
            transform="matrix(0.3663,0,0,0.3663,89.0862,124.9714)"
            className="sm_label_11"
          >
            <tspan
              dy="7.684057539682527"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
            >
              Kogi
            </tspan>
          </text>
          <text
            x="140.57436507936507"
            y="197.19968253968253"
            textAnchor="middle"

            stroke="none"
            fill="#d5ddec"
            style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1" }}
            strokeWidth="0"
            fontSize="22px"
            fontWeight="bold"

            opacity="1"
            transform="matrix(0.3663,0,0,0.3663,89.0862,124.9714)"
            className="sm_label_48"
          >
            <tspan
              dy="7.684057539682527"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
            >
              Kogi
            </tspan>
          </text>
          <text
            x="140.57436507936507"
            y="197.19968253968253"
            textAnchor="middle"

            stroke="none"
            fill="#d5ddec"
            style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1" }}
            strokeWidth="0"
            fontSize="22px"
            fontWeight="bold"

            opacity="1"
            transform="matrix(0.3663,0,0,0.3663,89.0862,124.9714)"
            className="sm_label_85"
          >
            <tspan
              dy="7.684057539682527"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
            >
              Kogi
            </tspan>
          </text>
          <text
            x="140.57436507936507"
            y="197.19968253968253"
            textAnchor="middle"

            stroke="none"
            fill="#d5ddec"
            style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1" }}
            strokeWidth="0"
            fontSize="22px"
            fontWeight="bold"

            opacity="1"
            transform="matrix(0.3663,0,0,0.3663,89.0862,124.9714)"
            className="sm_label_122"
          >
            <tspan
              dy="7.684057539682527"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
            >
              Kogi
            </tspan>
          </text>
          <text
            x="140.57436507936507"
            y="197.19968253968253"
            textAnchor="middle"

            stroke="none"
            fill="#d5ddec"
            style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1" }}
            strokeWidth="0"
            fontSize="22px"
            fontWeight="bold"

            opacity="1"
            transform="matrix(0.3663,0,0,0.3663,89.0862,124.9714)"
            className="sm_label_159"
          >
            <tspan
              dy="7.684057539682527"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
            >
              Kogi
            </tspan>
          </text>
          <text
            x="140.57436507936507"
            y="197.19968253968253"
            textAnchor="middle"

            stroke="none"
            fill="#d5ddec"
            style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1" }}
            strokeWidth="0"
            fontSize="22px"
            fontWeight="bold"

            opacity="1"
            transform="matrix(0.3663,0,0,0.3663,89.0862,124.9714)"
            className="sm_label_196"
          >
            <tspan
              dy="7.684057539682527"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
            >
              Kogi
            </tspan>
          </text>
        </svg>
      </a>
    </div>
  )
}

export default Kogi;
