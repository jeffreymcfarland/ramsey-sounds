import * as React from "react";

const Label = (props) => {
  return (
    <div className='Label-wrapper color-lightGray'>
      <h2>{props.label}</h2>
    </div>
  );
};

export default Label;
