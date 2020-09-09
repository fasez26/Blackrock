import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Theme, createStyles, makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import video from "../../assets/images/video.svg";
import back from "../../assets/images/back.svg";
import "../../assets/styles/Styles.css";
import { AppBar, Toolbar } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { blue } from "@material-ui/core/colors";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  textTitle: {
    color: "#fafafa",
    align: "center",
    margin: theme.spacing(5),
  },
  sizescards: {
    // width: '20%',
    // height: '20%',
    width: theme.spacing(5),
    height: theme.spacing(5),
    align: "left",
    // margin: theme.spacing(5),
  },
  root1: {
    background:
      "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(0,0,0,0) 0%)",
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
    width: "100%",
  },
  heading: {
    color: "#056DAE",
    fontSize: theme.typography.pxToRem(17),
    // fontWeight: theme.typography.fontWeightRegular,
    fontFamily: "Roboto",
    height: theme.spacing(8),
    // text-decoration-line: underline;
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  accord: {
    width: 100,
    height: 30,
    // align:'center',
    marginLeft: theme.spacing(10),
    marginTop: theme.spacing(1),
  },
  minutes: {
    marginTop: 23,
    width: "30%",
    color: "#056DAE",
  },
  title: {
    // color: 000000,
    align: "center",
    margin: theme.spacing(3),
  },
}));
function Invest({ history }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const openCourses = () => {
    history.push("/courses");
  };
  // const [result, setResult] = useState(false);

  // const showResult = () => {
  //   setResult(true);
  //   console.log("cambié", result);
  // };
  return (
    <div className="App maincontainer">
      <AppBar position="sticky" className={classes.header}>
        <Toolbar>
          <ArrowBackIosIcon onClick={openCourses}></ArrowBackIosIcon>
          <Typography variant="h5">Inversiones</Typography>
        </Toolbar>
      </AppBar>

      <Grid container>
        <Grid item xs={12}>
          <CardMedia className="x" image={back} title="Contemplative Reptile" />
          <Typography variant="h6" align="center" className={classes.title} >
             Elige el tema de tu interés.
          </Typography>
        </Grid>
      </Grid>

      <Grid container justify="center">
        <Grid item xs={11}>

        {/* <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          hola
        </Grid>
        <Grid item xs={6} sm={3}>
         hola
        </Grid>
        <Grid item xs={6} sm={3}>
         hola
        </Grid>
        </Grid> */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              // onClick={showResult}
            >
              <CardMedia
                className={classes.sizescards}
                image={video}
                title="Contemplative Reptile"
              />
              <Typography
                underline="always"
                align="left"
                className={classes.heading}
              >
                {/* <a rel="noopener noreferrer" target="_blank" href="https://www.banamex.com/sitios/educacion-financiera/cursos-de-educacion-financiera/lecciones-de-educacion-financiera.html?leccion=1171" */}
                Lo que debes saber para empezar a invertir.
                {/* </a> */}
              </Typography>
              <Typography align="left" className={classes.minutes}>
                3.30 min
              </Typography>
            </AccordionSummary>
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/040DvOlVLDM"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Accordion>

          <Accordion
          // classes={{
          //         root: classes.accord, // class name, e.g. `classes-nesting-root-x`
          //       }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              // onClick={showResult}
            >
              <CardMedia
                className={classes.sizescards}
                image={video}
                title="Contemplative Reptile"
              />
              <Typography
                underline="always"
                align="left"
                className={classes.heading}
              >
                {/* <a rel="noopener noreferrer" target="_blank" href="https://www.banamex.com/sitios/educacion-financiera/cursos-de-educacion-financiera/lecciones-de-educacion-financiera.html?leccion=1171" */}
                ¿Qué perfil de inversionista tienes?
                {/* </a> */}
              </Typography>
              <Typography align="left" className={classes.minutes}>
                2.58 min
              </Typography>
            </AccordionSummary>
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/Lp3SJaB4RJw"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Accordion>

          <Accordion
          // classes={{
          //         root: classes.accord, // class name, e.g. `classes-nesting-root-x`
          //       }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              // onClick={showResult}
            >
              <CardMedia
                className={classes.sizescards}
                image={video}
                title="Contemplative Reptile"
              />
              <Typography
                underline="always"
                align="left"
                className={classes.heading}
              >
                {/* <a rel="noopener noreferrer" target="_blank" href="https://www.banamex.com/sitios/educacion-financiera/cursos-de-educacion-financiera/lecciones-de-educacion-financiera.html?leccion=1171" */}
                ¿Comó elegir una inversión?
                {/* </a> */}
              </Typography>
              <Typography align="left" className={classes.minutes}>
                3.48 min
              </Typography>
            </AccordionSummary>
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/Z7AdK1SrLXI"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Accordion>

          <Accordion
          // classes={{
          //         root: classes.accord, // class name, e.g. `classes-nesting-root-x`
          //       }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              // onClick={showResult}
            >
              <CardMedia
                className={classes.sizescards}
                image={video}
                title="Contemplative Reptile"
              />
              <Typography
                underline="always"
                align="left"
                className={classes.heading}
              >
                {/* <a rel="noopener noreferrer" target="_blank" href="https://www.banamex.com/sitios/educacion-financiera/cursos-de-educacion-financiera/lecciones-de-educacion-financiera.html?leccion=1171" */}
                ¿Qué son los rendimientos de una inversión?
                {/* </a> */}
              </Typography>
              <Typography align="left" className={classes.minutes}>
                2 min
              </Typography>
            </AccordionSummary>
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/2CJMyFSy6L0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Accordion>

          <Accordion
          // classes={{
          //         root: classes.accord, // class name, e.g. `classes-nesting-root-x`
          //       }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              // onClick={showResult}
            >
              <CardMedia
                className={classes.sizescards}
                image={video}
                title="Contemplative Reptile"
              />
              <Typography
                underline="always"
                align="left"
                className={classes.heading}
              >
                {/* <a rel="noopener noreferrer" target="_blank" href="https://www.banamex.com/sitios/educacion-financiera/cursos-de-educacion-financiera/lecciones-de-educacion-financiera.html?leccion=1171" */}
                ¿Qué son los fondos de inversión?
                {/* </a> */}
              </Typography>
              <Typography align="left" className={classes.minutes}>
                3.7 min
              </Typography>
            </AccordionSummary>
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/Ctkht8BYAj4"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Accordion>

          <Accordion
          // classes={{
          //         root: classes.accord, // class name, e.g. `classes-nesting-root-x`
          //       }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              // onClick={showResult}
            >
              <CardMedia
                className={classes.sizescards}
                image={video}
                title="Contemplative Reptile"
              />
              <Typography
                underline="always"
                align="left"
                className={classes.heading}
              >
                {/* <a rel="noopener noreferrer" target="_blank" href="https://www.banamex.com/sitios/educacion-financiera/cursos-de-educacion-financiera/lecciones-de-educacion-financiera.html?leccion=1171" */}
                ¿Qué es diversificar?
                {/* </a> */}
              </Typography>
              <Typography align="left" className={classes.minutes}>
                2 min
              </Typography>
            </AccordionSummary>
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/2CJMyFSy6L0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Accordion>

          <Accordion
          // classes={{
          //         root: classes.accord, // class name, e.g. `classes-nesting-root-x`
          //       }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              // onClick={showResult}
            >
              <CardMedia
                className={classes.sizescards}
                image={video}
                title="Contemplative Reptile"
              />
              <Typography
                underline="always"
                align="left"
                className={classes.heading}
              >
                {/* <a rel="noopener noreferrer" target="_blank" href="https://www.banamex.com/sitios/educacion-financiera/cursos-de-educacion-financiera/lecciones-de-educacion-financiera.html?leccion=1171" */}
                Conoce lo que hace el interés compuesto por tu dinero.
                {/* </a> */}
              </Typography>
              <Typography align="left" className={classes.minutes}>
                2 min
              </Typography>
            </AccordionSummary>
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/2CJMyFSy6L0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Accordion>
        </Grid>
      </Grid>

      {/* {result ? (
        <div className="card-container">
         hola
        </div>
      ) : null} */}
    </div>
  );
}

export default withRouter(Invest);
