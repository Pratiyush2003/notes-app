import React, { useEffect, useState } from 'react'
import MyContext from './myContext'


const myState = (props) => {
    const [loading, setLoading] = useState(false)
    const [allNotes, setAllNotes] = useState([])

    const getallNotes = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://notesapp-back-vpij.onrender.com/api/notes/fetchallnotes', {
          method :'GET',
          headers : {
            "content-type" : "application/json",
            "auth-token" : localStorage.getItem('token')
          }
        })

        const notesData =  await res.json()
        console.log(notesData)
        setAllNotes(notesData);
        setLoading(false)
        
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    //add all notes
    const [title , setTitle] = useState('');
    const [description , setDescription ] = useState('');
    const [tag , setTag ] = useState('')

    const addNote = async () => {
      const res = await fetch('https://notesapp-back-vpij.onrender.com/api/notes/addnote', {
        method : "POST",
        headers : {
          "Content-type" : "application/json",
          "auth-token" : localStorage.getItem('token')
        },
        body : JSON.stringify({title , description, tag })
      })
      const noteData = await res.json();

      getallNotes();

      if(noteData.error){
          console.log(noteData.error)
      }else{
        console.log(noteData)
      }
        setDescription('');
        setTag('');
        setTitle('');
    }

    const deleteNote = async (id) => {
      const res = await fetch(`https://notesapp-back-vpij.onrender.com/api/notes/deletenote/${id}`, {
        method : "DELETE",
        headers : {
          "content-type" : "application/json",
          "auth-token" : localStorage.getItem('token')
        }
      })
      const noteData = await res.json();
      getallNotes();
      console.log(noteData)
    }

  return (
    <MyContext.Provider value={{allNotes, loading , getallNotes , title , setTitle , description , setDescription ,
    tag , setTag , addNote , deleteNote}}>
        {props.children}
    </MyContext.Provider>
  )
}

export default myState