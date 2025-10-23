import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";
import "./App.css"

export default function App(){
    const [text,setText] = useState();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/`)
        .then(res => res.json())
        .then(data => setText(data.text));
    },[])

    return(
        <>
            <h1>{text}</h1>
            <Link to={"/create"}>Create Account</Link>
        </>
    )
}