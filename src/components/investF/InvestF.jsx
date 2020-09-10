import React from "react";
import { withRouter } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Footer from "../Footer/Footer";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Youth from "../../assets/images/PlantaCreciendo.svg";
import Casa from "../../assets/images/ProbarCoin.svg";
import Negocio from "../../assets/images/Casita.svg";
import DM from "../../assets/images/DM.svg";
import MA from "../../assets/images/MA.svg";
import "../../assets/styles/Styles.css";

const useStyles = makeStyles((theme) => ({
  fwd: {
    position: "absolute",
    top: "55px",
    left: "345px",
    zIndex: "8",
    color: "#00BDF2",
  },
  header: {
    backgroundColor: "#136EAC",
    paddingTop: "2em",
  },
}));
function InvestF({ history }) {
  const classes = useStyles();
  const closeInvF = () => {
    history.push("./HomeSI");
  };
  return (
    <div className="background">
      <AppBar position="sticky" className={classes.header}>
        <Toolbar>
          <ArrowBackIosIcon onClick={closeInvF}></ArrowBackIosIcon>
          <Typography variant="h5">Fondos de Inversión</Typography>
        </Toolbar>
      </AppBar>
      <div>
        <center>
          <h1 className="p1"> Comienza a invertir con...</h1>
        </center>
        <p className="p2"> Los favoritos para comenzar </p>
        <div className="card-fond">
          <div className="marg">
            <span>
              Para <strong style={{ fontSize: "18px" }}>INICIAR</strong>
            </span>
            <br></br>
            <div className="flex-column">
              <p
                className="cards-text"
                style={{ marginTop: "3px", fontSize: "13.5px" }}
              >
                BLK1MAS
              </p>
              <p
                className="cards-text"
                style={{ fontSize: "16px", marginTop: "3px" }}
              >
                Adiós rentas,
              </p>
              <p className="cards-text" style={{ fontSize: "16px" }}>
                ahora tu espacio
              </p>
              <p className="cards-text" style={{ marginTop: "3px" }}>
                Plazo mayor a 1 mes
              </p>
            </div>
          </div>
          <img src={DM} className="ellips" />
          <ArrowForwardIosIcon className={classes.fwd}></ArrowForwardIosIcon>
          <img src={Youth} className="youth" />
        </div>
        <div className="card-blkmas">
          <div className="marg">
            <span>
              Para <strong style={{ fontSize: "18px" }}>INICIAR</strong>
            </span>
            <br></br>
            <div className="flex-column">
              <p
                className="cards-text"
                style={{ marginTop: "3px", fontSize: "13.5px" }}
              >
                BLK1MAS
              </p>
              <p
                className="cards-text"
                style={{ fontSize: "16px", marginTop: "3px" }}
              >
                Aprende ganando
              </p>
              <p className="cards-text" style={{ fontSize: "16px" }}>
                con fondos BLK.
              </p>
              <p className="cards-text" style={{ marginTop: "3px" }}>
                Plazo 3 meses
              </p>
            </div>
          </div>
          <img src={DM} className="ellips" />
          <ArrowForwardIosIcon className={classes.fwd}></ArrowForwardIosIcon>
          <img src={Youth} className="youth" />
        </div>
        <div className="card-blkmas">
          <div className="marg">
            <span>
              Para <strong style={{ fontSize: "18px" }}>AHORRAR</strong>
            </span>
            <br></br>
            <div className="flex-column">
              <p
                className="cards-text"
                style={{ marginTop: "3px", fontSize: "13.5px" }}
              >
                BLKGUB1
              </p>
              <p
                className="cards-text"
                style={{ fontSize: "16px", marginTop: "3px" }}
              >
                Adiós rentas,
              </p>
              <p className="cards-text" style={{ fontSize: "16px" }}>
                ahora tu espacio.
              </p>
              <p className="cards-text" style={{ marginTop: "3px" }}>
                Plazo mayor a 1 mes
              </p>
            </div>
          </div>
          <img src={DM} className="ellips" />
          <ArrowForwardIosIcon className={classes.fwd}></ArrowForwardIosIcon>
          <img src={Casa} className="casa" />
        </div>{" "}
        <div className="gold">
          <div className="marg">
            <span>
              Para <strong style={{ fontSize: "18px" }}>tu CASA</strong>
            </span>
            <br></br>
            <div className="flex-column">
              <p
                className="cards-text"
                style={{ marginTop: "3px", fontSize: "13.5px" }}
              >
                GOLD2+
              </p>
              <p
                className="cards-text"
                style={{ fontSize: "16px", marginTop: "3px" }}
              >
                Genera tu propio
              </p>
              <p className="cards-text" style={{ fontSize: "16px" }}>
                financiamiento.
              </p>
              <p className="cards-text" style={{ marginTop: "3px" }}>
                Plazo más de 2 años
              </p>
            </div>
          </div>
          <img src={MA} className="ellips12" />
          <ArrowForwardIosIcon className={classes.fwd}></ArrowForwardIosIcon>
          <img src={Negocio} className="youth" />
        </div>
        <center>
          <p className="p">Encuentra el fondo para ti</p>
        </center>
        <Footer />
      </div>
    </div>
  );
}

export default withRouter(InvestF);
