import React from 'react';

const Fal = props => {
  return (
    <div className={`wall ${props.vanFeny ? 'light' : 'dark'}`}>
      {props.children}
    </div>
  );
};
export default Fal;
