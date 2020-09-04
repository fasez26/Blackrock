import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { withRouter } from "react-router-dom";
import Box from '@material-ui/core/Box';
import { makeStyles, Theme } from '@material-ui/styles';
import { Container } from '@material-ui/core';
// import backImage from '../../assets/images/bluebackground.svg';
import { spacing } from '@material-ui/system';
import { TextField } from '@material-ui/core';
import { flexbox } from '@material-ui/system';
import { FormControl } from '@material-ui/core';
// import { createStyles, Theme } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '20ch',
        },
    },
    backColor: {
        // backgroundImage: `url(${backImage})`,
        height: 820,
    },
    textTitle: {
        color: '#fafafa',
    },
    margin: {
        margin: theme.spacing(1),
        width: '20ch',
      },

}));
const currencies = [
    {
        value: 'BLKGUB1',
        label: 'BLKGUB1',
    },
    {
        value: 'BLK1MAS',
        label: 'BLK1MAS',
    },
    {
        value: 'GOLD2',
        label: 'GOLD2',
    },

];

function Calculator() {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('');
    console.log(currency)

    const [values, setValues] = React.useState({
        amount: '',
    });
    console.log(values)
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleChanges = (event) => {
        setCurrency(event.target.value);

    };


    return (
        <div className='App container' >
            <Container color='secondary' className={classes.backColor} >
                <Typography variant="h5" align='left' className={classes.textTitle} >Calculadora de Inversión</Typography>
                <Box bgcolor="background.paper" >
                    <form className={classes.root} noValidate autoComplete="off">
                        <div>
                            <FormControl fullWidth className={classes.margin} variant="filled">
                                <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                                <FilledInput
                                    id="filled-adornment-amount"
                                    value={values.amount}
                                    onChange={handleChange('amount')}
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                            </FormControl>
                            {/* <TextField startAdornment={<InputAdornment position="start">$</InputAdornment>}id="filled-basic" label="Monto de Inversión" variant="filled" color='primary' /> */}
                            <TextField
                                id="filled-select-currency"
                                select
                                label="Tipo de Fondo"
                                value={currency}
                                onChange={handleChanges}
                                // helperText="Please select your currency"
                                variant="filled"
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                        </div>
                    </form>
                </Box>
            </Container>
            {/* <Button color='primary' variant='outlined'>Esto es un Boton</Button> */}
        </div>

    )
}

export default withRouter(Calculator)
