import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    helloThereStyle: {
        fontStyle: 'oblique',
    }
})

function Calculator() {
    const classes = useStyles();
    return (
        <div className='App'>
            <Typography
                variant='h1'
                color='secondary'
                className={classes.helloThereStyle}
            >
                Hola
            </Typography>
            <Button color='primary' variant='outlined'>Esto es un Boton</Button>
        </div>
    )
}

export default Calculator
