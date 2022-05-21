import React, { useState } from 'react'
import './CreateArea.css'
import { Fab, Zoom } from '@mui/material'
import { BsFillBookmarkPlusFill } from "react-icons/bs";


export default function CreatArea(props) {

    const [Affiche , setAffiche] = useState(false);

    function affiche () {
      setAffiche(true);
    }
    const [form, setForm] = useState({
        title: "",
        content: ""
      });

    function handleChange(event) {
        const { name, value } = event.target;
        setForm({...form,[name]:value})
    }

    function submitNote(event) {
      props.onAdd(form);
      setForm({
        title: "",
        content: ""
      });
      event.preventDefault();
    }


  return (

    <div>


      <form className="create-note">
          {Affiche && (
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
          />
          )}


        <textarea
          name="content"
          value={form.content}
          onClick={affiche}
          onChange={handleChange}
          placeholder="Take a note..."
          rows={Affiche ? 3 : 1}
        />
         <Zoom in={Affiche}>
           <Fab onClick={submitNote}>
            <BsFillBookmarkPlusFill/>
            </Fab>
        </Zoom>
        </form>
    </div>
  )
}
