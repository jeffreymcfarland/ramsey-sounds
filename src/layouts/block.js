import * as React from "react";

const Block = ({ ids, classes, children }) => {
  return (
    <div id={ids} className={`${classes}`}>
      {children}
    </div>
  );
};

export default Block;
