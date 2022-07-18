/* eslint-disable no-unused-vars */
import React, { useState, useContext, useRef, useEffect } from 'react';
import NotesContext from '../context';

export default function AddNote() {
  const { dispatch } = useContext(NotesContext);
  const [value, setValue] = useState('');
  let ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);
  const handleChange = event => {
    setValue(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (value.trim() === '') {
      var newLine = '\r\n';
      var msg = 'Sorry! Your note is Empty!';
      msg += newLine;
      msg += 'Please Check again! ';
      alert(msg);
    } else {
      dispatch({ type: 'ADD_NOTE', payload: value });
      setValue('');
    }
  };
  return (
    <div className="note-form">
      <form onSubmit={handleSubmit} action="">
        <input type="text" ref={ref} onChange={handleChange} value={value} />
        <button>Add note</button>
      </form>
    </div>
  );
}
