/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import NotesContext from '../context';
import Note from './Note';

function NoteList() {
  const { state } = useContext(NotesContext);
  return (
    <div className="notes-container">
      {state.notes.map((note, i) => {
        return <Note note={note} key={i} />;
      })}
    </div>
  );
}

export default NoteList;
