import React, { useEffect, useRef, useState } from "react";
import { StateProps } from "../types/Nigeria";
const Nasarawa = (props: StateProps) => {
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
        {(showRenderData) && <span id={id} ref="myRef1">nasarawa State</span>}
        <svg
          height={props.height}
          version="1.1"
          width="369.2"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", overflow: "hidden", position: "relative", left: "-0.2px", top: "0.733333px" }}
          viewBox="129.9795474587141 132.21485531771162 82.50320666987334 67.04449571378308"
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
            strokeWidth="0.6101097650393426"
            style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0" }}
            fillOpacity="0"
          />
          <path
            fill="#88a4bc"
            stroke="#ffffff" id={id} ref="myRef2"
            d="M499.1,398.4L503.90000000000003,400.79999999999995L508.00000000000006,403.79999999999995L509.30000000000007,409.49999999999994L513.2,413.59999999999997L518.7,414.7L524.4000000000001,414.59999999999997L525.8000000000001,414.4L527.1,413.79999999999995L529.7,413.09999999999997L532,414.59999999999997L533.5,416.49999999999994L533,418.8999999999999L531.8,421.8999999999999L528.3,426.5999999999999L526.4,428.4999999999999L523.3,429.4999999999999L521.3,432.4999999999999L519.1999999999999,435.0999999999999L517.8,438.5999999999999L519.4,442.69999999999993L521.4,445.49999999999994L522,448.99999999999994L521.5,453.09999999999997L523.4,456.49999999999994L530.3,460.19999999999993L535.4,461.5999999999999L543.1999999999999,461.69999999999993L550.8,460.29999999999995L556.0999999999999,458.69999999999993L561.3,458.8999999999999L571,462.99999999999994L575.5,465.8999999999999L578.6,470.2999999999999L576.3000000000001,473.8999999999999L572.9000000000001,476.0999999999999L570.6000000000001,476.19999999999993L568.2000000000002,475.8999999999999L565.7000000000002,475.0999999999999L563.4000000000002,474.69999999999993L561.4000000000002,473.69999999999993L557.3000000000002,472.29999999999995L555.3000000000002,473.19999999999993L553.9000000000002,474.99999999999994L553.0000000000002,477.19999999999993L552.7000000000003,479.79999999999995L557.1000000000003,485.4L557.4000000000002,489.7L557.2000000000002,491.2L557.8000000000002,492.7L558.1000000000001,495L556.4000000000001,496.5L544.3000000000001,504.6L541.5000000000001,507L525.6000000000001,495.2L525.6000000000001,495.59999999999997L522.6000000000001,495.9L513.5000000000001,495.59999999999997L507.4000000000001,494.2L490.6000000000001,488.59999999999997L479.7000000000001,489.9L475.0000000000001,493.79999999999995L473.7000000000001,499.69999999999993L475.6000000000001,505.79999999999995L479.50000000000006,514.4L480.1000000000001,517.4L479.00000000000006,518.6999999999999L477.40000000000003,518.3L476.40000000000003,517.8L474.3,516.1999999999999L470.5,513.9999999999999L468.6,511.9999999999999L466.20000000000005,511.2999999999999L463.50000000000006,510.9999999999999L460.90000000000003,510.1999999999999L456.40000000000003,507.89999999999986L454.1,506.9999999999999L447.1,505.7999999999999L445.70000000000005,505.2999999999999L441.6,502.7999999999999L438.70000000000005,501.9999999999999L432.80000000000007,501.2999999999999L430.00000000000006,500.6999999999999L426.00000000000006,499.2999999999999L420.6000000000001,498.6999999999999L416.4000000000001,497.6999999999999L414.0000000000001,497.2999999999999L402.2000000000001,498.3999999999999L387.6000000000001,497.19999999999993L384.80000000000007,497.49999999999994L368.00000000000006,503.19999999999993L363.70000000000005,505.69999999999993L361.40000000000003,507.8999999999999L358.6,509.69999999999993L356.6,510.5999999999999L355.90000000000003,510.3999999999999L356.00000000000006,506.8999999999999L357.00000000000006,503.49999999999994L358.50000000000006,501.09999999999997L359.50000000000006,498.49999999999994L360.80000000000007,486.09999999999997L360.4000000000001,480.59999999999997L356.4000000000001,473.49999999999994L358.5000000000001,468.09999999999997L359.2000000000001,465.2L371.2000000000001,463.3L382.9000000000001,460.2L393.6000000000001,454.8L397.30000000000007,450.8L400.20000000000005,446L403.80000000000007,436L407.70000000000005,419L407.40000000000003,410.7L407.6,405.5L409.5,396.4L411,393.7L412,393.4L413,392.7L413.3,391.09999999999997L413.1,389.4L415.40000000000003,388.29999999999995L416.6,390.59999999999997L418.6,391.59999999999997L421.3,391.4L423.3,393.09999999999997L426.1,393.29999999999995L428.90000000000003,394.49999999999994L431.8,393.19999999999993L435,387.29999999999995L440.1,386.49999999999994L442.8,388.99999999999994L443.6,390.8999999999999L443.5,393.0999999999999L446.2,395.19999999999993L449.5,397.19999999999993L450.4,407.0999999999999L452.5,415.19999999999993L459.1,411.5999999999999L463.90000000000003,404.7999999999999L466.1,402.6999999999999L468.8,403.7999999999999L476.3,405.7999999999999L479.7,410.1999999999999L481.3,411.7999999999999L482.40000000000003,413.6999999999999L484.40000000000003,415.6999999999999L487.70000000000005,415.2999999999999L491.20000000000005,411.6999999999999L493.90000000000003,406.9999999999999L496.00000000000006,401.9999999999999L499.1000000000001,398.39999999999986Z"
            className="sm_state_NGA2867"
            opacity="1"
            strokeOpacity="1"
            strokeWidth="0.4223484848484848"
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
            x="162.33079365079362"
            y="167.86146825396824"
            textAnchor="middle"

            stroke="none"
            fill="#d5ddec"
            style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1" }}
            strokeWidth="0"
            fontSize="22px"
            fontWeight="bold"

            opacity="1"
            transform="matrix(0.3663,0,0,0.3663,102.8739,106.3789)"
            className="sm_label_9"
          >
            <tspan
              dy="7.642718253968241"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
            >
              nasarawa
            </tspan>
          </text>
        </svg>
      </a>
    </div>
  )
}

export default Nasarawa;
