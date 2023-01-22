import React, { ReactNode } from "react";

interface IProps {
  condition: boolean;
  children: ReactNode;
}

export default function RenderWhen({ condition, children }: IProps) {
  return <>{condition ? children : null}</>;
}
