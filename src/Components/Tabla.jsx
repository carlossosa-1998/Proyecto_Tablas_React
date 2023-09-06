import React from 'react'

const Tabla = ({ cols, controlador, lista, evento }) => {

    /*
    useEffect(() => {
        //console.log(lista)

        console.log(Object.values(lista[0]))
    }, [])*/

    return (
        <div className='tabla'>
            <table className='table align-right table-hover' style={{'color': '#fff'}}>
                <thead>
                    <tr>
                        <th>
                            <button className='boton boton-success' onClick={() => evento()} data-bs-toggle="modal" data-bs-target={`#${controlador}Modal`}>Nuevo</button>
                        </th>
                        {
                            cols.map((value, index) => {
                                return <th key={index}>{value}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        lista.map((value, index) => {
                            return <tr key={index}>
                                <td>
                                    <button className='boton boton-primary' onClick={() => evento(Object.values(value)[0])} data-bs-toggle="modal" data-bs-target={`#${controlador}Modal`}>Editar</button>
                                    <button className='boton boton-danger' onClick={() => evento(Object.values(value)[0], true)} data-bs-toggle="modal" data-bs-target={`#${controlador}Modal`}>Eliminar</button>
                                </td>
                                {Object.values(value).map((value2, index2) => {
                                    return <td key={index2}>{value2}</td>
                                })}
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Tabla;