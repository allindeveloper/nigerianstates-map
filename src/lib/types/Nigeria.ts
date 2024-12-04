import { State } from "./State";

export type NigeriaProps = {
  hoverColor?: string;
  defaultColor?: string;
  id: string;
  height?: number;
  state: State;
};

export type StateProps = {
  hoverColor?: string;
  hoverBackgroundColor?: string;
  renderData?: React.ReactNode;
  showRenderData?: boolean;
  defaultColor?: string;
  id: string;
  height?: number;
  state: State;
};
