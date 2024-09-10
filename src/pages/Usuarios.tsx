import { useEffect,useState } from "react";

export const Usuarios = () =>{
    const [usuarios, setUser] = useState ({name:"", email:"", fotoDePerfil:"", pais:""})
    useEffect (() =>{
        async function obtenerDatos() {
            const respuesta = await fetch ("https://randomuser.me/api/?results=3")
            const datos = await respuesta.json();
            setUser(datos);
        }
        obtenerDatos();
    });
    return(
        <div>
            <h2>User info</h2>
            <p>{usuarios.name}</p>
            <p>{usuarios.email}</p>
            <p>{usuarios.fotoDePerfil}</p>
            <p>{usuarios.pais}</p>
        </div>
    )
}

export default Usuarios;