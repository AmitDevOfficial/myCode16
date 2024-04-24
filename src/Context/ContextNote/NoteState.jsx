import React, { useState } from 'react'
import NoteContext from './noteContext'
// import Note from '../../../Server/models/Note'

export default function NoteState(props) {
    const host = "http://localhost:8000";
    const noteInitial = []
    const [notes, setNotes] = useState(noteInitial)

    // //Add Notes--
    const addNote = async (title, description) => {
        //API Call--
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem("token")
            },
            body: JSON.stringify({title, description}),
        });

        const note = await response.json();
        setNotes(notes.concat(note)); 
    } 
    
    //GET Note--
    const getNote = async (title, description) => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem("token")
            }
        });
        const json = await response.json();
        console.log(json);
        setNotes(json)
    }
  return (
    <NoteContext.Provider value={ {notes, addNote, getNote} }>
        {props.children}
    </NoteContext.Provider>
  )


}
