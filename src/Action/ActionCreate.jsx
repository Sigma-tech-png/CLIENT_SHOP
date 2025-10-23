export async function ActionCreate({ request }){
    const formData = await request.formData();
    const name = formData.get("name");

    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/post`,{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({name}),
        credentials:"include",
    })

    const data = await res.json();
    return data;
}