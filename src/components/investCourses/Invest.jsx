import React from "react";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { AppBar, Toolbar } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CardMedia from "@material-ui/core/CardMedia";
import video from "../../assets/images/video.svg";
import test from "../../assets/images/garantia-o.svg";
import "../../assets/styles/Styles.css";

const useStyles = makeStyles((theme) => ({
  textTitle: {
    color: "#fafafa",
    align: "center",
    margin: theme.spacing(5),
  },
  sizescards: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    align: "left",
  },
  root1: {
    background:
      "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(0,0,0,0) 0%)",
    borderRadius: 3,
    border: 1,
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
    fontSize: theme.typography.pxToRem(15),
    fontFamily: "Roboto",
    height: theme.spacing(8),
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
  accord: {
    width: 100,
    height: 30,
    marginLeft: theme.spacing(10),
    marginTop: theme.spacing(1),
  },
  minutes: {
    marginTop: 23,
    width: "30%",
    fontSize: theme.typography.pxToRem(15),
  },
  title: {
    align: "center",
    margin: theme.spacing(3),
  },
  test: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginLeft: theme.spacing(22.5),
    marginTop: theme.spacing(2),
  },
}));
function Invest({ history }) {
  const classes = useStyles();
  const openCourses = () => {
    history.push("/courses");
  };
  const openQuiz = () => {
    history.push("/Quiz");
  };

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
          <Typography variant="h6" align="center" className={classes.title}>
            Elige el tema de tu interés.
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={11}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container spacing={3}>
                <Grid item xs={2} sm={2}>
                  <CardMedia
                    className={classes.sizescards}
                    image={video}
                    title="Contemplative Reptile"
                  />
                </Grid>
                <Grid item xs={8} sm={8}>
                  <Typography
                    underline="always"
                    align="left"
                    className={classes.heading}
                  >
                    Lo que debes saber para empezar a invertir.
                  </Typography>
                </Grid>
                <Grid item xs={2} sm={2}>
                  <Typography align="left" className={classes.minutes}>
                    3.30 min
                  </Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/040DvOlVLDM"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <CardMedia
              className={classes.test}
              image={test}
              title="Contemplative Reptile"
              onClick={openQuiz}
            />
            <a onClick={openQuiz}>Test</a>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container spacing={3}>
                <Grid item xs={2} sm={2}>
                  <CardMedia
                    className={classes.sizescards}
                    image={video}
                    title="Contemplative Reptile"
                  />
                </Grid>
                <Grid item xs={8} sm={8}>
                  <Typography
                    underline="always"
                    align="left"
                    className={classes.heading}
                  >
                    ¿Qué perfil de inversionista tienes?
                  </Typography>
                </Grid>
                <Grid item xs={2} sm={2}>
                  <Typography align="left" className={classes.minutes}>
                    2.58 min
                  </Typography>
                </Grid>
              </Grid>
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
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container spacing={3}>
                <Grid item xs={2} sm={2}>
                  <CardMedia
                    className={classes.sizescards}
                    image={video}
                    title="Contemplative Reptile"
                  />
                </Grid>
                <Grid item xs={8} sm={8}>
                  <Typography
                    underline="always"
                    align="left"
                    className={classes.heading}
                  >
                    ¿Comó elegir una inversión?
                  </Typography>
                </Grid>
                <Grid item xs={2} sm={2}>
                  <Typography align="left" className={classes.minutes}>
                    3.48 min
                  </Typography>
                </Grid>
              </Grid>
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
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container spacing={3}>
                <Grid item xs={2} sm={2}>
                  <CardMedia
                    className={classes.sizescards}
                    image={video}
                    title="Contemplative Reptile"
                  />
                </Grid>
                <Grid item xs={8} sm={8}>
                  <Typography
                    underline="always"
                    align="left"
                    className={classes.heading}
                  >
                    ¿Qué son los rendimientos de una inversión?
                  </Typography>
                </Grid>
                <Grid item xs={2} sm={2}>
                  <Typography align="left" className={classes.minutes}>
                    2 min
                  </Typography>
                </Grid>
              </Grid>
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
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container spacing={3}>
                <Grid item xs={2} sm={2}>
                  <CardMedia
                    className={classes.sizescards}
                    image={video}
                    title="Contemplative Reptile"
                  />
                </Grid>
                <Grid item xs={8} sm={8}>
                  <Typography
                    underline="always"
                    align="left"
                    className={classes.heading}
                  >
                    ¿Qué son los fondos de inversión?
                  </Typography>
                </Grid>
                <Grid item xs={2} sm={2}>
                  <Typography align="left" className={classes.minutes}>
                    3.7 min
                  </Typography>
                </Grid>
              </Grid>
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
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container spacing={3}>
                <Grid item xs={2} sm={2}>
                  <CardMedia
                    className={classes.sizescards}
                    image={video}
                    title="Contemplative Reptile"
                  />
                </Grid>
                <Grid item xs={8} sm={8}>
                  <Typography
                    underline="always"
                    align="left"
                    className={classes.heading}
                  >
                    {" "}
                    ¿Qué es diversificar?
                  </Typography>
                </Grid>
                <Grid item xs={2} sm={2}>
                  <Typography align="left" className={classes.minutes}>
                    2 min
                  </Typography>
                </Grid>
              </Grid>
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
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container spacing={3}>
                <Grid item xs={2} sm={2}>
                  <CardMedia
                    className={classes.sizescards}
                    image={video}
                    title="Contemplative Reptile"
                  />
                </Grid>
                <Grid item xs={8} sm={8}>
                  <Typography
                    underline="always"
                    align="left"
                    className={classes.heading}
                  >
                    Conoce lo que hace el interés compuesto por tu dinero.
                  </Typography>
                </Grid>
                <Grid item xs={2} sm={2}>
                  <Typography align="left" className={classes.minutes}>
                    2 min
                  </Typography>
                </Grid>
              </Grid>
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
    </div>
  );
}

export default withRouter(Invest);
