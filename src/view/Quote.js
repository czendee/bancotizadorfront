// Importing Libraries
// Importing Libraries
import React, { Fragment } from "react";

import alert from '../assets/img/adv2.svg';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

// Component
const Quote = (props) => {
   
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
    


  <sections className="parallax">   
        <form className="forma validar">
            <div className="contenedor3 center pad_lr_30">  
                <h2 className="forma">
                    Nivel de riesgo <span id='texto_nivel'> ALTO </span> <img className="adv" src={alert} id='img_icono'/>
                </h2>
                <div className="forma">
                    <div className="forma mar_b_3">
                        <div className="d30 left_">
                           <h3 className="titulo forma fiscales">Datos de sistemas</h3>
                        </div>
                        <div className="d70 left_ sistems_sec">
                         &nbsp;
                        </div>
                    </div>
                    <div className="forma">
                       <div className="d50 left_ mov100 line_r_1">
                        <div className="d80 center">
                            <input className="input2 meses" type="checkbox" id="test25" name="meses1" value="SiftScience" checked/>
                            <label id="right" className="test25 right_" for="test25">¿SiftScience?</label>
                        </div>
                        </div>

                        <div className="d50 left_ mov100">
                            <div className="d80 center">
                                <input className="input2 meses" type="checkbox" id="test26" name="meses1" value="3DSecure"/>
                                <label for="test26">¿3DSecure?</label>
                            </div>
                        </div>
                        <div className="forma mar_t_5 left_">
                        <div className="forma">
                           <h3 className="titulo forma fiscales t_center" id='texto_ley'></h3>
                        </div>
                    </div>
                    </div>
                    

                    <div className="forma mar_t_5 mar_b_5 left_">
                        <div className="d30 left_">
                           <h3 className="titulo forma fiscales">Datos de costos</h3>
                        </div>
                        <div className="d70 left_ conversion_sec">
                         &nbsp;
                        </div>
                    </div>

                    <div className="forma">
                        <table className="forma t_center" border="1" bordercolor="#a7adb2">
                            <thead className="forma center">
                                <tr className="forma">
                                    <td className="d25 left_"><b>Medio de pago</b></td>
                                    <td className="d25 left_">Comisión variable</td>
                                    <td className="d25 left_">Comisión fija</td>
                                    <td className="d25 left_">Descuento</td>
                                </tr>
                            </thead>
                            <tbody className="forma" id="tabla_cotizador">
                                <tr className="forma">
                                    <td className="d25 left_"><b>Visa/MasterCard</b></td>
                                    <td className="d25 left_ pad_none"><input type="number" className="inp_num" placeholder="2.90%"/></td>
                                    <td className="d25 left_ pad_none"><input type="number" className="inp_num" placeholder="$2.50%"/></td>
                                    <td className="d25 left_ nopad">
                                        <select className="forma" name="Descuento Visa/MasterCard" id="dvm" value="" title='Descuento Visa/MasterCard'>
                                            <option>0%</option>
                                            <option>5%</option>
                                            <option>10%</option>
                                            <option>15%</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr className="forma">
                                    <td className="d25 left_"><b>AMEX</b></td>
                                    <td className="d25 left_ pad_none"><input type="number" className="inp_num" placeholder="4.50%"/></td>
                                    <td className="d25 left_ pad_none"><input type="number" className="inp_num" placeholder="$2.50"/></td>
                                    <td className="d25 left_ nopad">
                                        <select className="forma" name="Descuento AMEX" id="damx" value="" title='Descuento AMEX'>
                                            <option>0%</option>
                                            <option>5%</option>
                                            <option>10%</option>
                                            <option>15%</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr className="forma">
                                    <td className="d25 left_"><b>Oxxo</b></td>
                                    <td className="d25 left_ pad_none"><input type="number" className="inp_num" placeholder="3.00%"/></td>
                                    <td className="d25 left_ pad_none"><input type="number" className="inp_num" placeholder="$2.50"/></td>
                                    <td className="d25 left_ nopad">
                                        <select className="forma" name="Descuento OXXO" id="dox" value="" title='Descuento OXXO'>
                                            <option>0%</option>
                                            <option>5%</option>
                                            <option>10%</option>
                                            <option>15%</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr className="forma">
                                    <td className="d25 left_"><b>Paycash</b></td>
                                    <td className="d25 left_ pad_none"><input type="number" className="inp_num" placeholder="0.00%"/></td>
                                    <td className="d25 left_ pad_none"><input type="number" className="inp_num" placeholder="$20.00"/></td>
                                    <td className="d25 left_ nopad">
                                        <select className="forma" name="Descuento Paycash" id="dpy" value="" title='Descuento Paycash'>
                                            <option>0%</option>
                                            <option>5%</option>
                                            <option>10%</option>
                                            <option>15%</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr className="forma">
                                    <td className="d25 left_"><b>SPEI</b></td>
                                    <td className="d25 left_ pad_none"><input type="number" className="inp_num" placeholder="2.00%"/></td>
                                    <td className="d25 left_ pad_none"><input type="number" className="inp_num" placeholder="$8.50"/></td>
                                    <td className="d25 left_ nopad">
                                        <select className="forma" name="Descuento SPEI" id="dspi" value="" title='Descuento SPEI'>
                                            <option>0%</option>
                                            <option>5%</option>
                                            <option>10%</option>
                                            <option>15%</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr className="forma">
                                    <td className="d25 left_"><b>Store Pay</b></td>
                                    <td className="d25 left_ pad_none"><input type="number" className="inp_num" placeholder="0.00%"/></td>
                                    <td className="d25 left_ pad_none"><input type="number" className="inp_num" placeholder="$20.00"/></td>
                                    <td className="d25 left_ nopad">
                                        <select className="forma" name="Descuento Store Pay" id="dstp" value="" title='Descuento Store Pay'>
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
                    
                    <div className="forma">
                        
                        

                        
                        <div className="forma mar_t_10 mar_b_10">
                            <input type="button" className="cotizar" id='propuesta' value="PROPUESTA"/>
                        </div>
                    </div>
                </div>

            </div>    
        </form>
    </sections>
     
        
    </div>
    <Footer></Footer>
      </header>
    </div>
    </Fragment>
  );
}

// Exporting component
export default Quote;
