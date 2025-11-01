import React from "react";
import ListaCatAdmin from "./components/ListCatAdmin";

// sfc >> atalho para criação do componente
const Admin = () => {
    return ( 
        <main>
            <div className="container">
                <h2 className="titulo-pagina">Administração</h2>
            </div>
            <ListaCatAdmin />
        </main>
     );
}
 
export default Admin;