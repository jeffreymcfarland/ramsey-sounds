import * as React from "react";

const Size = (height) => {
  return `Slice-${height}`;
};

const Position = (horizontalDir, verticalDir) => {
  return `Slice-horizontal${horizontalDir} Slice-vertical${verticalDir}`;
};

const Slice = ({ h, hDir, vDir, classes, children }) => {
  return (
    <div class={`Slice ${Size(h)} ${Position(hDir, vDir)} ${classes}`}>
      {children}
    </div>
  );
};

export default Slice;
