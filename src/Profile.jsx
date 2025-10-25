import { useEffect,useState } from "react"

export default function Profile(){
    const [text,setText] = useState();
    const [balance,setBalance] = useState();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/user/profile`, {
            credentials: "include"  // важно, если токен хранится в cookie
        })
        .then(res => res.json())
        .then(data => {
            if(data.status == false){
                window.location.href = "/create";
            }else{
                setText(data.name)
                setBalance(data.balance)
            }
        })
    }, [])

    return(
        <>
            <h1>{text} Profile</h1>
            <h3>Balance: {balance}</h3>
        </>
    )
}