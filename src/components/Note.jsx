/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import NotesContext from '../context';

function Note({ note }) {
  const { dispatch } = useContext(NotesContext);
  return (
    <div className="note">
      <p>{note.text}</p>
      <div className="btn-container">
        <button
          onClick={() => dispatch({ type: 'SET_CURRENT_NOTE', payload: note })}
          className="edit"
        >
          Edit
        </button>
        <button onClick={() => dispatch({ type: 'DELETE_NOTE', payload: note.id })} className="delete">Delete</button>
      </div>
    </div>
  );
}

export default Note;
