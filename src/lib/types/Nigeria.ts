import type { ReactNode } from "react";
import type { State } from "./State";

export type NigeriaProps = {
  hoverColor?: string;
  hoverBackgroundColor?: string;
  defaultColor?: string;
  id: string;
  height?: number;
  state: State;
  className?: string;
};

export type StateProps = {
  hoverColor?: string;
  hoverBackgroundColor?: string;
  renderData?: ReactNode;
  showRenderData?: boolean;
  defaultColor?: string;
  id: string;
  height?: number;
  state: State;
  className?: string;
};
