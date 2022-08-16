import React, { useEffect } from "react";
// import HomePage' from "./components/HomePage";
import axios from "axios";
import { useTable } from "react-table";

export default function Hometable(){
    const [notes, getNotes] = useState('');

    const url = "http://localhost:3000/";

    useEffect(()=>{
        getAllNotes();
    }, []);

    const getAllNotes = ()=>{
        axios.get(`${url}hometable`)
        .then((response)=>{
            const allNotes = response.data.notes.allNotes;
            getNotes(allNotes)
        })
        .catch(error => console.error(`Error: ${error}`));
    }
    return (
        <HomePage notes = {notes}/>
    )
}
