import React, {useState} from "react";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Theme, createStyles, makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from '@material-ui/core/CardContent';
import video from "../../assets/images/video.svg";
import back from "../../assets/images/back.svg";
import "../../assets/styles/Styles.css";
import {AppBar, Toolbar} from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { blue } from "@material-ui/core/colors";
import Hidden from '@material-ui/core/Hidden';



const useStyles = makeStyles((theme) => ({
  textTitle: {
    color: "#fafafa",
    align: "center",
    margin: theme.spacing(5),
  },
  sizescards: {
    // width: '20%',
    // height: '20%',
    width: theme.spacing(4),
    height: theme.spacing(4),
    // align:'center'
    // margin: theme.spacing(5),
  },
  root1: {
    background:"linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(0,0,0,0) 0%)",
    borderRadius: 3,
    border: 1,
    // color: "white",
    height: 100,
    padding: "0 30px",
  },
  header: {
    backgroundColor: "#136EAC",
    paddingTop: "2em",
  },
  root: {
    width: '100%',
  },
  heading: {
    color: '#056DAE',
    fontSize: theme.typography.pxToRem(17),
    // fontWeight: theme.typography.fontWeightRegular,
    fontFamily: "Roboto",
    height: theme.spacing(6),
    // text-decoration-line: underline;
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  accord:{
    // position: 'absolute',
  },
  minutes:{
    marginTop: 23,
    width: '20%',
    color: '#056DAE',
  },
 
 
}));
function Invest({history}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const openCourses = () => {
    history.push("/courses");
  };
  const [result, setResult] = useState(false);

  const showResult = () => {
    setResult(true);
    console.log("cambié", result);
  };
  return (
    <div className="App maincontainer">
        <AppBar position="sticky" className={classes.header}>
        <Toolbar>
          <ArrowBackIosIcon onClick={openCourses}  ></ArrowBackIosIcon>
          <Typography variant="h5">Inversiones</Typography>
        </Toolbar>
      </AppBar>
      <Accordion   
      // classes={{
      //         root: classes.accord, // class name, e.g. `classes-nesting-root-x`
      //       }} 
            >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={showResult}
         
        >
        
          <CardMedia
                className={classes.sizescards}
                image={video}
                title="Contemplative Reptile"
              />
          <Typography underline='always' align='left' className={classes.heading}>Lo que debes saber para empezar a invertir.</Typography>

          <Typography align='left' className={classes.minutes}>2 min</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         

              <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Inversión: Es hacer crecer tu dinero.
        </Typography>
        <iframe width="360" height="115" src="https://www.youtube.com/embed/2CJMyFSy6L0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandLessIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <CardMedia
                className={classes.sizescards}
                image={video}
                title="Contemplative Reptile"
              />
              Video 2 min
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandLessIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion> */}

      {/* <Grid container justify="center">
        <Grid item xs={11}>
          <Card
            classes={{
              root: classes.root1, // class name, e.g. `classes-nesting-root-x`
            }}
          >
            <CardActions>
              <Typography align="left" variant="body1">
                Lo que debes saber para empezar a invertir
              </Typography>
            </CardActions>
            <CardActions>
              <CardMedia
                className={classes.sizescards}
                image={video}
                title="Contemplative Reptile"
              />
              Video <div>2 min</div>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Grid container justify="center">
        <Grid item xs={11}>
          <Card
            classes={{
              root: classes.root1, // class name, e.g. `classes-nesting-root-x`
            }}
          >
            <CardActions>
              <Typography align="left" variant="body1">
                ¿Qué perfil de inversionista tienes?
              </Typography>
            </CardActions>
            <CardActions>
              <CardMedia
                className={classes.sizescards}
                image={video}
                title="Contemplative Reptile"
              />Video <div>5 min</div>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Grid container justify="center">
        <Grid item xs={11}>
          <Card
            classes={{
              root: classes.root1, // class name, e.g. `classes-nesting-root-x`
            }}
          >
            <CardActions>
              <Typography align="left" variant="body1">
              ¿Comó elegir una inversión?
              </Typography>
            </CardActions>
            <CardActions>
              <CardMedia
                className={classes.sizescards}
                image={video}
                title="Contemplative Reptile"
              />Video <div>3 min</div>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Grid container justify="center">
        <Grid item xs={11}>
          <Card
            classes={{
              root: classes.root1, // class name, e.g. `classes-nesting-root-x`
            }}
          >
            <CardActions>
              <Typography align="left" variant="body1">
              ¿Qué son los rendimientos de una inversión?
              </Typography>
            </CardActions>
            <CardActions>
              <CardMedia
                className={classes.sizescards}
                image={video}
                title="Contemplative Reptile"
              />Video <div>4 min</div>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Grid container justify="center">
        <Grid item xs={11}>
          <Card
            classes={{
              root: classes.root1, // class name, e.g. `classes-nesting-root-x`
            }}
          >
            <CardActions>
              <Typography align="left" variant="body1">
              ¿Qué son los fondos de inversión?
              </Typography>
            </CardActions>
            <CardActions>
              <CardMedia
                className={classes.sizescards}
                image={video}
                title="Contemplative Reptile"
              />Video <div>2 min</div>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Grid container justify="center">
        <Grid item xs={11}>
          <Card
            classes={{
              root: classes.root1, // class name, e.g. `classes-nesting-root-x`
            }}
          >
            <CardActions>
              <Typography align="left" variant="body1">
              ¿Qué es diversificar?
              </Typography>
            </CardActions>
            <CardActions>
              <CardMedia
                className={classes.sizescards}
                image={video}
                title="Contemplative Reptile"
              />Video <div>5 min</div>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Grid container justify="center">
        <Grid item xs={11}>
          <Card
            classes={{
              root: classes.root1, // class name, e.g. `classes-nesting-root-x`
            }}
          >
            <CardActions>
              <Typography align="left" variant="body1">
              Conoce lo que hace el interés compuesto por tu dinero
              </Typography>
            </CardActions>
            <CardActions>
              <CardMedia
                className={classes.sizescards}
                image={video}
                title="Contemplative Reptile"
              />Video <div>3 min</div>
            </CardActions>
          </Card>
        </Grid>
      </Grid> */}
        {result ? (
        <div className="card-container">
         hola
        </div>
      ) : null}
    </div>
  );
}

export default withRouter(Invest);
