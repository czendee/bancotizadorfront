// Importing Libraries
// Importing Libraries
import React, { Fragment } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
// Component

class HomeClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
            loading:false,
            pokemon:[],
            url:'https://pokeapi.co/api/v2/pokemon/'
        }
    }
    componentDidMount(){
        this.getPokemon();
    }
    getPokemon = () => {
            this.setState({loading:true})
            fetch(this.state.url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    pokemon: res.results,
                    url: res.next,
                    loading:false
                })

         });
    };

}

const Home = (props) => {

   
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
        
        <form className="forma validar" name='' action='tareas.html'>
            <div className="contenedor3 center pad_lr_30">  
                <h2 className="forma">
                    Por favor llena los campos solicitados<br/><small><span>*</span> Campos necesarios</small>
                </h2>
                <div className="forma">
                    <div className="forma mar_t_1  mar_b_3 cambio_t">
                        <div className="d30 left_">
                           <h3 className="titulo forma fiscales">Datos fiscales</h3>
                        </div>
                        <div className="d70 left_ fiscales_sec">
                         &nbsp;
                        </div>
                    </div>
                    <div className="forma">
                       <div className="d50 left_ mov100">
                        <div className="d80 center">

                            <label className="forma"><span>*</span> Nombre del cliente (Razón Social)</label>
                            <input className="forma obligatorio" type="text" name="name" id="name" value="" title='Por favor Ingrese Nombre del cliente'/>
                        </div>
                        </div>

                        <div className="d50 left_ mov100">
                            <div className="d80 center">
                                <label className="forma"><span>*</span> Giro RFC</label>
                                
                                <input className="forma obligatorio" type="text" name="giro_rfc" id="giro_rfc" value="" title='Por favor Selecione Giro'/>
                            </div>
                        </div>
                    </div>
                    <div className="forma">   
                        <div className="d50 left_ mov100">
                            <div className="d80 center">
                                <label className="forma"><span>*</span> RFC</label>
                                <input className="forma obligatorio" type="text" name="rfc" id="rfc" value="" value="" title='Por favor Ingrese RFC'/>
                            </div>
                        </div>

                        <div className="d50 left_ mov100">
                            <div className="d80 center">
                                <label className="forma"><span>*</span> Giro MCC</label>
                                <select className="forma obligatorio" name="mcc" id="mcc" value="" title='Por favor Selecione Giro MCC'>
                                        <option value=''>Seleciona tu opción</option>
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
                        </div>
                    </div>  
 
                        <div className="d50 left_ mov100">
                            <div className="d80 center">
                                <label className="forma"><span>*</span> Personalidad fiscal</label>
                                <select className="forma obligatorio" name="mcc" id="mcc" value="" title='Por favor Selecione Giro MCC'>
                                        <option value=''>Seleciona tu opción</option>
                                        <option>Actividad Física con Actividad Empresarial</option>
                                        <option>Persona Moral</option>
                                        <option>ONG Autorizada</option>
                                </select>
                            </div>
                        </div>
                
                    <div className="d50 left_ mov100">
                        <div className="d80 center">
                            <label className="forma"><span>*</span> Nombre comercial</label>
                            <input className="forma obligatorio" type="text" name="comercial" id="comercial" value="" title='Por favor Ingrese Nombre comercial'/>
                        </div>
                    </div>
                    <div className="d50 left_ mov100">
                        <div className="d80 center">
                            <label className="forma"><span>*</span> Página web del comercio</label>
                            <input className="forma obligatorio" type="text"  name="web" id="web" value="" title='Por favor Ingrese Página web' />
                        </div>
                    </div>
                    
                    <div className="forma mar_t_5 mar_b_5 left_ cambio_t">
                        <div className="d30 left_">
                           <h3 className="titulo forma fiscales">Datos del contacto del comercio</h3>
                        </div>
                        <div className="d70 left_ personales_sec">
                         &nbsp;
                        </div>
                    </div>

                    <div className="d50 left_ mov100">
                        <div className="d80 center">
                            <label className="forma"><span>*</span> Nombre y Apellidos</label>
                            <input className="forma obligatorio" type="text" id="nom_ap"  name="nom_ap" value="" title='Por favor Ingrese Nombre y Apellidos' />
                        </div>
                    </div>
                    <div className="d50 left_ mov100">
                        <div className="d80 center">
                            <label className="forma"><span>*</span> E-mail</label>
                            <input className="forma obligatorio" type="email" id="email"  name="email" value="" title='Por favor Ingrese E-mail'/>
                        </div>
                    </div>
                    <div className="d50 left_ mov100">
                        <div className="d80 center">
                            <label className="forma"><span>*</span> Puesto</label>
                            <input className="forma obligatorio" type="text" id="puesto"  name="puesto" value="" title='Por favor Ingrese Puesto'/>
                        </div>
                    </div>
                    <div className="d50 left_ mov100">
                        <div className="d80 center">
                            <label className="forma"><span>*</span> Teléfono</label>
                            <input className="forma obligatorio" type="tel" id="tel"  name="tel" value=""  title='Por favor Ingrese Teléfono' />
                        </div>
                    </div>

                    <div className="forma mar_t_5 mar_b_2 left_ cambio_t">
                        <div className="d30 left_">
                           <h3 className="titulo forma fiscales">Datos de conversión</h3>
                        </div>
                        <div className="d70 left_ conversion_sec">
                             &nbsp;
                        </div>
                    </div>  

                    <div className="forma">
                        <div className="d50 left_ mov100">
                            <div className="d80 center">
                                <label className="forma"><span>*</span> Número de transacciones por mes</label>
                                
                                
                                 <input className="forma obligatorio" type="number" id="numero_de_trans"  name="numero_de_trans" value="" title='Por favor Ingrese Número de transacciones por mes' />
                            </div>
                            <div className="d80 center">
                                <label className="forma"><span>*</span> Ticket promedio</label>
                                
                                
                                <input className="forma obligatorio" type="number" id="ticket"  name="ticket" value="" title='Por favor Ingrese Ticket promedio' />

                            </div>
                            <div className="forma mar_t_3">
                                <div className="d80 center">
                                    <div className="d70 left_">
                                        <label className="forma">Monto procesado por mes:&nbsp;</label>
                                    </div>
                                    <div className="d30 left_ color_b monto_por_mes">
                                       <p>$0.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d50 left_ border_l_px mov100">
                            <div className="d80 center">    
                                
                                <div className="forma">
                                    <div className="d50 left_">
                                        <div className="d80 center">
                                            <div className="forma">
                                                <label className="forma"><span>*</span> Meses sin<br/>&nbsp;&nbsp;&nbsp;intereses</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d50 left_ color_fff">
                                        
                                        <div className="forma">
                                            <input className="input2 meses" type="checkbox" id="test1_" name="meses1" value="3 meses"/>
                                            <label for="test1_"> 3 meses</label>
                                        </div>
                                        <div className="forma">
                                            <input className="input2 meses" type="checkbox" id="test2_" name="meses2" value="6 meses" />
                                            <label for="test2_"> 6 meses</label>
                                        </div>   
                                        <div className="forma">
                                            <input className="input2 meses" type="checkbox" id="test3_" name="meses3" value="9 meses" />
                                            <label for="test3_"> 9 meses</label>
                                        </div>   
                                        <div className="forma">
                                            <input className="input2 meses" type="checkbox" id="test4_" name="meses4" value="12 meses"  />
                                            <label for="test4_"> 12 meses</label>
                                        </div>   
                                    </div>

                                    <div className="forma mar_t_3 left_">
                                        <div className="d80 center">
                                            <div className="forma">
                                                <input className="input2 meses" type="checkbox" id="test1_" name="meses1" value="3 meses"/>
                                                <label className="forma"><span>*</span> Experiencia E-commerce</label>
                                            </div>
                                        </div>
                                    </div>
                                

                                </div>    
                            </div>
                        </div>

                        <div className="forma">
                            <div className="forma mar_t_5 mar_b_2 left_ cambio_t">
                                <div className="d30 left_">
                                   <h3 className="titulo forma fiscales"><span>*</span> Medios de pago</h3>
                                </div>
                                <div className="d70 left_ pago_sec">
                                     &nbsp;
                                </div>
                            </div> 
                            <div className="d80 center">      
                                <div className="forma">
                                    <div className="d33 left_ color_fff mov100">
                                        <div className="forma">
                                            <input className="input2 medios_dp" type="checkbox" id="test1" name="medio_de_pago1" value="Visa / Master Card" />
                                            <label for="test1"> Visa / Master Card</label>
                                        </div>                                          
                                        <div className="forma">
                                            <input className="input2 medios_dp" type="checkbox" id="test2" name="medio_de_pago2" value="AMEX" />
                                            <label for="test2"> AMEX</label>
                                        </div>   

                                        <div className="forma">
                                            <input className="input2 medios_dp" type="checkbox" id="test3" name="medio_de_pago3" value="OXXO" />
                                            <label for="test3"> OXXO</label>
                                        </div> 
                                        <div className="forma">
                                            <input className="input2 medios_dp" type="checkbox" id="test4" name="medio_de_pago4" value="Paycash" />
                                            <label for="test4"> Paycash</label>
                                        </div>
                                         <div className="forma">
                                            <input className="input2 medios_dp" type="checkbox" id="test_5" name="medio_de_pago5" value="SPEI" />
                                            <label for="test_5"> SPEI</label>
                                        </div> 
                                        <div className="forma mar_t_2">
                                                <h3 className="titulo forma fiscales mar_b_1">Naturaleza</h3>
                                             </div>
                                             <div className="forma">
                                                 <input className="input2 natura" type="checkbox" id="test8" name="naturaleza1" value="Nacional" />
                                                 <label for="test8"> Nacional</label>
                                             </div>                                          
                                             <div className="forma">
                                                 <input className="input2 natura" type="checkbox" id="test9" name="naturaleza2" value="Internacional" />
                                                 <label for="test9"> Internacional</label>
                                             </div>                                                       
                                    </div>
                                    <div className="d33 left_ border_l_px color_fff mov100">
                                        <div className="d80 right_">
                                                <div className="forma">
                                                   <h3 className="titulo forma fiscales mar_b_1">Operativa</h3>
                                                </div>
                                            <div className="forma">
                                                <input className="input2 operat" type="checkbox" id="test5" name="operativa1" value="Ecommerce" />
                                                <label for="test5"> Cobro único</label>
                                            </div>                                          
                                            <div className="forma">
                                                <input className="input2 operat" type="checkbox" id="test6" name="operativa2" value="Recurrencia" />
                                                <label for="test6"> Cobro recurrente automático</label>
                                            </div>   
                                            <div className="forma">
                                                <input className="input2 operat" type="checkbox" id="test7" name="operativa3" value="Monto" />
                                                <label for="test7"> Cobro recurrente automático on demand</label>
                                            </div>    
                                            
                                             <div className="forma mar_t_2 S2">
                                                <h3 className="titulo forma fiscales mar_b_1">Modelo</h3>
                                                                                       
                                                <div className="forma">
                                                    <input className="radio" type="radio" name="n2" id="id4" />
                                                    <label for="id4"> Módelo Agregador</label>
                                                </div> 
                                                <div className="forma">
                                                    <input className="radio" type="radio" name="n2" id="id5" />
                                                    <label for="id5"> Modelo Integrador</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d33 left_ border_l_px color_fff mov100">
                                        <div className="d80 right_">
                                            <div className="forma">
                                               <h3 className="titulo forma fiscales mar_b_1">Adquisición</h3>
                                            </div>
                                            <div className="forma">
                                                <input className="input2 natura" type="checkbox" id="test16" name="naturaleza1" value="Plataforma Web" />
                                                <label for="test16"> Plataforma Web</label>
                                            </div>                                          
                                            <div className="forma">
                                                <input className="input2 natura" type="checkbox" id="test17" name="naturaleza2" value="APP Movil" />
                                                <label for="test17"> APP Movil</label>
                                            </div> 
                                            <div className="forma">
                                                <input className="input2 natura" type="checkbox" id="test18" name="naturaleza2" value="IVR" />
                                                <label for="test18"> IVR</label>
                                            </div> 
                                            <div className="forma">
                                                <input className="input2 natura" type="checkbox" id="test19" name="naturaleza2" value="Call Center Propio" />
                                                <label for="test19"> Call Center Propio</label>
                                            </div> 
                                            <div className="forma">
                                                <input className="input2 natura" type="checkbox" id="test20" name="naturaleza2" value="Call Center Comisión" />
                                                <label for="test20"> Call Center Comisión</label>
                                            </div> 
                                            <div className="forma">
                                                <input className="input2 natura" type="checkbox" id="test21" name="naturaleza2" value="Facers. Toma de datos por APP" />
                                                <label for="test21"> Facers.<br/>Toma de datos por APP</label>
                                            </div>   
                                            <div className="forma">
                                                <input className="input2 natura" type="checkbox" id="test22" name="naturaleza2" value="Facers. Toma de datos escrito" />
                                                <label for="test22"> Facers.<br/>Toma de datos escrito</label>
                                            </div>  
                                            <div className="forma">
                                                <input className="input2 natura" type="checkbox" id="test23" name="naturaleza2" value="Establecimiento" />
                                                <label for="test23"> Establecimiento</label>
                                            </div> 
                                            <div className="forma">
                                                <input className="input2 natura" type="checkbox" id="test24" name="naturaleza2" value="Solicitudes de Pago" />
                                                <label for="test24"> Solicitudes de Pago</label>
                                            </div> 
                                        </div>    
                                    </div>    
                                </div>
                            </div>
                        </div>
                        <div className="forma mar_t_10 mar_b_10">
                            <input type="submit" className="cotizar"/>
                        </div>
                    </div>
                </div>

            </div>    
        </form>
        
    </sections> 
     <Footer></Footer>
        
    </div>
      </header>
    </div>
    </Fragment>
  );
}

// Exporting component
export default Home;
