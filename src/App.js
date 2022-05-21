
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

      <h2> MOdification made in this line</h2>

<<<<<<< HEAD
      <h3>Ahmed passed from here</h3>
      <h3>Ahmed passed from here</h3>
      <h3>Ahmed passed from here</h3>
      <h3>Ahmed passed from here</h3>
      <h3>Ahmed passed from here</h3>
=======
<input type="text"></input>
<button>SEND</button>
<h3>Confict try resolving </h3>
<h2>accept only my changes </h2>

>>>>>>> df811de6ff152a8d180fb47af1ffcbb0e3fca323
      <Footer/>
    </div>
  );
}

export default App;
