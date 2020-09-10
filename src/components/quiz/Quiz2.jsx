import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#136EAC",
    paddingTop: "2em",
  },
  title: {
    fontSize: theme.typography.pxToRem(18),
    // marginLeft: theme.spacing(1),
    marginTop: theme.spacing(3),
    align: "center",
    margin: theme.spacing(3),
  },
  sizescards: {
    marginTop: theme.spacing(5),
  },
  question: {
    marginLeft: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    // margin: theme.spacing(1, 1, 0, 0),
    align: "center",
  },
  helperText: {
    color: "#F90D0D",
    // marginLeft: theme.spacing(16),
  },
  helperText1: {
    color: "#059B5C",
    fontSize: theme.typography.pxToRem(25),
    // marginLeft: theme.spacing(16),
  },
}));

function Quiz2({ history }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Elige un opción", false);
  const [next, setNext] = React.useState(false);
  const [answer, setAnswer] = React.useState(false);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === "best") {
      setHelperText("Correcto!");
      setAnswer(true);
      setError(false);
      setNext(true);
    } else if (value === "worst" || value === "always") {
      setHelperText("Oops, respuesta incorrecta!");
      setError(true);
    } else {
      setHelperText("Porfavor selecciona una opción.");
      setError(true);
    }
  };

  const openInvest = () => {
    history.push("/Invest");
  };
  

  const openHome = () => {
    history.push("/");
  };
  return (
    <div className="App maincontainer">
      <AppBar position="sticky" className={classes.header}>
        <Toolbar>
          <ArrowBackIosIcon onClick={openInvest}></ArrowBackIosIcon>
          <Typography variant="h5">Test</Typography>
        </Toolbar>
      </AppBar>

      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6" align="center" className={classes.title}>
            Lo que debes saber para empezar a invertir.
          </Typography>
        </Grid>
      </Grid>

      <form onSubmit={handleSubmit}>
        <Grid
          container
          justify="center"
          // onClick={investpage}
        >
          <Grid item xs={10}>
            <Card>
              <CardActions>
                <CardMedia
                  className={classes.sizescards}
                  // image={investIcon}
                  title="Contemplative Reptile"
                />
                <Typography align="left" variant="body1">
                  <strong>Pregunta número 2 - 2.</strong>
                </Typography>
              </CardActions>
              <Typography
                align="left"
                variant="body1"
                className={classes.question}
              >
                ¿Por qué es importante invertir?
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <RadioGroup
                    aria-label="quiz"
                    name="quiz"
                    value={value}
                    onChange={handleRadioChange}
                  >
                    <FormControlLabel
                      className={classes.question}
                      value="best"
                      control={<Radio />}
                      label="Te ayuda a cumplir metas."
                    />
                  </RadioGroup>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <RadioGroup
                    aria-label="quiz"
                    name="quiz"
                    value={value}
                    onChange={handleRadioChange}
                  >
                    <FormControlLabel
                      className={classes.question}
                      value="worst"
                      control={<Radio />}
                      label="Te ayuda a gastarte tu dinero."
                    />
                  </RadioGroup>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <RadioGroup
                    aria-label="quiz"
                    name="quiz"
                    value={value}
                    onChange={handleRadioChange}
                  >
                    <FormControlLabel
                      className={classes.question}
                      value="always"
                      control={<Radio />}
                      label="Te vuelve millonario."
                    />
                  </RadioGroup>
                </Grid>

                <Grid item xs={12} sm={12}>
                  {answer ? (
                    <Typography
                      align="center"
                      variant="body1"
                      className={classes.helperText1}
                    >
                      {helperText}
                    </Typography>
                  ) : (
                    <Typography
                      align="center"
                      variant="body1"
                      className={classes.helperText}
                    >
                      {helperText}
                    </Typography>
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl
                    component="fieldset"
                    error={error}
                    className={classes.formControl}
                  >
                    {next ? (
                      <Button
                        type="submit"
                        variant="outlined"
                        color="primary"
                        onClick={openHome}
                        className={classes.button}
                      >
                        CONTINUAR
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        variant="outlined"
                        color="primary"
                        className={classes.button}
                      >
                        ACEPTAR
                      </Button>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default withRouter(Quiz2);
