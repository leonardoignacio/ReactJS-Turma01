import React, { useState, useEffect } from "react";
//npm install @mui/material @emotion/react @emotion/styled
import { Button, TextField } from "@mui/material";
import { api } from "../../../api/api";
import { useNavigate, useParams } from "react-router-dom";

const FormCategoria = () => {
    const [nomeCategoria, setNomeCategoria] = useState('')
    const [txtSubCategoria, setTxtSubCategoria] = useState('')
    const [subCategorias, setSubCategorias] = useState([])
    const parametros = useParams()
    useEffect(() => {
        if (parametros.id) {
            api.get(`categorias/${parametros.id}/`)
                .then(resposta => {
                    setNomeCategoria(resposta.data.nome)
                    setSubCategorias(resposta.data.subcategorias || [])
                })
        }
    }, [parametros])

    function addSubCategoria(){
        if( txtSubCategoria.length>0){
            setSubCategorias([txtSubCategoria, ...subCategorias])
            setTxtSubCategoria('')
        } 
    }

    function excluirSubCategoria(i) {
        let el = subCategorias.filter(e => e!=subCategorias[i])
        setSubCategorias(el)
    }

    const navigate = useNavigate()
    const CadCategoria = () => {
        if (parametros.id) {
            api.put(`/categorias/${parametros.id}`, {
                nome: nomeCategoria,
                subcategorias: subCategorias
            })
                .then(() => {
                    alert("A atualização foi realizada com sucesso!")
                    navigate('/admin')
                    //window.location.href = "/admin"
                })
        } else {
            api.post(`/categorias`, {
                id: nomeCategoria,
                nome: nomeCategoria,
                subcategorias: subCategorias
            })
                .then(() => {
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
                    <table className="tabela">
                        <thead>
                            <tr>
                                <th className="tabela__coluna--g">SubCategoria</th>
                            </tr>
                            <tr>
                                <td>
                                    <TextField
                                        value={txtSubCategoria}
                                        onChange={evento => setTxtSubCategoria(evento.target.value)}
                                        id="outlined-basic"
                                        label="Categoria"

                                        fullWidth
                                    />
                                </td>
                                <td>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{ marginTop: 1 }}
                                        fullWidth
                                        onClick={() => addSubCategoria()}
                                    >
                                        Add
                                    </Button>
                                </td>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                subCategorias.map((subCat, i) => (
                                    <tr key={i}>
                                        <td className="tabela__coluna--m">
                                            <p>{subCat}</p>
                                        </td>
                                        <td colSpan="2" className="tabela__coluna--m tabela__alinhamento--direita">
                                            <Button
                                                variant="contained"
                                                color="error"
                                                align="right"
                                                sx={{ margin: "0 0.25rem" }}
                                                onClick={() => excluirSubCategoria(i)}
                                            >
                                                X
                                            </Button>

                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                    <br />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ marginTop: 1 }}
                        fullWidth
                        onClick={()=>CadCategoria()}
                    >
                        Salvar
                    </Button>
            </article>
        </main>
    );
}

export default FormCategoria;
