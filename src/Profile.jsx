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

    async function Buy(){
        const res = await fetch(`${import.meta.env.VITE_API_URL}/buy`,{
            method:"POST",
            credentials:"include",
        })

        const data = await res.json();
        alert(data.status);
    }

    return(
        <>
            <h1>{text} Profile</h1>
            <h3>Balance: {balance}</h3>

            <div className="product_1">
                <h3>AWP Shooter</h3>
                <p>Rare: Legend</p>
                <button onClick={() => Buy()}>Buy</button>
            </div>
        </>
    )
}