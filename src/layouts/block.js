import * as React from "react";

const Block = ({ classes, children }) => {
  return <div className={`${classes}`}>{children}</div>;
};

export default Block;
