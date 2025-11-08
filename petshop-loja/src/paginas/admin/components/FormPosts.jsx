import React, { useState, useEffect } from "react";
//npm install @mui/material @emotion/react @emotion/styled
import { Button, TextField, TextareaAutosize, MenuItem, Select } from "@mui/material";
import { api } from "../../../api/api";
import { useNavigate, useParams } from "react-router-dom";

const FormPosts = () => {
    const [title, setTitle] = setState('')
    const [metadescription, setMetadescription] = setState('')
    const [body, setBody] = setState('')
    const [categoria, setCategoria] = setState('')
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        api.get("categorias/").then((resposta) => setCategorias(resposta.data));
    }, []);
    const CadPosts = () => {
        
    }
    return (
        <main className="container flex flex--centro">
            <article className="cartao post">
                <h2 className="titulo-pagina">Cadastro de Categorias</h2>
                <br />
                <form onSubmit={CadPosts}>
                    <TextField
                        value={title}
                        onChange={evento => setTitle(evento.target.value)}
                        id="outlined-basic"
                        label="Categoria"
                        variant="filled"
                        fullWidth
                        required
                    />
                    <br />
                    <TextField
                        value={metadescription}
                        onChange={evento => setMetadescription(evento.target.value)}
                        id="outlined-basic"
                        label="Categoria"
                        variant="filled"
                        fullWidth
                        required
                    />
                    <br />
                    <TextareaAutosize
                        value={body}
                        onChange={evento => setBody(evento.target.value)}
                        aria-label="minimum height"
                        minRows={5}
                        placeholder="Minimum 5 rows"
                        style={{ width: 200 }}
                    />
                    <Select
                        labelId="select-categoria"
                        value={categoria}
                        onChange={(evento) => setCategoria(evento.target.value)}
                    >
                        {categorias.map((cat) => (
                            <MenuItem key={cat.id} value={cat.id}>
                                {cat.nome}
                            </MenuItem>
                        ))}
                    </Select>
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

export default FormPosts;