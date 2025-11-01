import React from "react";
//npm install @mui/material @emotion/react @emotion/styled
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { api } from "../../../api/api";

const FormCategoria = () => {
    const [nomeCategoria, setNomeCategoria] = useState('')

    const CadCategoria = (evento) => {
        evento.preventDefault()

        api.post(`/categorias`, {
            id: nomeCategoria,
            nome: nomeCategoria,
            subcategorias: []
        })
            .then(()=>{
                alert("Sucesso!")
                window.location.href = "/admin"
            })

    }

    return (
        <main className="container flex flex--centro">
            <article className="cartao post">
                <h2 className="titulo-pagina">Cadastro de Categorias</h2>
                <br />
                <form onSubmit={CadCategoria}>
                    <TextField
                        value={nomeCategoria}
                        onChange={evento => setNomeCategoria(evento.target.value)}
                        id="outlined-basic"
                        label="Categoria"
                        variant="filled"
                        fullWidth
                        required
                    />
                    <br />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ marginTop: 1 }}
                        fullWidth
                    >
                        Cadastrar
                    </Button>
                </form>
            </article>
        </main>
    );
}

export default FormCategoria;