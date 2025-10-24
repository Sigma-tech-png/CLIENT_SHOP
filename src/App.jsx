import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router";
import "./App.css"

export default function App(){
    const LoaderData = useLoaderData();

    useEffect(() => {
        if(LoaderData.status == false){
            window.location.href = "/create"
        }
    },[LoaderData])

    return(
        <>
            {/* <h1>{text}</h1> */}
            <Link to={"/create"}>Create Account</Link>
        </>
    )
}