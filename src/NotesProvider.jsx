import React, { useEffect, useState } from 'react'
import { NotesContext } from './NotesContext';

const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("notes"))
        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes])
    return (
        <NotesContext.Provider value={{ notes, setNotes }}>
            {children}
        </NotesContext.Provider>
    )
}

export default NotesProvider