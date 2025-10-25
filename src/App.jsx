import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import "./App.css"

export default function App(){
    const LoaderData = useLoaderData();
    const navigate = useNavigate();

    useEffect(() => {
        if(LoaderData.status == false){
            window.location.href = "/create"
        }
    },[LoaderData])

    function Profile(){
        navigate("/user/profile")
    }

    return(
        <>
            <button className="btn_profile" onClick={() => Profile()}>Profile</button>
            <h1>Shop Hub</h1>
            {/* <h1>{text}</h1> */}
            <Link to={"/create"}>Create Account</Link>
        </>
    )
}