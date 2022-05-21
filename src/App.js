
import { useState } from 'react';
import './App.css';
import CreatArea from './Component/CreatArea';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Note from './Component/Note';

function App() {
  const [note,setNote]=useState([])

  function addNote(newNote){
    setNote(form =>{
      return [...form,newNote]
    })
  }
  return (
    <div className="App">
      <Header/>
      <CreatArea onAdd={addNote}/>
      {note.map((item)=>{
        return(
          <Note
          title={item.title}
          content={item.content}
          />
        )
      })}
      <Footer/>
    </div>
  );
}

export default App;
