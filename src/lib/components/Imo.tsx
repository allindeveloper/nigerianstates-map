import React, { useEffect, useRef, useState } from "react";

import { StateProps } from "../types/Nigeria";
const Imo = (props: StateProps) => {
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
        {(showRenderData) && <span id={id} ref="myRef1">Imo State</span>}
        <svg
          height={props.height}
          version="1.1"
          width="369.2"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", overflow: "hidden", position: "relative", left: "-0.2px", top: "0.733333px" }}
          viewBox="118.65929691924572 246.75118245951577 28.22704108214345 22.93811127144461"
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
            strokeWidth="0.20873847329707496"
            style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0" }}
            fillOpacity="0"
          />
          <path
            fill="#88a4bc"
            stroke="#ffffff" id={id} ref="myRef2"
            d="M381.9,734.9L379.5,735.6L376.8,736L372.40000000000003,734.7L362.00000000000006,735.7L350.20000000000005,734.9000000000001L341.50000000000006,729.2L340.90000000000003,728.1L338.90000000000003,726.6L338.1,725.7L338,722.8000000000001L339.2,720.1L339.9,714.2L336.5,710.6L333.4,711.3000000000001L330.5,711.1L329.9,709.2L332.5,696.1L333.5,693.2L339,688.7L345.5,686.9000000000001L349.1,688.4000000000001L352.40000000000003,687.5000000000001L355.6,680.8000000000001L356.70000000000005,677.2L359.90000000000003,675.3000000000001L363.6,674.4000000000001L367.40000000000003,674.0000000000001L375.00000000000006,675.6000000000001L378.40000000000003,674.5000000000001L381.8,673.7000000000002L383.6,675.3000000000002L387.8,677.4000000000002L390.1,677.9000000000002L393.3,680.8000000000002L394.40000000000003,690.2000000000002L393.50000000000006,694.0000000000001L392.80000000000007,695.2000000000002L393.70000000000005,696.8000000000002L394.30000000000007,698.9000000000002L394.30000000000007,701.2000000000002L394.70000000000005,703.5000000000001L394.70000000000005,705.8000000000001L394.1,707.8000000000001L392.90000000000003,709.5000000000001L392.20000000000005,711.7000000000002L391.20000000000005,713.8000000000002L388.00000000000006,717.3000000000002L381.90000000000003,734.9000000000002Z"
            className="sm_state_NGA2843"
            opacity="1"
            strokeOpacity="1"
            strokeWidth="0.14449920813990014"
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
            x="133.50535714285712"
            y="259.75857142857143"
            textAnchor="middle"

            stroke="none"
            fill="#d5ddec"
            style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1" }}
            strokeWidth="0"
            fontSize="22px"
            fontWeight="bold"

            opacity="1"
            transform="matrix(0.3663,0,0,0.3663,84.6064,164.6168)"
            className="sm_label_33"
          >
            <tspan
              dy="7.625758928571429"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
            >
              Imo
            </tspan>
          </text>
          <text
            x="133.50535714285712"
            y="259.75857142857143"
            textAnchor="middle"

            stroke="none"
            fill="#d5ddec"
            style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1" }}
            strokeWidth="0"
            fontSize="22px"
            fontWeight="bold"

            opacity="1"
            transform="matrix(0.3663,0,0,0.3663,84.6064,164.6168)"
            className="sm_label_70"
          >
            <tspan
              dy="7.625758928571429"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
            >
              Imo
            </tspan>
          </text>
          <text
            x="133.50535714285712"
            y="259.75857142857143"
            textAnchor="middle"

            stroke="none"
            fill="#d5ddec"
            style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1" }}
            strokeWidth="0"
            fontSize="22px"
            fontWeight="bold"

            opacity="1"
            transform="matrix(0.3663,0,0,0.3663,84.6064,164.6168)"
            className="sm_label_107"
          >
            <tspan
              dy="7.625758928571429"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
            >
              Imo
            </tspan>
          </text>
          <text
            x="133.50535714285712"
            y="259.75857142857143"
            textAnchor="middle"

            stroke="none"
            fill="#d5ddec"
            style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1" }}
            strokeWidth="0"
            fontSize="22px"
            fontWeight="bold"

            opacity="1"
            transform="matrix(0.3663,0,0,0.3663,84.6064,164.6168)"
            className="sm_label_144"
          >
            <tspan
              dy="7.625758928571429"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
            >
              Imo
            </tspan>
          </text>
          <text
            x="133.50535714285712"
            y="259.75857142857143"
            textAnchor="middle"

            stroke="none"
            fill="#d5ddec"
            style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1" }}
            strokeWidth="0"
            fontSize="22px"
            fontWeight="bold"

            opacity="1"
            transform="matrix(0.3663,0,0,0.3663,84.6064,164.6168)"
            className="sm_label_181"
          >
            <tspan
              dy="7.625758928571429"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
            >
              Imo
            </tspan>
          </text>
          <text
            x="133.50535714285712"
            y="259.75857142857143"
            textAnchor="middle"

            stroke="none"
            fill="#d5ddec"
            style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1" }}
            strokeWidth="0"
            fontSize="22px"
            fontWeight="bold"

            opacity="1"
            transform="matrix(0.3663,0,0,0.3663,84.6064,164.6168)"
            className="sm_label_218"
          >
            <tspan
              dy="7.625758928571429"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
            >
              Imo
            </tspan>
          </text>
          <text
            x="133.50535714285712"
            y="259.75857142857143"
            textAnchor="middle"

            stroke="none"
            fill="#d5ddec"
            style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1" }}
            strokeWidth="0"
            fontSize="22px"
            fontWeight="bold"

            opacity="1"
            transform="matrix(0.3663,0,0,0.3663,84.6064,164.6168)"
            className="sm_label_253"
          >
            <tspan
              dy="7.625758928571429"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
            >
              Imo
            </tspan>
          </text>
          <text
            x="133.50535714285712"
            y="259.75857142857143"
            textAnchor="middle"

            stroke="none"
            fill="#d5ddec"
            style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1" }}
            strokeWidth="0"
            fontSize="22px"
            fontWeight="bold"

            opacity="1"
            transform="matrix(0.3663,0,0,0.3663,84.6064,164.6168)"
            className="sm_label_290"
          >
            <tspan
              dy="7.625758928571429"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
            >
              Imo
            </tspan>
          </text>
          <text
            x="133.50535714285712"
            y="259.75857142857143"
            textAnchor="middle"

            stroke="none"
            fill="#d5ddec"
            style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1" }}
            strokeWidth="0"
            fontSize="22px"
            fontWeight="bold"

            opacity="1"
            transform="matrix(0.3663,0,0,0.3663,84.6064,164.6168)"
            className="sm_label_327"
          >
            <tspan
              dy="7.625758928571429"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
            >
              Imo
            </tspan>
          </text>
          <text
            x="133.50535714285712"
            y="259.75857142857143"
            textAnchor="middle"

            stroke="none"
            fill="#d5ddec"
            style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1" }}
            strokeWidth="0"
            fontSize="22px"
            fontWeight="bold"

            opacity="1"
            transform="matrix(0.3663,0,0,0.3663,84.6064,164.6168)"
            className="sm_label_364"
          >
            <tspan
              dy="7.625758928571429"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
            >
              Imo
            </tspan>
          </text>
          <text
            x="133.50535714285712"
            y="259.75857142857143"
            textAnchor="middle"

            stroke="none"
            fill="#d5ddec"
            style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1" }}
            strokeWidth="0"
            fontSize="22px"
            fontWeight="bold"

            opacity="1"
            transform="matrix(0.3663,0,0,0.3663,84.6064,164.6168)"
            className="sm_label_401"
          >
            <tspan
              dy="7.625758928571429"
              style={{ "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)" }}
            >
              Imo
            </tspan>
          </text>
        </svg>
      </a>
    </div>
  )
}

export default Imo;
