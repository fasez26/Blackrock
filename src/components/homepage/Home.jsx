import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button, Typography } from "@material-ui/core";
import "../../assets/styles/Styles.css";
import blackrock from "../../assets/images/blackrocklogo.png";
import banamex from "../../assets/images/citibanamexlogo.png";
import redbanamex from "../../assets/images/redcitibanamex.png";
import greencard from "../../assets/images/greencard.png";
import bluecard from "../../assets/images/bluecard.png";
import transfer from "../../assets/images/transfer.svg";
import pay from "../../assets/images/pay.svg";
import invest from "../../assets/images/invest.svg";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

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
    margin: theme.spacing(5),
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
  textcard: {
    backgroundColor: "primary",
    align: "left",
  },  
  root1: {
    background:"radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(14,93,186,1) 0%)",
    borderRadius: 3,
    border: 1,
    color: "white",
    height: 65,
    padding: "0 80px",
  },
  
}));

function Home() {
  const classes = useStyles();
  return (
    <div className="App container">
      <Grid container>
        <Grid item xs={9}>
          <Typography variant="h5" align="left" className={classes.textTitle}>
            ¡Hola María!
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={10}>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Cualquiera puede invertir.
                </Typography>
                <Typography variant="h6" component="h2">
                  ¡Nosotros te enseñamos!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <CardMedia
                className={classes.media}
                image={blackrock}
                title="Contemplative Reptile"
              />
              <Button size="small" color="primary">
                Aprende Aquí
              </Button>
              <CardMedia
                className={classes.media}
                image={banamex}
                title="Contemplative Reptile"
              />
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
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
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
      </Grid>
    </div>
  );
}

export default Home;
