import { useEffect,useState } from "react";

export const UsuariosPais = () =>{
    const [usuariosPais, setUser] = useState ({name:"", email:"", fotoDePerfil:"", pais:""})
    useEffect (() =>{
        async function obtenerDatos() {
            const respuesta = await fetch ("https://randomuser.me/api/?nat=br")
            const datos = await respuesta.json();
            setUser(datos);
        }
        obtenerDatos();
    });
    return(
        <div>
            <h2>User info</h2>
            <p>{usuariosPais.name}</p>
            <p>{usuariosPais.email}</p>
            <p>{usuariosPais.fotoDePerfil}</p>
            <p>{usuariosPais.pais}</p>
        </div>
    )
}

export default UsuariosPais;