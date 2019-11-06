import React, { FunctionComponent } from 'react';

interface IRenderChildrenProps {
  if: boolean;
}

const RenderChildren: FunctionComponent<IRenderChildrenProps> = props =>
  props.if ? <>{props.children}</> : null;

export default RenderChildren;
