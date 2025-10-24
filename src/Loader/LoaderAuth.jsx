export async function LoaderAuth() {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/`,{
        method:"GET",
        credentials:"include",
    });

    const data = await res.json();
    return data;

}