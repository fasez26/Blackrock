import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Button, Typography } from "@material-ui/core";
import "../../assets/styles/Styles.css";
import investIcon from "../../assets/images/invest-icon.svg";
import back from "../../assets/images/back.svg";
import pig from "../../assets/images/pig.svg";
import insurance from "../../assets/images/insurance.svg";
import icoCard from "../../assets/images/icoCard.svg";
import home from "../../assets/images/home-o.svg";
import icomoney from "../../assets/images/icomoney.svg";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import transfer from "../../assets/images/transfer.svg";
import pay from "../../assets/images/pay.svg";
import invest from "../../assets/images/invest.svg";
import { AppBar, Toolbar } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: theme.spacing(3),
  },
  media: {
    width: theme.spacing(11),
    height: theme.spacing(2),
    margin: theme.spacing(1),
  },
  textTitle: {
    // color: 000000,
    align: "center",
    margin: theme.spacing(3),
  },
  textCard: {
    color: "#fafafa",
    align: "center",
    margin: theme.spacing(3),
  },
  sizescards: {
    width: theme.spacing(11),
    height: theme.spacing(7),
  },
  sizesicons: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  textcard: {
    backgroundColor: "primary",
    align: "left",
  },
  root1: {
    background:
      "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(14,93,186,1) 0%)",
    borderRadius: 3,
    border: 1,
    color: "white",
    height: 65,
    padding: "0 80px",
  },
  header: {
    backgroundColor: "#136EAC",
    paddingTop: "2em",
  },
}));

function CoursesHome({ history }) {
  const classes = useStyles();
  const homepage = () => {
    history.push("/");
  };
  const investpage = () => {
    history.push("/Invest");
  };
  return (
    <div className="App maincontainer">
      <AppBar position="sticky" className={classes.header}>
        <Toolbar>
          <ArrowBackIosIcon onClick={homepage}></ArrowBackIosIcon>
          <Typography variant="h5">Cursos de Educación Financiera</Typography>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={12}>
          <CardMedia className="x" image={back} title="Contemplative Reptile" />
          <Typography variant="h6" align="center" className={classes.textTitle}>
            ¡Aprende y crece tu patrimonio!
          </Typography>
        </Grid>
      </Grid>

      <Grid container justify="center" onClick={investpage}>
        <Grid item xs={10}>
          <Card>
            <CardActions>
              <CardMedia
                className={classes.sizescards}
                image={investIcon}
                title="Contemplative Reptile"
              />
              <Typography align="left" variant="body2">
                <strong>Inversiones</strong>
                <br></br> Conoce cómo hacer crecer tu dinero para alcanzar tus
                sueños.
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <br></br>
      <Grid container justify="center">
        <Grid item xs={10}>
          <Card>
            <CardActions>
              <CardMedia
                className={classes.sizescards}
                image={pig}
                title="Contemplative Reptile"
              />
              <Typography align="left" variant="body2">
                <strong>Afore</strong>
                <br></br> Prepara desde hoy, la que puede ser la mejor etapa de
                tu vida.
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <br></br>
      <Grid container justify="center">
        <Grid item xs={10}>
          <Card>
            <CardActions>
              <CardMedia
                className={classes.sizescards}
                image={insurance}
                title="Contemplative Reptile"
              />
              <Typography align="left" variant="body2">
                <strong>Seguros</strong>
                <br></br> Conoce cómo blindar tus finanzas y protege lo que más
                te importa.
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <br></br>
      <Grid container justify="center">
        <Grid item xs={10}>
          <Card>
            <CardActions>
              <CardMedia
                className={classes.sizescards}
                image={icoCard}
                title="Contemplative Reptile"
              />
              <Typography align="left" variant="body2">
                <strong>Tarjetas de Crédito</strong>
                <br></br> Conoce cómo hacer crecer tu dinero para alcanzar tus
                sueños.
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <br></br>
      <Grid container justify="center">
        <Grid item xs={10}>
          <Card>
            <CardActions>
              <CardMedia
                className={classes.sizescards}
                image={home}
                title="Contemplative Reptile"
              />
              <Typography align="left" variant="body2">
                <strong> Crédito Hipotecario</strong>
                <br></br> Aprovéchalas al máximo y mantenlas bajo control.
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <br></br>
      <Grid container justify="center">
        <Grid item xs={10}>
          <Card>
            <CardActions>
              <CardMedia
                className={classes.sizescards}
                image={icomoney}
                title="Contemplative Reptile"
              />
              <Typography align="left" variant="body2">
                <strong>Controla tus deudas</strong>
                <br></br> Descubre cómo salir de deudas y vuelve a dormir
                tranquilo.
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      {/* <br></br> <br></br> <br></br> 
      <Grid container justify="center">
        <Grid item xs={10}>
          <Card
            classes={{
              root: classes.root1, // class name, e.g. `classes-nesting-root-x`
            }}
          >
            <CardActions>
              <CardMedia
                className="transfer"
                image={transfer}
                title="Contemplative Reptile"
              />
              <CardMedia
                className="pay"
                image={pay}
                title="Contemplative Reptile"
              />
              <CardMedia
                className="invest"
                image={invest}
                title="Contemplative Reptile"
              />
            </CardActions>
          </Card>
        </Grid>
      </Grid> */}
    </div>
  );
}

export default withRouter(CoursesHome);
