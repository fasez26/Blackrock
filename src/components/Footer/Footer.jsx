import React from 'react'
import { Link } from 'react-router-dom'
import "../../assets/styles/Styles.css";
import ganancias from "../../assets/images/ganancias.svg";
import catalogoFondos from "../../assets/images/catalogoFondos.svg";
import agente from "../../assets/images/agente.svg";

function Footer(){
    return(
        <div className="menua">
         <Link to = "Calculator"><img src={ganancias} className="ganancias" /></Link>
         <Link to = "InvestF"><img src={catalogoFondos} className="catalogoFondos" /></Link>
         <Link to = "/"><img src={agente} className="agente" /></Link>
      </div>
    )
}

export default Footer