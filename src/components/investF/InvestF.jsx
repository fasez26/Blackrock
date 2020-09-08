import React from "react";
import { withRouter } from "react-router-dom";
import "../../assets/styles/Styles.css";
import Youth from "../../assets/images/Youth.svg";
import Casa from "../../assets/images/Casa.svg";
import Negocio from "../../assets/images/Negocio.svg";
import chevron_right from "../../assets/images/chevron_right.svg";
import  NiveldeRiesgo from "../../assets/images/NiveldeRiesgo.svg";
import Nr from "../../assets/images/Nr.svg";
import ganancias from "../../assets/images/ganancias.svg";
import catalogoFondos from "../../assets/images/catalogoFondos.svg";
import agente from "../../assets/images/agente.svg";
import {AppBar, Toolbar, Typography, Grid, makeStyles, TextField } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: "#136EAC",
        paddingTop: "2em",
      },
}))
function InvestF({history}) {
    const classes = useStyles();
    const closeInvF=() =>{
      history.push("./HomeSI")
    } 
  return (
    <div className="background">
        <AppBar  position="sticky" className={classes.header}>
        <Toolbar>
          <ArrowBackIosIcon  onClick={closeInvF}>
          
          </ArrowBackIosIcon>
          <Typography  variant="h5">Fondos de Inversión</Typography>
        </Toolbar>
      </AppBar>

      <div>
        <center>
            
          <h1 className="p1"> ¿Quieres comenzar a invertir?</h1>
        </center>
        <p className="p2"> Los favoritos para comenzar </p>

        <div className="card-fond">
        <div className="marg">
          <strong>BLKGUB1</strong>
          <br></br>
          para <strong>INICIAR</strong>
          <p>Aprende ganando</p>
          <p>Plazo mayor a 1 mes</p>
          </div>
          <img src={NiveldeRiesgo} className="ellips" />
          <img src={Youth} className="youth" />
         
                 </div>

        <div className="card-blkmas">
          <div className="marg">
          <strong>BLK1MAS</strong>
          <br></br>
          para <strong>TU PROPIA CASA</strong>
          <p>Adios rentas</p>
          <p>Plazo 3 mes</p>
          </div>
          
          <img src={Casa} className="casa" />
          <img src={NiveldeRiesgo} className="ellips" />
          
 
        </div>

        <div className="gold">
        <div className="marg">
          <strong>GOLD2+</strong>
          <br></br>
          para <strong>TU NEGOCIO</strong>
          <p>
            Genera tu propio<br></br> financiamiento
          </p>
          <p>Plazo mas de 2 años</p>
          </div>
          <img src={Negocio} className="casa" />
          <img src={Nr} className="ellips12" />
         
                </div>
      </div>
      <center>
        <p className="p">Encuentra el fondo para ti</p>
      </center>

      <div className="menua">
        <img src={ganancias} className="ganancias" />
        <img src={catalogoFondos} className="catalogoFondos" />
        <img src={agente} className="agente" />
        
      </div>
    </div>
  );
}

export default withRouter(InvestF);
