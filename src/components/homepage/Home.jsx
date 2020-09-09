import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Button, Typography } from "@material-ui/core";
import "../../assets/styles/Styles.css";
import blackrock from "../../assets/images/blackrocklogo.png";
import banamex from "../../assets/images/citibanamexlogo.png";
import redbanamex from "../../assets/images/redcitibanamex.png";
import greencard from "../../assets/images/greencard.png";
import bluecard from "../../assets/images/bluecard.png";
import transfer from "../../assets/images/transfer.svg";
import logs from "../../assets/images/logs.svg";
import lern from "../../assets/images/coin.svg";
import pay from "../../assets/images/pay.svg";
import invest from "../../assets/images/invest.svg";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { blue } from "@material-ui/core/colors";


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
    color: "#fafafa",
    align: "center",
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(3),
  },
  textCard: {
    color: "#fafafa",
    align: "center",
    margin: theme.spacing(3),
    
  }, 
  sizescards: {
    width: theme.spacing(10),
    height: theme.spacing(6),
  },
  sizesicons: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  coin: {
    width: theme.spacing(40),
    height: theme.spacing(3),
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(-1),
  },
  logs: {
    width: theme.spacing(40),
    height: theme.spacing(3),
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(-.2),
  },
  coinright: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginTop: theme.spacing(-4),
    marginLeft: theme.spacing(31),
  },
  textcard: {
    backgroundColor: "primary",
    align: "left",
  },  
  root1: {
    background: '#0076BE',
    borderRadius: 3,
    border: 1,
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(4),
    width: theme.spacing(44),
    height: 53,
  },
  menuButton: {
    color: "white",
    marginTop: theme.spacing(-7),
    marginLeft: theme.spacing(43),
  },
  textButton: {
    color: "blue",
    marginTop: theme.spacing(-4),
    marginLeft: theme.spacing(1),
    height: theme.spacing(5),
  },
  
}));

function Home({history}) {
  const classes = useStyles();
  const openCourses = () => {
    history.push("/courses");
  };
  const openInv = () =>{
    history.push("/HomeSI");
  }
  return (
    <div className="App container">
      <Grid container>
        <Grid item xs={9}>
          <Typography variant="h5" align="left" className={classes.textTitle}>
            ¡Hola María!
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="body1" align="left" className={classes.textCard}>
            Novedades Citibanamex
          </Typography>
          
          
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={10}>
          <Card>
            <CardActionArea>
              <CardContent>
             
                <Typography variant="body1" component="h2">
                  <strong>Gana dinero con tu dinero</strong>
                  <CardMedia
                className={classes.coin}
                image={lern}
                title="Contemplative Reptile"
                onClick={openCourses}
              /> 
                </Typography>
                {/* <CardMedia
                className={classes.coin}
                image={coin}
                title="Contemplative Reptile"
              /> */}
                {/* <Button  className={classes.textButton} size="small" color="primary" onClick={openCourses}>
                <strong>¡Aprende Aquí!</strong>
              </Button> */}
              {/* <CardMedia
                className={classes.coinright}
                image={coin}
                title="Contemplative Reptile"
              /> */}
              </CardContent>
            </CardActionArea>
            <CardActions>
              <CardMedia
                className={classes.logs}
                image={logs}
                title="Contemplative Reptile"
              /> 

              
              {/* <CardMedia
                className={classes.media}
                image={banamex}
                title="Contemplative Reptile"
              /> */}
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Grid>
        <Grid item xs={12}>
          <Typography align="left" variant="body1" className={classes.textCard}>
            Tarjetas de Crédito
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={10}>
          <Card>
            <CardActions>
              <CardMedia
                className={classes.sizescards}
                image={redbanamex}
                title="Contemplative Reptile"
              />
              <Typography align="left" variant="body2">
                Tarjeta Clásica Citibanamex ***849<br></br>$ 1,000.00
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
                image={greencard}
                title="Contemplative Reptile"
              />
              <Typography variant="body2" align="left">
                Tarjeta Citibanamex Rewards ***834<br></br>- $ 8,000.00
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Grid>
        <Grid item xs={12}>
          <Typography align="left" variant="body1" className={classes.textCard}>
            Tarjetas de Débito
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={10}>
          <Card>
            <CardActions>
              <CardMedia
                className={classes.sizescards}
                image={bluecard}
                title="Contemplative Reptile"
              />
              <Typography align="left" variant="body2">
                Tarjeta Perfiles Citibanamex ***868<br></br>$ 5,600.00
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      
      <Grid container justify="center"  className={classes.root1}>
        <Grid item xs={10}>
         
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
                onClick={openInv}
              />
            </CardActions>
         
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(Home);
