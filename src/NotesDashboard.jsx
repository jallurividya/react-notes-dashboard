import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { NotesContext } from './NotesContext'

const NotesDashboard = () => {
    const {notes, setNotes} = useContext(NotesContext);
    const [input, setInput] = useState("");
    const [selectedNote, setSelectedNote] = useState(null);
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    const addNote = () => {
        if (input.trim() === "")
            return
        const newNote = {
            id: Date.now(),
            text: input
        };
        setNotes([...notes, newNote]);
        setInput("");
    };
    const totalNotes = useMemo(() => {
        return notes.length;
    }, [notes]);

    return (
        <div className='container'>
            <h2>Notes Dashboard</h2>
            <p>Total Notes: {totalNotes}</p>
            <input ref={inputRef} type='text' value={input} placeholder='Enter note' onChange={(e) => setInput(e.target.value)} />
            <button onClick={addNote}>Add Note</button>
            <ul className='notesList'>
                {notes.map((note) => (
                    <li key={note.id} onClick={() => setSelectedNote(note.id)}
                        style={{ background: selectedNote === note.id ? "green" : "red", cursor: "pointer" }}
                    >
                        {note.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NotesDashboard