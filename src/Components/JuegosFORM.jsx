import React, { useState, useEffect } from "react";
import axios from "axios";

function JuegosFORM({ id, del, actualizar }) {

    if (del !== true)
        del = false

    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [plataforma, setPlataforma] = useState("");
    const [precio, setPrecio] = useState("");
    const [categoria, setCategoria] = useState("");

    useEffect(() => {

        if (id !== undefined)
            cargarJuego();
        else {
            setTitulo("");
            setDescripcion("");
            setPlataforma("");
            setPrecio("");
            setCategoria("");
        }

    }, [id])





    async function cargarJuego() {
        try {
            let res = await axios("https://denny2023.azurewebsites.net/api/juegos/" + id);
            let data = res.data;

            setTitulo(data.titulo);
            setDescripcion(data.descripcion);
            setPlataforma(data.plataforma);
            setPrecio(data.precio);
            setCategoria(data.categoria);
        }
        catch (error) {
            alert(error);
            if (error.response.status === 404)
                document.querySelector("#btnCancelar").click();
        }
    }

    function enviar(e) {
        let form = document.querySelector("#formulario");

        e.preventDefault();
        e.stopPropagation();

        if (!form.checkValidity()) {

            form.classList.add('was-validated');
        }
        else {
            if (id === undefined)
                guardar();
            else if (del !== true)
                editar();
            else
                eliminar();
        }
    }

    async function eliminar() {
        if (window.confirm("¿Estás seguro de que deseas eliminar este registro?")) {
            try {
                let res = await axios.delete("https://denny2023.azurewebsites.net/api/juegos?id=" + id);
                let data = await res.data;
    
                alert(data.message);
    
                if (data.status === 1) {
                    document.querySelector("#btnCancelar").click();
                    actualizar();
                }
            } catch (error) {
                alert(error);
    
                if (error.response.status === 404)
                    document.querySelector("#btnCancelar").click();
            }
        } else {
            // El usuario canceló la eliminación
        }
    }

    async function editar() {
        try {
            let juego = {
                juegoId: id,
                titulo: titulo,
                descripcion: descripcion,
                plataforma: plataforma,
                precio: precio,
                categoria: categoria
            }
            let res = await axios.put("https://denny2023.azurewebsites.net/api/juegos", juego);
            let data = res.data;

            alert(data.message);

            if (data.status === 1) {
                document.querySelector("#btnCancelar").click();
                actualizar();
            }
        }
        catch (error) {
            alert(error);
        }
    }

    async function guardar() {
        try {
            let juego = {
                titulo: titulo,
                descripcion: descripcion,
                plataforma: plataforma,
                precio: precio,
                categoria: categoria
            }

            let res = await axios.post("https://denny2023.azurewebsites.net/api/juegos", juego);
            let data = await res.data;

            alert(data.message);

            if (data.status === 1) {
                document.querySelector("#btnCancelar").click();
                actualizar();
                setTitulo("");
                setDescripcion("");
                setPlataforma("");
                setPrecio("");
                setCategoria("");
            }

        }
        catch (error) {
            alert(error);
        }
    }

    function cancelar(e) {
        e.preventDefault();
        e.stopPropagation();
        let form = document.querySelector("#formulario");
        form.classList.remove('was-validated');
    }

    return (
        <div>
            <form id="formulario" className="needs-validation" noValidate>
                {
                    id !== undefined ?
                        <div className="form-group mb-3">
                            <label className="form-label">ID:</label>
                            <input className="form-control" type="text" value={id} readOnly disabled />
                        </div>
                        :
                        ""
                }

                <div className="form-group mb-3">
                    <label className="form-label">Titulo:</label>
                    <input className="form-control" required type="text" disabled={del} value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Ingrese título" />
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Campo incorrecto</div>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Descripción:</label>
                    <input className="form-control" required type="text" disabled={del} value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Ingrese descripción" />
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Campo incorrecto</div>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Plataforma:</label>
                    <input className="form-control" required type="text" disabled={del} value={plataforma} onChange={(e) => setPlataforma(e.target.value)} placeholder="Ingrese plataforma" />
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Campo incorrecto</div>
                </div>
                <div style={{ display: id !== undefined ? 'flex' : 'block' }}>
                    <div className={`form-group mb-3 col-${id !== undefined ? '6' : '12'}`}>
                        <label className="form-label">Precio:</label>
                        <input className="form-control" required type="number" disabled={del} value={precio} onChange={(e) => setPrecio(e.target.value)} placeholder="Ingrese precio" />
                        <div className="valid-feedback">Correcto</div>
                        <div className="invalid-feedback">Campo incorrecto</div>
                    </div>
                    <div className={`form-group mb-3 col-${id !== undefined ? '6' : '12'}`}>
                        <label className="form-label">Categoría:</label>
                        <input className="form-control" required type="text" disabled={del} value={categoria} onChange={(e) => setCategoria(e.target.value)} placeholder="Ingrese categoría" />
                        <div className="valid-feedback">Correcto</div>
                        <div className="invalid-feedback">Campo incorrecto</div>
                    </div>
                </div>

                <div className='modal-footer form-group mb-3'>
                    <input onClick={(e) => enviar(e)} type="submit" className={`boton boton-${id === undefined ? "success" : del === true ? "danger" : "primary"}`} value={id === undefined ? "Guardar" : del === true ? "Eliminar" : "Editar"} />
                    <button id="btnCancelar" data-bs-dismiss="modal" onClick={(e) => cancelar(e)} className='boton boton-warning'>Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default JuegosFORM;