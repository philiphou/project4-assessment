import React from 'react';

function CircleSelector(props) {
  return (
    <div className="CircleSelector">
      <button
        className={'1' === props.activeBtn ? 'selected' : ''}
        onClick={() => props.changeChoice('1')}
      >
        {props.activeBtn === '1' ? 'CIRCLE 1 SELECTED' : 'SELECT CIRCLE 1'}
      </button>
      <button
        className={'2' === props.activeBtn ? 'selected' : ''}
        onClick={() => props.changeChoice('2')}
      >
        {props.activeBtn === '2' ? 'CIRCLE 2 SELECTED' : 'SELECT CIRCLE 2'}
      </button>
      <button
        className={'3' === props.activeBtn ? 'selected' : ''}
        onClick={() => props.changeChoice('3')}
      >
        {props.activeBtn === 'btnThree'
          ? 'CIRCLE 3 SELECTED'
          : 'SELECT CIRCLE 3'}
      </button>
      <button
        className={'4' === props.activeBtn ? 'selected' : ''}
        onClick={() => props.changeChoice('4')}
      >
        {props.activeBtn === '4' ? 'CIRCLE 4 SELECTED' : 'SELECT CIRCLE 4'}
      </button>
    </div>
  );
}

export default CircleSelector;
