import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      primary: string;
      secondary: string;
      white: string;
      black: string;
      green: string;
      lightGrey: string;
    };
    borders: {
      green: string;
    };
    width: {
      maxWidth: string;
      minWidth: string;
      maxWidthBreakpoint: string;
    };
  }
}
