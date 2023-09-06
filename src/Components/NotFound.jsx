import React from "react";
import Menu from "./Menu";
import './../notfound.css';

function NotFound() {

    return (
        <div>
            <Menu />
            <div className="body-not-found">
                <div style={{'marging':'50px'}}>
                    <p className="texto">404</p>
                    <p className="texto">NOT FOUND</p>
                </div>
                <div className="container">
                    <div className="nube"></div>
                </div>
                <div>
                    <div class="d-flex justify-content-center">
                        <div class="spinner spinner-border" role="status">
                            <span class="visually-hidden"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;