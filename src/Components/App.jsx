import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CelularesCRUD from "./CelularesCRUD";
import Home from "./Home";
import JuegosCRUD from "./JuegosCRUD";
import NotFound from "./NotFound";
import About from "./About";

function App(){

    

    return(
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/celulares" element={<CelularesCRUD />} />
                <Route path="/juegos" element={<JuegosCRUD />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;