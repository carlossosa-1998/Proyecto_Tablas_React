import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand boton-menu" style={{'fontSize': '40px', 'marginLeft': '45px'}} to={"/"}><i className=" fa fa-brands fa-500px"></i></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item boton-menu">
                                <Link className="nav-link active" to={"/"}>Inicio</Link>
                            </li>
                            <li className="nav-item  boton-menu">
                                <Link className="nav-link active" to={"/about"}>Acerca de</Link>
                            </li>
                            <li className="nav-item  boton-menu">
                                <Link className="nav-link active" to={"/celulares"}>Celulares</Link>
                            </li>
                            <li className="nav-item  boton-menu">
                                <Link className="nav-link active" to={"/juegos"}>Juegos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Menu;