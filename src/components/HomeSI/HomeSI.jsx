import React from 'react'
import { Container } from '@material-ui/core';
import { withRouter } from "react-router-dom";
import { makeStyles, Theme } from '@material-ui/styles';
import '../../assets/styles/Styles.css';
import MaskGroup from '../../assets/images/MaskGroup.svg';
import money from '../../assets/images/money.png';





function HomeSI(){
                       
    return(
        <div className="container">
            <div className="barra">
<nav className="menu1">
    
    <br/>
    <div className="title">
    <div className="title1">
    <a className="name">EDUCACION FINANCIERA</a>
    </div>
    <div className="title2">
    <a href="#start"> CURSOSl</a>
  
    </div>
    </div>
    </nav>
    </div>
    <div classname="slaido">
        <img src={MaskGroup} /> 
         
    </div>
    <div className="card-saving">
        <h1>Ahorros</h1>
        
        <img src={money} />
    </div>
    <div classname="card-inv">

    </div>
   

        </div>
    )
}

export default HomeSI;

