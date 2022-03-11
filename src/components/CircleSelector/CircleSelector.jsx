import React from 'react';
import './CircleSelector.css';

function CircleSelector(props) {
  return (
    <div className="CircleSelector">
      <button
        className={'b1' === props.activeNum ? 'selected' : ''}
        onClick={() => props.changeChoice('b1')}
      >
        {props.activeNum === 'b1' ? 'CIRCLE 1 SELECTED' : 'SELECT CIRCLE 1'}
      </button>
      <button
        className={'b2' === props.activeNum ? 'selected' : ''}
        onClick={() => props.changeChoice('b2')}
      >
        {props.activeNum === 'b2' ? 'CIRCLE 2 SELECTED' : 'SELECT CIRCLE 2'}
      </button>
      <button
        className={'b3' === props.activeNum ? 'selected' : ''}
        onClick={() => props.changeChoice('b3')}
      >
        {props.activeNum === 'b3' ? 'CIRCLE 3 SELECTED' : 'SELECT CIRCLE 3'}
      </button>
      <button
        className={'b4' === props.activeNum ? 'selected' : ''}
        onClick={() => props.changeChoice('b4')}
      >
        {props.activeNum === 'b 4' ? 'CIRCLE 4 SELECTED' : 'SELECT CIRCLE 4'}
      </button>
    </div>
  );
}

export default CircleSelector;
