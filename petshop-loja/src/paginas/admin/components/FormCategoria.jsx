import React, { useState, useEffect } from "react";
//npm install @mui/material @emotion/react @emotion/styled
import { Button, TextField } from "@mui/material";
import { api } from "../../../api/api";
import { useNavigate, useParams } from "react-router-dom";

const FormCategoria = () => {    
    const [nomeCategoria, setNomeCategoria] = useState('')
    const parametros = useParams()
    useEffect(()=>{
        if (parametros.id){
            api.get(`categorias/${parametros.id}/`)
                .then(resposta =>setNomeCategoria(resposta.data.nome))
        }
    }, [parametros])
    
    const navigate = useNavigate()
    const CadCategoria = (evento)=>{
        evento.preventDefault()
        if (parametros.id){
            api.put(`/categorias/${parametros.id}`, {
                nome: nomeCategoria,
                //subcategorias: []
            })
                .then(()=>{
                    alert("A atualização foi realizada com sucesso!")
                    navigate('/admin')
                    //window.location.href = "/admin"
                }) 
        } else {
            api.post(`/categorias`, {
                id: nomeCategoria,
                nome: nomeCategoria,
                subcategorias: []
            })
                .then(()=>{
                    alert("Registro inserido com sucesso!")
                    navigate('/admin')
                    //window.location.href = "/admin"
                })  
        }
      
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
                        Salvar
                    </Button>
                </form>
            </article>
        </main>
     );
}
 
export default FormCategoria;
