import React from 'react';

const RightArrow = (props) => {
  return (
    <div className="nextArrow" onCLick={props.goToNextSlide}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default RightArrow;

