import { createContext,useState } from "react";

const NoteContext = createContext();

export const NoteProvider = ({children})=>{
    const [notes, setnotes] = useState([]);
    const handleDelete =  (id) =>{
      const newnotes = notes.filter((note)=>note.id!=id)
      setnotes(newnotes)
    }
    const addNotes = (id,title,detail,category)=>{
        const newNote={
            id,
            title,
            detail,
            category
        }
        setnotes([...notes,newNote])
    }
    return <NoteContext.Provider
        value={{
            notes,handleDelete,addNotes
        }}
    >
            {children}
    </NoteContext.Provider>
}

export default NoteContext