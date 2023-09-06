import React from "react";

function Loading() {

    return (
        <div>
            <div style={{ 'marginTop': '15%', 'display': 'flex', 'justifyContent': 'center'}}>
                <div style={{ 'color': '#fff', 'fontSize': '60px', 'fontWeight': 'bold', 'marginBottom': '20px' }} >Cargando...</div>
                <div class="spinner-border" style={{ 'color': '#fff', 'justifyContent': 'center' }} role="status">
                    <span class="visually-hidden"></span>
                </div>
            </div>
        </div>
    )
}

export default Loading;