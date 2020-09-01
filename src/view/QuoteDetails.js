// Importing Libraries
// Importing Libraries
import React, { Fragment } from "react";
import close_m from '../assets/img/close.svg';
import Header from "../components/Header.jsx";

// Component
const UsersDetails = (props) => {
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
        
        
    <div>
   
    
  </div>
    


  <div className="forma slider_tab .slider_tab mar_t_5">
        <div className="contenedor3 center">
            <div className="forma">               
                <h1 className="forma left_ t_center mar_t_10">
                    USUARIO - DETALLE
                </h1>
            </div>
        </div>    
    </div>
    <div className="forma tit_it">
        <div className="contenedor3 center">
            <form className="forma orde_det">
                <div className="d30 left_">    
                    
                    <div className="forma inputs_filter mar_t_3">
                    <h4 className="forma t_left">Datos fiscales</h4> 
                        <div className="forma mar_b_2">
                            <label className="forma">Nombre del cliente (Razón Social)</label>
                            <input type="text" className="t_left" name="" placeholder="Onda Gamma S.A de C.V."/>
                        </div>
                        <div className="forma mar_b_2">
                            <label className="forma">Giro MCC</label>
                            <select className="select t_left">
                            <option value="">Seleciona tu opción</option>
                            <option>Agencias de Viajes</option>
                            <option>Aseguradoras</option>
                            <option>Beneficencia</option>
                            <option>Comida Rapida</option>
                            <option>Colegios y Universidades</option>
                            <option>Entretenimiento</option>
                            <option>Estacionamientos</option>
                            <option>Farmacias</option>
                            <option>Gasolineras</option>
                            <option>Gobierno</option>
                            <option>Hospitales</option>
                            <option>Hoteles</option>
                            <option>Otros</option>
                            <option>Peaje</option>
                            <option>Restaurantes</option>
                            <option>Renta de Autos</option>
                            <option>Supermercados</option>
                            <option>Telecomunicaciones</option>
                            <option>Transporte Aereo</option>
                            <option>Transporte Terrestre de Pasajeros</option>
                            <option>Ventas al detalle (Retail)</option>
                            </select>
                        </div>

                        <h4 className="forma t_left">Datos del contacto del comercios</h4> 
                        <div className="forma mar_b_2">
                            <label className="forma">Nombre y Apellidos</label>
                            <input type="text" className="t_left" name="" placeholder="Victor Erick Rodríguez Gil"/>
                        </div>
                        <div className="forma mar_b_2">
                            <label className="forma">E-mail</label>
                            <input type="text" className="t_left" name="" placeholder="erodriguez@ondagamma.com"/>
                        </div>
                        <div className="forma mar_b_2">
                            <label className="forma">Teléfono</label>
                            <input type="text" className="t_left" name="" placeholder="55 1492 5259"/>
                        </div>
                    </div>
                </div>
                <div className="d70 left_">
                    <div className="d90 right_">
                        <table className="forma terminales o_c_d mar_t_7">
                            <tbody className="forma">
                                <tr className="forma">
                                    <th className="t_left">
                                    MEDIO DE PAGO
                                    </th>
                                    <th>
                                    COMISIÓN VARIABLE
                                    </th>
                                    <th>
                                    COMISIÓN FIJA
                                    </th>
                                    <th>
                                    DESCUENTO
                                    </th>
                                    
                                </tr>
                                <tr className="forma">
                                    <td className="t_left">
                                        <b>Visa/MasterCard</b>
                                    </td>
                                    <td>
                                        <input type="numbrer" placeholder="2.90%"/>    
                                    </td>
                                    <td>
                                        <input type="numbrer" placeholder="$2.50"/>
                                    </td>
                                    <td>
                                      <select>
                                          <option>0%</option>
                                          <option>5%</option>
                                          <option>10%</option>
                                          <option>15%</option>
                                      </select>
                                    </td>
                                    
                                </tr>
                                <tr className="forma">
                                    <td className="t_left">
                                        <b>AMEX</b>
                                    </td>
                                    <td>
                                        <input type="numbrer" placeholder="2.90%"/>    
                                    </td>
                                    <td>
                                        <input type="numbrer" placeholder="$2.50"/>
                                    </td>
                                    <td>
                                      <select>
                                          <option>0%</option>
                                          <option>5%</option>
                                          <option>10%</option>
                                          <option>15%</option>
                                      </select>
                                    </td>
                                    
                                </tr>
                                <tr className="forma">
                                    <td className="t_left">
                                        <b>Oxxo</b>
                                    </td>
                                    <td>
                                        <input type="numbrer" placeholder="2.90%"/>    
                                    </td>
                                    <td>
                                        <input type="numbrer" placeholder="$2.50"/>
                                    </td>
                                    <td>
                                      <select>
                                          <option>0%</option>
                                          <option>5%</option>
                                          <option>10%</option>
                                          <option>15%</option>
                                      </select>
                                    </td>
                                    
                                </tr>
                                <tr className="forma">
                                    <td className="t_left">
                                        <b>Paycash</b>
                                    </td>
                                    <td>
                                        <input type="numbrer" placeholder="2.90%"/>    
                                    </td>
                                    <td>
                                        <input type="numbrer" placeholder="$2.50"/>
                                    </td>
                                    <td>
                                      <select>
                                          <option>0%</option>
                                          <option>5%</option>
                                          <option>10%</option>
                                          <option>15%</option>
                                      </select>
                                    </td>
                                    
                                </tr>
                                <tr className="forma">
                                    <td className="t_left">
                                        <b>SPEI</b>
                                    </td>
                                    <td>
                                        <input type="numbrer" placeholder="2.90%"/>    
                                    </td>
                                    <td>
                                        <input type="numbrer" placeholder="$2.50"/>
                                    </td>
                                    <td>
                                      <select>
                                          <option>0%</option>
                                          <option>5%</option>
                                          <option>10%</option>
                                          <option>15%</option>
                                      </select>
                                    </td>
                                </tr>
                                <tr className="forma">
                                    <td className="t_left">
                                        <b>Store Pay</b>
                                    </td>
                                    <td>
                                        <input type="numbrer" placeholder="2.90%"/>    
                                    </td>
                                    <td>
                                        <input type="numbrer" placeholder="$2.50"/>
                                    </td>
                                    <td>
                                      <select>
                                          <option>0%</option>
                                          <option>5%</option>
                                          <option>10%</option>
                                          <option>15%</option>
                                      </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="forma">
                    <div className="d90 center">
                        <div className="forma">
                            <input type="submit" className="right_ mar_t_3 bot_value bot_value2" value="GENERAR NUEVA COTIZACIÓN" />
                        </div>
                    </div>
                </div>
            </form>  
        </div> 
    </div>
     
        
    </div>
      </header>
    </div>
    </Fragment>
  );
}

// Exporting component
export default UsersDetails;
