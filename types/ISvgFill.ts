import { DefaultTheme } from "styled-components";

type colors = keyof DefaultTheme["colors"];

export interface ISvgFill {
  fill: DefaultTheme["colors"][colors];
}
