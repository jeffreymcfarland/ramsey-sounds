import * as React from "react";

const Label = (props) => {
  return (
    <div className='Label-wrapper color-lightGray'>
      <p className='font-normal'>{props.label}</p>
    </div>
  );
};

export default Label;
