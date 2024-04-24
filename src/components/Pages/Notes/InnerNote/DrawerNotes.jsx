import React, { useContext } from 'react';
import Draggable from 'react-draggable';
import noteContext from "../../../../Context/ContextNote/noteContext"


export default function DrawerNotes(props) {

    const {note} = props;

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
                           <b>{note.title}</b>
                            <p>{note.description}</p>
                        </div>
                    </Draggable>
                </div>
            </div>
        </>
    )
}
