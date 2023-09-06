import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

function Home() {

    return (
        <div>
            <Menu />
            <section className="inicio">
                <div>
                    <div className="inicio1">
                        <Link to={"https://github.com/jersonamaya"}><i className="fa-brands fa-github"></i></Link>
                        <Link to={"/celulares"}><i className="fa-solid fa-mobile-screen-button"></i></Link>
                        <Link to={"/juegos"}><i className="fa-solid fa-gamepad"></i></Link>
                    </div>
                </div>
                <div className="inicio2">
                    <h1>¡Hola!</h1>
                    <h3>Tablas de celulares y juegos.</h3>
                    <p>Esta es una Aplicación Web con React que permite el registro y eliminación de una colección de artículos
                        con los que cuenta una tienda.
                    </p>
                    <Link to={"/about"} className="clic">Acerca de</Link>
                </div>
                <div className="imagn1">
                    <div className="imagn-circulo">
                        <span></span>
                        <span></span>
                        <div className="img-circulo">
                            <i class="fa-solid fa-store"></i>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;