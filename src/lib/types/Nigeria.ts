import type { ReactNode } from "react";
import type { State } from "./State";

export type StateProps = {
  hoverColor?: string;
  hoverBackgroundColor?: string;
  defaultColor?: string;
  id?: string;
  height?: number;
  className?: string;
  renderData?: ReactNode;
  showRenderData?: boolean;
};

export type NigeriaProps = StateProps & {
  state: State;
};
