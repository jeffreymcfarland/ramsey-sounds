import * as React from "react";
import "../assets/sass/slice.scss";

const Size = (height) => {
  return `Slice-${height}`;
};

const Position = (horizontalDir, verticalDir) => {
  return `Slice-horizontal${horizontalDir} Slice-vertical${verticalDir}`;
};

const Slice = ({ h, hDir, vDir, children }) => {
  return <div class={`${Size(h)} ${Position(hDir, vDir)}`}>{children}</div>;
};

export default Slice;
