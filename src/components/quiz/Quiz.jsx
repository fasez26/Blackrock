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
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

function Quiz({ history }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Elige un opción");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === "always") {
      setHelperText("Correcto!");
      setError(false);
    } else if (value === "worst" || value === "best") {
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
                <strong>Pregunta número 1 - 3.</strong>
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
            </Grid>
          </Card>
        </Grid>
      </Grid>

   
        <FormControl
          component="fieldset"
          error={error}
          className={classes.formControl}
        >
          {/* <FormLabel component="legend">Pop quiz: Material-UI is...</FormLabel>
        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
          <FormControlLabel value="best" control={<Radio />} label="The best!" />
          <FormControlLabel value="worst" control={<Radio />} label="The worst." />
        </RadioGroup> */}
          <FormHelperText>{helperText}</FormHelperText>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            className={classes.button}
          >
            ACEPTAR
          </Button>
        </FormControl>
      </form>
    </div>
  );
}

export default withRouter(Quiz);
