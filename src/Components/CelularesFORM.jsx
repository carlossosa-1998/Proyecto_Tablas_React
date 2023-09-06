import React, { useEffect, useState } from 'react';
import axios from "axios";

const CelularesFORM = ({ id, del, actualizar }) => {

    if (del !== true)
        del = false

    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [color, setColor] = useState("");
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [operadora, setOperadora] = useState("");

    useEffect(() => {

        if (id !== undefined)
            cargarCelular();
        else {
            setMarca("");
            setModelo("");
            setColor("");
            setPrecio("");
            setDescripcion("");
            setOperadora("");
        }
    }, [id])

    async function cargarCelular() {
        try {
            let res = await axios("https://denny2023.azurewebsites.net/api/celulares/" + id);
            let data = await res.data;

            setMarca(data.marca);
            setModelo(data.modelo);
            setColor(data.color);
            setPrecio(data.precio);
            setDescripcion(data.descripcion);
            setOperadora(data.operadora);

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
            else {
                eliminar();
            }

        }

    }

    async function eliminar() {
        if (window.confirm("¿Estás seguro de que deseas eliminar este registro?")) {
            try {
                let res = await axios.delete("https://denny2023.azurewebsites.net/api/celulares?id=" + id);
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
            const celular =
            {
                celularId: id,
                marca: marca,
                modelo: modelo,
                color: color,
                precio: precio,
                descripcion: descripcion,
                operadora: operadora
            }

            let res = await axios.put("https://denny2023.azurewebsites.net/api/celulares", celular);
            let data = await res.data;

            alert(data.message);

            if (data.status === 1) {
                document.querySelector("#btnCancelar").click();
                actualizar();
            }

        }
        catch (error) {
            alert(error);
            if (error.response.status === 404)
                document.querySelector("#btnCancelar").click();
        }
    }

    async function guardar() {
        try {
            const celular =
            {
                marca: marca,
                modelo: modelo,
                color: color,
                precio: precio,
                descripcion: descripcion,
                operadora: operadora
            }

            let res = await axios.post("https://denny2023.azurewebsites.net/api/celulares", celular);
            let datos = res.data;

            alert(datos.message);

            if (datos.status === 1) {
                document.querySelector("#btnCancelar").click();
                actualizar();
                setMarca("");
                setModelo("");
                setColor("");
                setPrecio("");
                setDescripcion("");
                setOperadora("");
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
            <form id="formulario" className='needs-validation' noValidate>
                <div style={{ 'display': 'flex' }}>
                    {
                        id !== undefined ?
                            <div className='form-group mb-3 col-6'>
                                <label className='form-label'>ID:</label>
                                <input type="text" value={id} readOnly disabled className="form-control" />
                            </div>
                            :
                            ""
                    }
                    <div className={`form-group mb-3 col-${id !== undefined ? '6' : '12'}`}>
                        <label className='form-label'>Marca:</label>
                        <input required type="text" value={marca} onChange={(e) => setMarca(e.target.value)} className="form-control" disabled={del} placeholder="Ingrese marca" />
                        <div className="valid-feedback">Correcto</div>
                        <div className="invalid-feedback">Campo incorrecto</div>
                    </div>
                </div>
                <div className='form-group mb-3'>
                    <label className='form-label'>Modelo:</label>
                    <input required type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} className="form-control" disabled={del} placeholder="Ingrese modelo" />
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Campo incorrecto</div>
                </div>
                <div style={{ 'display': 'flex' }}>
                    <div className='form-group mb-3 col-6'>
                        <label className='form-label'>Color:</label>
                        <input required type="text" value={color} onChange={(e) => setColor(e.target.value)} className="form-control" disabled={del} placeholder="Ingrese color" />
                        <div className="valid-feedback">Correcto</div>
                        <div className="invalid-feedback">Campo incorrecto</div>
                    </div>
                    <div className='form-group mb-3 col-6'>
                        <label className='form-label'>Precio:</label>
                        <input required type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} className="form-control" disabled={del} placeholder="Ingrese precio" />
                        <div className="valid-feedback">Correcto</div>
                        <div className="invalid-feedback">Campo incorrecto</div>
                    </div>
                </div>
                <div className='form-group mb-3'>
                    <label className='form-label'>Descripción:</label>
                    <input required type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className="form-control" disabled={del} placeholder="Ingrese descripción" />
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Campo incorrecto</div>
                </div>
                <div className='form-group mb-3'>
                    <label className='form-label'>Operadora:</label>
                    <input required type="text" value={operadora} onChange={(e) => setOperadora(e.target.value)} className="form-control" disabled={del} placeholder="Ingrese operadora" />
                    <div className="valid-feedback">Correcto</div>
                    <div className="invalid-feedback">Campo incorrecto</div>
                </div>

                <div className='modal-footer form-group mb-3'>
                    <input onClick={(e) => enviar(e)} type="submit" className={`boton boton-${id === undefined ? "success" : del === true ? "danger" : "primary"}`} value={id === undefined ? "Guardar" : del === true ? "Eliminar" : "Editar"} />
                    <button id="btnCancelar" data-bs-dismiss="modal" onClick={(e) => cancelar(e)} className='boton boton-warning'>Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default CelularesFORM;