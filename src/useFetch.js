const UseFetch = async(url)=>{
    const respuesta = await fetch(url);
    const resObject = await respuesta.json();
    console.log(resObject);
    return {resObject}
}


export default UseFetch;