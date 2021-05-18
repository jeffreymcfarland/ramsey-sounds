import * as React from "react";

const Size = (height) => {
  return `Slice-${height}`;
};

const Position = (horizontalDir, verticalDir) => {
  return `Slice-horizontal${horizontalDir} Slice-vertical${verticalDir}`;
};

const Slice = ({ h, hDir, vDir, classes, children }) => {
  return (
    <div class={`${Size(h)} ${Position(hDir, vDir)} ${classes}`}>
      {children}
    </div>
  );
};

export default Slice;
