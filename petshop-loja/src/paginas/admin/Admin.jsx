import React from "react";
import ListaCatAdmin from "./components/ListCatAdmin";
import ListaPostsAdmin from "./components/ListPostsAdmin";

const Admin = () => {
    return ( 
        <main>
            <div className="container">
                <h2 className="titulo-pagina">Area Administrativa</h2>
            </div>
            <ListaCatAdmin />
            <ListaPostsAdmin />

        </main>
     );
}
 
export default Admin;