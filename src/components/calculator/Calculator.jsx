import React, { useState } from "react";
import "./calculator.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Card,
  CardActions,
  CardContent,
  Grid,
  makeStyles,
  Input,
  InputLabel,
  Select,
  InputAdornment,
  MenuItem,
  Box,
  TextField,
  Button,
  Tabs,
  Tab,
  CardMedia,
  Paper,
} from "@material-ui/core";
import { sizing } from "@material-ui/system";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import StackedCoins from "../../assets/images/stacked-coins.svg";

const useStyles = makeStyles({
  cardContainer: {
    backgroundColor: "white",
    borderRadius: "0 0 1px 1px",
    boxShadow: "0 4px 4px rgba(0,0,0,0.25)",
  },
  rootCard: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  cardText: {
    minWidth: "180px",
    marginLeft: "25px",
  },
  coins: {
    height: "120px",
    width: "120px",
    marginTop: '25px'
  },
  label: {
    paddingBottom: "9px",
  },
  labelBottom: {
    paddingTop: "19px",
    paddingBottom: "9px",
  },
  boton: {
    backgroundColor: "#FF906C",
    color: "white",
    borderRadius: "1px",
    marginTop: "40px",
    marginBottom: "40px",
    "&:hover": {
      backgroundColor: "#ed7e5a",
    },
  },
  header: {
    backgroundColor: "#136EAC",
    paddingTop: "2em",
  },
  container: {
    padding: "1.5em 20px 0 20px",
  },
  titlesNumContent: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  textField: {
    backgroundColor: "white",
    borderRadius: "2px",
    paddingLeft: "12px",
    boxShadow: "0 4px 4px rgba(0,0,0,0.25)",
    width: "100%",
  },
  titlesTypo: {
    fontSize: "16px",
    color: "#056DAE",
    fontWeight: "medium",
    marginBottom: "5px",
  },
  selector: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: "2px",
    paddingLeft: "12px",
    boxShadow: "0 4px 4px rgba(0,0,0,0.25)",
    "&:hover": {
      backgroundColor: "white",
    },
    "selector.Mui-selected": {
      backgroundColor: "white",
      width: "100%",
    },
    "&:checked": {
      backgroundColor: "white",
    },
  },
});

const initialFormValues = {
  initialAmount: "",
  investmentFund: "",
  date: "",
  investmentValue: "",
};

function Calculator() {
  const [values, setValues] = useState(initialFormValues);
  const [result, setResult] = useState(false);

  const goBack = () => {
    console.log("voy de regreso");
  };

  const showResult = () => {
    setResult(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  const classes = useStyles();
  return (
    <div className="calculator-container">
      <AppBar position="sticky" className={classes.header}>
        <Toolbar>
          <ArrowBackIosIcon onClick={goBack}></ArrowBackIosIcon>
          <Typography variant="h5"> Calculadora de Inversión</Typography>
        </Toolbar>
      </AppBar>
      <div className="top-container">
        <Grid container justify="center">
          <Typography variant="body1" style={{ padding: "2em 20px 0px 20px" }}>
            Una calculadora de inversión te muestra blablabla Lorem ipsum dolor
            sit amet, consectur adipiscing.
          </Typography>
        </Grid>

        <form>
          <Grid container className={classes.container} justify="center">
            <Box m={0.5} />
            <Grid item xs={5}>
              <InputLabel
                className={classes.label}
                htmlFor="standard-basic"
                disableAnimation={true}
              >
                Monto de Inversión
              </InputLabel>
              <Input
                onChange={handleChange}
                disableUnderline={true}
                className={classes.textField}
                id="standard-basic"
                name="initialAmount"
                values={initialFormValues.initialAmount}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </Grid>
            <Box m={2} />
            <Grid item xs={5}>
              <InputLabel
                className={classes.label}
                htmlFor="standard"
                disableAnimation={true}
              >
                Tipo de Fondo
              </InputLabel>
              <Select
                onChange={handleChange}
                disableUnderline={true}
                id="standard"
                className={classes.selector}
                color="secondary"
                name="investmentFund"
                value={initialFormValues.investmentFund}
              >
                <MenuItem value="BLKGUB1">BLKGUB1</MenuItem>
                <MenuItem value="BLK1MAS">BLK1MAS</MenuItem>
                <MenuItem value="GOLD2">GOLD2</MenuItem>
              </Select>
            </Grid>
            <Box m={0.5} />
            <Grid item xs={5}>
              <InputLabel
                className={classes.labelBottom}
                htmlFor="date"
                disableAnimation={true}
              >
                Fecha Histórica
              </InputLabel>
              <TextField
                InputProps={{
                  disableUnderline: true,
                }}
                onChange={handleChange}
                id="date"
                type="date"
                name="date"
                value={initialFormValues.date}
                defaultValue="2017-05-24"
                className={classes.textField}
              />
            </Grid>
            <Box m={2} />
            <Grid item xs={5}>
              <InputLabel
                className={classes.labelBottom}
                htmlFor="standard"
                disableAnimation={true}
              >
                Valor de Inversión
              </InputLabel>
              <Select
                disableUnderline={true}
                id="standard"
                className={classes.selector}
                color="secondary"
                name="investmentValue"
                value={initialFormValues.investmentValue}
                onChange={handleChange}
              >
                <MenuItem value="usd">DÓLARES</MenuItem>
                <MenuItem value="cetes">CETES (no disponible)</MenuItem>
              </Select>
            </Grid>
            <Grid item x={8}>
              <Button
                id="button-calculator"
                className={classes.boton}
                onClick={showResult}
              >
                CALCULA TU INVERSIÓN
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>

      {result ? (
        <div className="card-container">
          <Grid container justify="center">
            <Grid item xs={10}>
              <Tabs
                indicatorColor="primary"
                textColor="primary"
                aria-label="disabled tabs example"
                centered={true}
                style={{
                  backgroundColor: "white",
                  borderRadius: "1px",
                  boxShadow: "0 4px 4px rgba(0,0,0,0.25)",
                }}
              >
                <Tab label="RETORNO" />
                {/* <Tab label="GRÁFICA" disabled /> */}
              </Tabs>
            </Grid>

            <Grid item xs={10}>
              <Card className={classes.cardContainer}>
                <Grid item xs={10}>
                  <CardContent className={classes.rootCard}>
                    <CardMedia
                      image={StackedCoins}
                      component="img"
                      className={classes.coins}
                    ></CardMedia>
                    <div className={classes.cardText}>
                      <Typography className={classes.titlesTypo}>
                        NÚMERO DE TITULOS
                      </Typography>
                      <div className={classes.titlesNumContent}>
                        <Typography
                          style={{
                            size: "14px",
                            fontWeight: "bold",
                            marginRight: "30px",
                          }}
                        >
                          BLKGUB1
                        </Typography>
                        <Typography
                          style={{
                            size: "14px",
                            fontWeight: "bold",
                            color: "#6CBC06",
                          }}
                        >
                          XXX
                        </Typography>
                        <Typography
                          style={{ size: "14px", marginRight: "30px" }}
                        >
                          DOLARES
                        </Typography>
                        <Typography
                          style={{ size: "14px", marginBottom: "5px" }}
                        >
                          XX
                        </Typography>

                        <Typography className={classes.titlesTypo}>
                          GANANCIAS
                        </Typography>

                        <Typography
                          style={{
                            size: "14px",
                            fontWeight: "bold",
                            marginRight: "30px",
                          }}
                        >
                          BLKGUB1
                        </Typography>
                        <Typography
                          style={{
                            size: "14px",
                            fontWeight: "bold",
                            color: "#6CBC06",
                          }}
                        >
                          $XX,XXX
                        </Typography>
                        <Typography
                          style={{ size: "14px", marginRight: "30px" }}
                        >
                          DOLARES
                        </Typography>
                        <Typography
                          style={{ size: "14px", marginBottom: "5px" }}
                        >
                          ${values.initialAmount}
                        </Typography>
                      </div>
                    </div>
                  </CardContent>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : null}
    </div>
  );
}

export default Calculator;
