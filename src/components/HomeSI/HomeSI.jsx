import React from "react";
import { Container } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/styles";
import "../../assets/styles/Styles.css";
import MaskGroup from "../../assets/images/MaskGroup.svg";
import Footer from '../Footer/Footer'
import hand from "../../assets/images/hand.svg";
import money_1 from "../../assets/images/money_1.svg";
import expand_more from "../../assets/images/expand_more.svg";
import notifical from "../../assets/images/notifical.svg";
import FondoSlide2 from "../../assets/images/FondoSlide2.svg";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  TextField,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const slideImages = [
  "https://i.ibb.co/w6Y05YX/Fondo-Slide2.png",
  "https://i.ibb.co/FJzkX6K/Fondo-Slide-3.png",
  "https://i.ibb.co/j8gT3MQ/Fondo-Slide-4.png",
  "https://i.ibb.co/02mZDpB/Fondo-Slide-5.png",
  "https://i.ibb.co/SdK6b16/Fondo-Slide-6.png"
];

const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#136EAC",
    paddingTop: "2em",
  },
}));

function HomeSI({ history }) {
  const openInvF = () => {
    history.push("./InvestF");
  };

  const closeHomeS = () => {
    history.push("./");
  };
  const investpage = () => {
    history.push("/Invest");
  };

  const classes = useStyles();
  return (
    <div className="fond">
      <AppBar position="sticky" className={classes.header}>
        <Toolbar>
          <ArrowBackIosIcon onClick={closeHomeS}></ArrowBackIosIcon>
          <Typography variant="h5">Ahorra l Invierte</Typography>
        </Toolbar>
      </AppBar>

      <div className="slide">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
              <strong className="text-mito">¿Deseas invertir pero no sabes cómo?</strong> <br></br>
              <center><strong className="liga" onClick={investpage} >¡Aprende aqui!</strong></center>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
              <strong className="text-mito">Mito 1:<br></br>
               Necesitas mucho dinero para poder <br></br>
               invertir</strong><br></br>
               <strong className="liga" onClick={openInvF}>Con sólo $1,000 puedes comenzar</strong>

            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
              <strong className="text-mito">Mito 2: <br></br>
              Solo los adultos invierten</strong><br></br>
              <strong className="liga" onClick={openInvF}>Tambien los jovenes pueden invertir</strong>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[3]})` }}>
              <strong className="text-mito">Mito 3:<br></br>
               Si inviertes puedes perder tu dinero</strong><br></br>
               <strong className="liga" onClick={openInvF}>Ahorra más invirtiendo</strong>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[4]})` }}>
              <strong className="text-mito">A que no sabias:<br></br>
               Puedes financiarte invirtiendo</strong><br></br>
              <strong className="liga"onClick={openInvF}>Encuentra la inversión perfecta para ti</strong>
            </div>
          </div>
        </Slide>
      </div>

      <div className="card-saving">
        <center>
          <h1 className="text">Ahorros</h1>
        </center>
        <img src={money_1} className="piggy" />
        <p className="ahorra">Ahorra facilmente desde $100</p>
        <img src={expand_more} className="expand_more" />
        {/* <p>texto informativo</p> */}
        {/* <img src={expand_more} className="expand"/> */}
      </div>

      <div className="card-inv" onClick={openInvF}>
        <center>
          <h2 className="text1">Inversiones</h2>
        </center>
        <img src={hand} className="handplantcoin" />
       <p className="ahorra">Multiplica tus ingresos</p>
        <img src={expand_more} className="expand_more" />
        {/* <p classname="lorem">texto informativo</p> */}
        {/* <img src={expand_more} className="expand1"/> */}
      </div>

      <img src={notifical} className="notifical" />

      <Footer/> 
    </div>
  );
}

export default withRouter(HomeSI);
