import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

function About() {

    return (
        <div>
            <Menu />
            <section className="inicio">
                <div className="imagn1">
                    <div className="imagn-circulo">
                        <span></span>
                        <span></span>
                        <div className="img-circulo">
                            <i class="fa-solid fa-info"></i>
                        </div>
                    </div>
                </div>
                <span></span>
                <span></span>
                <div className="inicio2">
                    <h3>Descripción de la Aplicación:</h3>
                    <p>
                        Desarrollar una aplicación Web con React que permita el registro y eliminación de una colección de artículos
                        con los que cuenta una tienda, debe de aplicardiseño web para la vista (Bootstrap, CSS u otro).
                        <ul>
                            <li>Tienda de Celulares.</li>
                            <li>Tienda de Juegos.</li>
                        </ul>
                        Puntos de Evaluación:
                        <ol>
                            <li>La aplicación debe de hacer uso de la biblioteca de JavaScript (React). </li>
                            <li>Debe aplicar HTML Y diseño a la aplicación.</li>
                            <li>La aplicación debe de realizar dos acciones como mínimo (Agregar y Eliminar).</li>
                        </ol>
                    </p>
                    <Link to={"/"} className="clic">Inicio</Link>
                </div>
                <div>
                    <div className="inicio1">
                        <Link to={"https://github.com/jersonamaya"}><i className="fa-brands fa-github"></i></Link>
                        <Link to={"/celulares"}><i className="fa-solid fa-mobile-screen-button"></i></Link>
                        <Link to={"/juegos"}><i className="fa-solid fa-gamepad"></i></Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;