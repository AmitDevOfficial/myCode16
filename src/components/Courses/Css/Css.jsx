import React from 'react'
import "./StyleCss.css"
import Draggable from 'react-draggable';

export default function Css() {

  const handleStart = (e, data) => {
    console.log('Drag started');
  };

  const handleDrag = (e, data) => {
    console.log('Dragging...');
  };

  const handleStop = (e, data) => {
    console.log('Drag stopped');
  };


  return (
    <div className='container dragMain'>
       <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        scale={1}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}>
        <div className='dragging handle'>
          <div>Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
    </div>
  )
}
