import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./calculator.css";
import Footer from "../Footer/Footer";
import {
  AppBar,
  Toolbar,
  Typography,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Input,
  InputLabel,
  Select,
  InputAdornment,
  MenuItem,
  Box,
  Button,
  Tabs,
  Tab,
  CardMedia,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import StackedCoins from "../../assets/images/coins2.svg";

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
    marginTop: "23px",
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
  const [titles, setTitles] = useState("");
  const [ganancia, setGanancia] = useState("");
  const [usd, setUsd] = useState("");
  const [usdTitles, setUsdTitles] = useState("");

  let history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const showResult = () => {
    setResult(false);
    setResult(true);
    blkProfits();
    dollarTitles();
    dollarProfits();
    titlesQuantity();
  };

  const blkProfits = () => {
    if (values.investmentFund === "BLKGUB1" && values.date === "28") {
      let res = (parseInt(values.initialAmount) / 2.328255) * 2.330567;
      setGanancia(res.toFixed(2));
    }
    if (values.investmentFund === "BLKGUB1" && values.date === "90") {
      let res = (parseInt(values.initialAmount) / 2.317759) * 2.330567;
      setGanancia(res.toFixed(2));
    }
    if (values.investmentFund === "BLKGUB1" && values.date === "180") {
      let res = (parseInt(values.initialAmount) / 2.297849) * 2.330567;
      setGanancia(res.toFixed(2));
    }
    if (values.investmentFund === "BLKGUB1" && values.date === "360") {
      let res = (parseInt(values.initialAmount) / 2.27226) * 2.330567;
      setGanancia(res.toFixed(2));
    }
    if (values.investmentFund === "BLK1MAS" && values.date === "28") {
      let res = (parseInt(values.initialAmount) / 1.36333) * 1.423958;
      setGanancia(res.toFixed(2));
    }
    if (values.investmentFund === "BLK1MAS" && values.date === "90") {
      let res = (parseInt(values.initialAmount) / 1.349068) * 1.423958;
      setGanancia(res.toFixed(2));
    }
    if (values.investmentFund === "BLK1MAS" && values.date === "180") {
      let res = (parseInt(values.initialAmount) / 1.328557) * 1.423958;
      setGanancia(res.toFixed(2));
    }
    if (values.investmentFund === "BLK1MAS" && values.date === "360") {
      let res = (parseInt(values.initialAmount) / 1.321398) * 1.423958;
      setGanancia(res.toFixed(2));
    }

    if (values.investmentFund === "GOLD2" && values.date === "28") {
      let res = (parseInt(values.initialAmount) / 1.56651) * 1.56629;
      setGanancia(res.toFixed(2));
    }
    if (values.investmentFund === "GOLD2" && values.date === "90") {
      let res = (parseInt(values.initialAmount) / 1.549473) * 1.423958;
      setGanancia(res.toFixed(2));
    }
    if (values.investmentFund === "GOLD2" && values.date === "180") {
      let res = (parseInt(values.initialAmount) / 1.393334) * 1.423958;
      setGanancia(res.toFixed(2));
    }
    if (values.investmentFund === "GOLD2" && values.date === "360") {
      let res = (parseInt(values.initialAmount) / 1.21932) * 1.423958;
      setGanancia(res.toFixed(2));
    }
  };

  const dollarTitles = () => {
    let amt = parseInt(values.initialAmount);
    if (values.date === "28") {
      let usdTitlesQ = amt / 22.2588;
      setUsdTitles(usdTitlesQ.toFixed(2));
    } else if (values.date === "90") {
      let usdTitlesQ = amt / 21.676;
      setUsdTitles(usdTitlesQ.toFixed(2));
    } else if (values.date === "180") {
      let usdTitlesQ = amt / 21.3114;
      setUsdTitles(usdTitlesQ.toFixed(2));
    } else if (values.date === "360") {
      let usdTitlesQ = amt / 21.4004;
      setUsdTitles(usdTitlesQ.toFixed(2));
    }
  };

  const dollarProfits = () => {
    let amount = parseInt(values.initialAmount);
    if (values.date === "28") {
      let usdRes = (amount / 22.2588) * 21.3402;
      setUsd(usdRes.toFixed(2));
    } else if (values.date === "90") {
      let usdRes = (amount / 21.676) * 21.3402;
      setUsd(usdRes.toFixed(2));
    } else if (values.date === "180") {
      let usdRes = (amount / 21.3114) * 21.3402;
      setUsd(usdRes.toFixed(2));
    } else if (values.date === "360") {
      let usdRes = (amount / 21.4004) * 21.3402;
      setUsd(usdRes.toFixed(2));
    }
  };

  const titlesQuantity = () => {
    let amttt = parseInt(values.initialAmount);
    if (values.investmentFund === "BLKGUB1" && values.date === "28") {
      let titleRes = amttt / 2.328255;
      setTitles(titleRes.toFixed(2));
    }
    if (values.investmentFund === "BLKGUB1" && values.date === "90") {
      let titleRes = amttt / 2.317759;
      setTitles(titleRes.toFixed(2));
    }
    if (values.investmentFund === "BLKGUB1" && values.date === "180") {
      let titleRes = amttt / 2.297849;
      setTitles(titleRes.toFixed(2));
    }
    if (values.investmentFund === "BLKGUB1" && values.date === "360") {
      let titleRes = amttt / 2.272266;
      setTitles(titleRes.toFixed(2));
    }
    if (values.investmentFund === "BLK1MAS" && values.date === "28") {
      let titleRes = amttt / 1.36333;
      setTitles(titleRes.toFixed(2));
    }
    if (values.investmentFund === "BLK1MAS" && values.date === "90") {
      let titleRes = amttt / 1.349068;
      setTitles(titleRes.toFixed(2));
    }
    if (values.investmentFund === "BLK1MAS" && values.date === "180") {
      let titleRes = amttt / 1.328557;
      setTitles(titleRes.toFixed(2));
    }
    if (values.investmentFund === "BLK1MAS" && values.date === "360") {
      let titleRes = amttt / 1.321398;
      setTitles(titleRes.toFixed(2));
    }

    if (values.investmentFund === "GOLD2" && values.date === "28") {
      let titleRes = amttt / 1.56651;
      setTitles(titleRes.toFixed(2));
    }
    if (values.investmentFund === "GOLD2" && values.date === "90") {
      let titleRes = amttt / 1.549473;
      setTitles(titleRes.toFixed(2));
    }
    if (values.investmentFund === "GOLD2" && values.date === "180") {
      let titleRes = amttt / 1.393334;
      setTitles(titleRes.toFixed(2));
    }
    if (values.investmentFund === "GOLD2" && values.date === "360") {
      let titleRes = amttt / 1.21932;
      setTitles(titleRes.toFixed(2));
    }
  };

  console.log(values);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
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
          <Typography
            variant="body1"
            align="center"
            style={{ padding: "2em 20px 0px 30px", fontWeight: "bold" }}
          >
            Conoce cuanto habrías ganado ayer de haber invertido en nuestros
            fondos BLK.
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
                name="investmentFund"
                value={values.investmentFund}
              >
                <MenuItem value="BLKGUB1" name="BLKGUB1">
                  BLKGUB1
                </MenuItem>
                <MenuItem value="BLK1MAS" name="BLK1MAS">
                  BLK1MAS
                </MenuItem>
                <MenuItem value="GOLD2" name="GOLD2">
                  GOLD2
                </MenuItem>
              </Select>
            </Grid>
            <Box m={0.5} />
            <Grid item xs={5}>
              <InputLabel
                className={classes.labelBottom}
                htmlFor="date"
                disableAnimation={true}
              >
                Plazo de Inversión
              </InputLabel>
              <Select
                onChange={handleChange}
                disableUnderline={true}
                id="standard"
                className={classes.selector}
                color="secondary"
                name="date"
                value={values.date}
              >
                <MenuItem value="28">28 Días</MenuItem>
                <MenuItem value="90">90 Días</MenuItem>
                <MenuItem value="180">180 Días</MenuItem>
                <MenuItem value="360">360 Días</MenuItem>
              </Select>
            </Grid>
            <Box m={2} />
            <Grid item xs={5}>
              <InputLabel
                className={classes.labelBottom}
                htmlFor="standard"
                disableAnimation={true}
              >
                Valor Comparativo
              </InputLabel>
              <Select
                disableUnderline={true}
                id="standard"
                className={classes.selector}
                color="secondary"
                name="investmentValue"
                value={values.investmentValue}
                onChange={handleChange}
              >
                <MenuItem value="usd">DÓLARES</MenuItem>
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
        <div className="card-container trans">
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
                        NÚMERO DE TÍTULOS
                      </Typography>
                      <div className={classes.titlesNumContent}>
                        <Typography
                          style={{
                            size: "14px",
                            fontWeight: "bold",
                            marginRight: "18px",
                          }}
                        >
                          {values.investmentFund}
                        </Typography>
                        <Typography
                          style={{
                            size: "14px",
                            fontWeight: "bold",
                            color: "#6CBC06",
                          }}
                        >
                          {titles}
                        </Typography>
                        <Typography
                          style={{ size: "14px", marginRight: "21px" }}
                        >
                          DOLARES
                        </Typography>
                        <Typography
                          style={{ size: "14px", marginBottom: "5px" }}
                        >
                          {usdTitles}
                        </Typography>

                        <Typography className={classes.titlesTypo}>
                          GANANCIAS<span style={{ color: "white" }}>.....</span>
                        </Typography>

                        <Typography
                          style={{
                            size: "14px",
                            fontWeight: "bold",
                            marginRight: "15px",
                          }}
                        >
                          {values.investmentFund}
                        </Typography>
                        <Typography
                          style={{
                            size: "14px",
                            fontWeight: "bold",
                            color: "#6CBC06",
                          }}
                        >
                          ${ganancia}
                        </Typography>
                        <Typography
                          style={{ size: "14px", marginRight: "18px" }}
                        >
                          DOLARES
                        </Typography>
                        <Typography
                          style={{ size: "14px", marginBottom: "5px" }}
                        >
                          ${usd}
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
      <Footer />
    </div>
  );
}

export default Calculator;
