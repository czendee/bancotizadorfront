// Importing Libraries
// Importing Libraries
import React, { Fragment } from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import FiltroReportes from "../components/reportes/Filtro.jsx";
import TablaReportes from "../components/reportes/Tabla.jsx";
import Paginador from "../components/Paginador.jsx";
// Component
const History = (props) => {
    var logOut = () => {
        localStorage.clear();
        props.history.push("/quote");
        return
      };

      var getUserInfo = () => {
        var storage = localStorage.getItem('token-chargebacks-jwt');

        var base64Url = storage.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        console.log(jsonPayload)
        return JSON.parse(jsonPayload);
      }; 

  return (
    <Fragment>
    <div className="App">
      <header className = "App-header">
      <div className="App">

        <Header logOut={logOut} getUserInfo={getUserInfo}></Header>
        <div className="forma slider_tab mar_t_5">
            <div className="contenedor3 center">
                <div className="forma">               
                    <h1 className="forma left_ t_center mar_t_10">
                        COTIZACIONES
                    </h1>
                </div>
            </div>    
        </div>
        <FiltroReportes></FiltroReportes>
        <div className="contenido_tabs forma">
        
            
            <div className="forma">
                <div className="d90 center">
                    <TablaReportes></TablaReportes>
                </div>    
            </div>
        <div className="bord_tab_top forma">&nbsp;</div>
        <Paginador></Paginador>
        
        </div>
        
   
    

      </div>
      <Footer></Footer>
      </header>
    </div>
    </Fragment>
  );
}

// Exporting component
export default History;
