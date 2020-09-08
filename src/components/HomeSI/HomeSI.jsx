import React from "react";
import { Container } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/styles";
import "../../assets/styles/Styles.css";
import MaskGroup from "../../assets/images/MaskGroup.svg";
import hand from "../../assets/images/hand.svg";
import ganancias from "../../assets/images/ganancias.svg";
import catalogoFondos from "../../assets/images/catalogoFondos.svg";
import agente from "../../assets/images/agente.svg";
import money_1 from "../../assets/images/money_1.svg";
import expand_more from "../../assets/images/expand_more.svg";
import notifical from "../../assets/images/notifical.svg";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import {AppBar, Toolbar, Typography, Grid, TextField } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const slideImages = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"

];

const properties = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const useStyles = makeStyles((theme) => ({
  header: {
      backgroundColor: "#136EAC",
      paddingTop: "2em",
    },
}))


function HomeSI({history}) {
  const openInvF=() =>{
    history.push("./InvestF")
  } 
 
  const closeHomeS=() =>{
    history.push("./")
  }

  const classes = useStyles();
  return (
    <div className="fond"> 

<AppBar position="sticky" className={classes.header}>
        <Toolbar>
          <ArrowBackIosIcon onClick={closeHomeS}>

          </ArrowBackIosIcon>
          <Typography variant="h5">Ahorra l Invierte</Typography>
        </Toolbar>
      </AppBar>

<div className='slide'>
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>Slide 3</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
            <span>Slide 4</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
            <span>Slide 5</span>
          </div>
        </div>        
      </Slide>
      </div>

      <div className="card-saving">
        <center><h1 className="text">Ahorros</h1></center>
        <img  src={money_1} className="piggy"/>
        <p className="ahorra">Ahorra fasilmente desde $100</p>
        <img  src={expand_more} className="expand_more"/>
        {/* <p>texto informativo</p> */}
        {/* <img src={expand_more} className="expand"/> */}
      </div>

      <div className="card-inv" onClick={openInvF} >
        <center><h2 className="text1">Inversiones</h2></center>
        <img src={hand} className="handplantcoin"/>
        <p className="ahorra">Multiplica tus ingresos</p>
        <img  src={expand_more} className="expand_more"/>
        {/* <p classname="lorem">texto informativo</p> */}
        {/* <img src={expand_more} className="expand1"/> */}
      </div>

      <img src={notifical} className="notifical" />

    
      <div className="menua">
        <img src={ganancias} className="ganancias" />
        <img src={catalogoFondos} className="catalogoFondos" />
        <img src={agente} className="agente" />
        
      </div>
    </div>



    
  );
}

export default withRouter(HomeSI);
