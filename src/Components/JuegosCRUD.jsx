import React, {useState, useEffect} from 'react';
import Menu from './Menu';
import axios from "axios";
import Tabla from './Tabla';
import JuegosFORM from "./JuegosFORM";
import Loading from './Loading';

const JuegosCRUD = () => {
  
  const[juegos, setJuegos] = useState();
  const[id, setId] = useState();
  const[del, setDel] = useState();

  function configurar(id, del){
    setId(id);
    setDel(del);
  }

  useEffect(() => {
    cargarJuegos();
  }, [])

  async function cargarJuegos(){
    try{
      let res = await axios("https://denny2023.azurewebsites.net/api/juegos");
      let data = await res.data;

      setJuegos(data);
    }
    catch(error){
      alert(error);
    }
  }

  return (
    <div>
        <Menu />
        {
          juegos === undefined ?
          <div>
            <Loading></Loading>
          </div>
          :
          <Tabla lista={juegos} evento={configurar} controlador="juegos" cols={["Juego ID", "Título", "Descripción", "Plataforma", "Precio", "Categoría"]} />
        }

        <div className="modal fade" id="juegosModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content" style={{'color': '#000'}}>
              <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Formulario Juego</h1>
                  <button type="button" className="boton-close" data-bs-dismiss="modal" aria-label="Close">x</button>
              </div>
              <div className="modal-body">
                  <JuegosFORM Form id={id} del={del} actualizar={cargarJuegos} />
              </div>
              </div>
          </div>
        </div>
        
    </div>
  )
}

export default JuegosCRUD;