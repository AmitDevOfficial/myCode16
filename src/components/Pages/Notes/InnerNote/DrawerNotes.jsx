import React from 'react';
import Draggable from 'react-draggable';


export default function DrawerNotes() {
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
        <>
            <h2>Your Notes will be Here</h2>
            <div className="drawerNoteItem">
                <div className="drawerCard">
                    <Draggable
                        axis="both"
                        handle=".handle"
                        defaultPosition={{ x: 0, y: 0 }}
                        position={null}
                        scale={1}
                        onStart={handleStart}
                        onDrag={handleDrag}
                        onStop={handleStop}
                    >

                        <div className='dragging handle'>
                           <b>Add Title</b>
                            <p>Add Description...</p>
                        </div>
                    </Draggable>
                    <Draggable
                        axis="both"
                        handle=".handle"
                        defaultPosition={{ x: 0, y: 0 }}
                        position={null}
                        scale={1}
                        onStart={handleStart}
                        onDrag={handleDrag}
                        onStop={handleStop}
                    >

                        <div className='dragging handle'>
                           <b>Add Title</b>
                            <p>Add Description...</p>
                        </div>
                    </Draggable>
                </div>
            </div>
        </>
    )
}
