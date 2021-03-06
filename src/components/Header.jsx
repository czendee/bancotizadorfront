// Importing Libraries
import React, { Fragment } from "react";
import logo from "../assets/img/logo.svg";
import logo2_h from "../assets/img/logo_log_2.jpg";

const Header = (props) => {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  function showData(){
    var data = props.getUserInfo()
    return `${data.user.name} - ${data.role.name}`
  }

  return (
    <Fragment>
      <div className="forma menu__">
        <div className="contenedor3 center">
          <nav className="forma sombra_menu">
            <a href="/" className="d30 left_">
              <img src={logo} className="logo_menu no_mov" />
              <img src={logo2_h} className="logo_menu center mov" />
            </a>
          
            <div className="menu_ d60 left_ t_right menu">
              <a href="/chargebacks" className="menu_a menu_a_1">
                REGLAS&nbsp;DE&nbsp;NEGOCIO
              </a>
              <a href="/chargebacks" className="menu_a menu_a_2">
                REPORTES
              </a>
              <a href="/chargebacks" className="menu_a menu_a_1">
                MANUALES
              </a>
              <a href="/chargebacks" className="menu_a menu_a_2">
                &#128276;
              </a>
              <a onClick={props.logOut} className="menu_a menu_a_2">
              {showData()} / SALIR
              </a>
            </div>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};

// Exporting component
export default Header;
