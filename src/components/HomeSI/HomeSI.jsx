import React from "react";
import { Container } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/styles";
import "../../assets/styles/Styles.css";
import MaskGroup from "../../assets/images/MaskGroup.svg";
import piggyBank from "../../assets/images/piggyBank.svg";
import handplantcoin from "../../assets/images/handplantcoin.svg";

function HomeSI() {
  return (
    <div className="container">
      <div className="barra">
        <nav className="menu1">
          <br />
          <div className="title">
            <div className="title1">
              <a className="name">EDUCACION FINANCIERA</a>
            </div>
          </div>
        </nav>
      </div>
      <div classname="slaido">
        <img src={MaskGroup} />
      </div>
      <div className="card-saving">
        <center><h1 className="text">Ahorros</h1></center>
        <img  src={piggyBank} className="piggy"/>
        {/* <p>texto informativo</p> */}
        
      </div>
      <div className="card-inv">
        <center><h2 className="text1">Fondos de inversión</h2></center>
        <img src={handplantcoin} className="handplantcoin"/>
        {/* <p classname="lorem">texto informativo</p> */}
      </div>
    </div>
  );
}

export default HomeSI;
