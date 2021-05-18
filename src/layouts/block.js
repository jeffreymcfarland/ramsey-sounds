import * as React from "react";

const Block = ({ classes, children }) => {
  return <div class={`${classes}`}>{children}</div>;
};

export default Block;
