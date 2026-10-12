import React, { type CSSProperties, type ReactNode } from "react";
import type { StateProps } from "../types/Nigeria";

export const getStateMapId = (stateId: string, id?: string) =>
  id ? `${stateId}-${id}` : stateId;

type StateMapProps = Pick<
  StateProps,
  "className" | "defaultColor" | "hoverBackgroundColor" | "hoverColor"
> & {
  children: ReactNode;
};

type StateMapStyle = CSSProperties & {
  "--map-default-color"?: string;
  "--map-hover-background-color"?: string;
  "--map-hover-color"?: string;
};

const StateMap = ({
  children,
  className,
  defaultColor,
  hoverBackgroundColor,
  hoverColor,
}: StateMapProps) => {
  const style: StateMapStyle = {
    "--map-default-color": defaultColor,
    "--map-hover-background-color": hoverBackgroundColor,
    "--map-hover-color": hoverColor,
  };

  return (
    <div
      className={["App", "nigerian-state-map", className]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </div>
  );
};

export default StateMap;
