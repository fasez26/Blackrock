import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import right from "../../assets/images/right.svg";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#136EAC",
    paddingTop: "2em",
  },
  title: {
    fontSize: theme.typography.pxToRem(18),
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
    align: "center",
  },
  helperText: {
    color: "#F90D0D",
  },
  helperText1: {
    fontSize: theme.typography.pxToRem(25),
  },
  right: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(-4),
  },
}));

function Quiz({ history }) {
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

    if (value === "always") {
      setHelperText("¡Correcto!");
      setAnswer(true);
      setError(false);
      setNext(true);
    } else if (value === "worst" || value === "best") {
      setHelperText("Incorrecto. ¡Vuelve a intentarlo!");
      setError(true);
    } else {
      setHelperText("Porfavor selecciona una opción.");
      setError(true);
    }
  };

  const openInvest = () => {
    history.push("/Invest");
  };

  const nextQuestion = () => {
    history.push("/Quizz");
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
        <Grid container justify="center">
          <Grid item xs={10}>
            <Card>
              <CardActions>
                <CardMedia
                  className={classes.sizescards}
                  title="Contemplative Reptile"
                />
                <Typography align="left" variant="body1">
                  <strong>Pregunta número 1 - 2.</strong>
                </Typography>
              </CardActions>
              <Typography
                align="left"
                variant="body1"
                className={classes.question}
              >
                ¿Cuándo crees que sea el mejor tiempo de invertir?
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
                      label="Cuándo tenga $10,000 pesos."
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
                      label="Cuándo tenga un buen trabajo."
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
                      label="Siempre que te sea posible."
                    />
                  </RadioGroup>
                </Grid>
                <Grid container justify="center">
                  <Grid item xs={9} sm={12}>
                    {answer ? (
                      <Typography
                        align="center"
                        variant="body1"
                        className={classes.helperText1}
                      >
                        <br></br>
                        {helperText}{" "}
                        <CardMedia
                          className={classes.right}
                          image={right}
                          title="Contemplative Reptile"
                        />{" "}
                        <br></br>
                        <Typography align="center">
                          {" "}
                          Siempre que te sea posible puedes invertir no importa
                          la edad o trabajo en que te desempeñes.
                        </Typography>
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
                        onClick={nextQuestion}
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

export default withRouter(Quiz);
