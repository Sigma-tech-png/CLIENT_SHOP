import { useEffect } from "react"
import { Form,useActionData } from "react-router"

export default function Create(){
    const ActionData = useActionData()

    useEffect(() => {
        if(ActionData){
            window.location.href = "/";
        }
    },[ActionData])

    return (
        <>
            <h1>Create Account</h1>
            <Form method="post">
                <input type="text" name="name" placeholder="Enter your name..."/>
                <button type="submit">Create</button>
            </Form>

        </>
    )
}