import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api, busca } from "../../../api/api"
import "../components/tabela.css";
import { Button } from "@mui/material";

const ListaPostsAdmin = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        busca(`/posts`, setPosts)
    }, [])

    const excluir = (postDel) => {
        api.delete(`posts/${postDel.id}/`)
            .then(() => {
                const listaposts = posts.filter(post => post.id !== postDel.id)
                setPosts([...listaposts])
            })

    }

    return (
        <section className="container">
            <table className="tabela">
                <thead>
                    <tr>
                    <th className="tabela__coluna--p">Categoria</th>
                        <th className="tabela__coluna--m">Título</th>
                        <th className="tabela__coluna--m">Posts</th>
                        <th colSpan="3" className=" tabela__alinhamento--direita"><Link to="/admin/NovaCategoria">
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                sx={{ marginTop: 1 }}
                            >
                                Novo Post
                            </Button>
                        </Link>
                        </th>
                    </tr>
                </thead>
                <tbody >
                    {
                        posts.map((post) => (
                            <tr key={post.id}>
                                <td className="tabela__coluna--p">{post.categoria}</td>
                                <td className="tabela__alinhamento--esquerda tabela__coluna--p">
                                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                                </td>
                                <td className="tabela__alinhamento--esquerda tabela__coluna--g">{post.metadescription}</td>
                                <td>

                                    <Link to={`/admin/posts/${post.id}`}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="warning"
                                            align="right"
                                        >
                                            Editar
                                        </Button>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/admin/posts`}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="error"
                                            align="right"
                                            sx={{ margin: "0 0.25rem" }}
                                            onClick={() => excluir(post)}
                                        >
                                            Excluir
                                        </Button>
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    );
}

export default ListaPostsAdmin;