import React from 'react';

function Circles(props) {
  return (
    <div className="Circles">
      <div className={'1' === props.activeNum ? 'selected' : ''}>1</div>
      <div className={'2' === props.activeNum ? 'selected' : ''}>2</div>
      <div className={'3' === props.activeNum ? 'selected' : ''}>3</div>
      <div className={'4' === props.activeNum ? 'selected' : ''}>4</div>
    </div>
  );
}

export default Circles;
