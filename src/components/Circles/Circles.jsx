import React from 'react';
import './Circles.css';

function Circles(props) {
  return (
    <div className="Circles">
      <div className={'b1' === props.activeNum ? 'selected' : ''}>1</div>
      <div className={'b2' === props.activeNum ? 'selected' : ''}>2</div>
      <div className={'b3' === props.activeNum ? 'selected' : ''}>3</div>
      <div className={'b4' === props.activeNum ? 'selected' : ''}>4</div>
    </div>
  );
}

export default Circles;
