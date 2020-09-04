import React from 'react'
import { Container } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/styles';
import { Button, Typography } from '@material-ui/core'
import '../../assets/styles/Styles.css';
import person from '../../assets/images/Avatar.png';
import blackrock from '../../assets/images/blackrocklogo.png';
import banamex from '../../assets/images/citibanamexlogo.png';
import redbanamex from '../../assets/images/redcitibanamex.png';
import greencard from '../../assets/images/greencard.png';
import bluecard from '../../assets/images/bluecard.png';
import menu from '../../assets/images/menu.png';

import transfer from '../../assets/images/transfer.png';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        margin: theme.spacing(3),
    },
    media: {
        width: theme.spacing(11),
        height: theme.spacing(2),
        margin: theme.spacing(1),
    },
    backColor: {
        // background: rgb(59,172,212),
        // background: linear-gradient(180deg, rgba(59,172,212,1) 0%, rgba(25,70,137,1) 84%),
        width: 411,
        height: 823,
    },
    textTitle: {
        color: '#fafafa',
        align: 'center',
        margin: theme.spacing(5),
    },
    textCard: {
        color: '#fafafa',
        align: 'center',
        margin: theme.spacing(3),
    },
    root: {
        '& .MuiTextField-root': {
            height: theme.spacing(1),
            maxWidth: 105,
        },
    },
    paper: {
        padding: theme.spacing(0),
        
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    sizescards: {
        width: theme.spacing(10),
        height: theme.spacing(6),
        // margin: theme.spacing(3),
    },
    card: {
        backgroundColor: "primary",
    },
    textcard: {
        backgroundColor: "primary",
        align: 'left',
        size:10,
    },
    menu: {
        width: theme.spacing(51),
        height: theme.spacing(10),
        // margin: theme.spacing(1),
    },
}));

function Home() {
    const classes = useStyles();
    return (

        <div className='App container'>

            <Grid container >
                {/* <Grid item xs={3}>
                    <Avatar alt="Remy Sharp" src={person} className={classes.large} />
                </Grid> */}
                <Grid item xs={9}>
                    <Typography variant="h5" align='left' className={classes.textTitle} >¡Hola María!</Typography>
                </Grid>
            </Grid>

            <Grid container justify="center"  >
                <Grid item xs={10}  >
                    <Card  >
                        <CardActionArea>
                            <CardContent>
                                <Typography  variant="h5" component="h2">
                                    Cualquiera puede invertir.
                                </Typography>
                                <Typography  variant="h6" component="h2">
                                    ¡Nosotros te enseñamos!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <CardMedia
                                className={classes.media}
                                image={blackrock}
                                title="Contemplative Reptile"
                            />
                            <Button size="small" color="primary">
                                Aprende Aquí
                            </Button>
                            <CardMedia
                                className={classes.media}
                                image={banamex}
                                title="Contemplative Reptile"
                            />
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

            <Grid >
                <Grid item xs={12}>
                    <Typography  align='left' variant="h6" className={classes.textCard} >Tarjetas de Crédito</Typography>
                </Grid>
            </Grid>
            <Grid container justify="center"  >
                <Grid item xs={10}  >
                    <Card  >
                        {/* <CardActionArea>
                            <CardContent>
                                <Typography  variant="h5" component="h2">
                                    Cualquiera puede invertir.
                                </Typography>
                                <Typography  variant="h6" component="h2">
                                    ¡Nosotros te enseñamos!
                                </Typography>
                            </CardContent>
                        </CardActionArea> */}
                        <CardActions>
                            <CardMedia
                                className={classes.sizescards}
                                image={redbanamex}
                                title="Contemplative Reptile"
                            />
                             <Typography  align='left' >
                                    Tarjeta Clásica Citibanamex ***849<br></br>
                                    $ 1,000.00
                                </Typography>
                            
                        </CardActions>
                        
                    </Card>
                </Grid>
            </Grid>
            <Grid container justify="center"  >
                <Grid item xs={10}  >
                    <Card  >
                        {/* <CardActionArea>
                            <CardContent>
                                <Typography  variant="h5" component="h2">
                                    Cualquiera puede invertir.
                                </Typography>
                                <Typography  variant="h6" component="h2">
                                    ¡Nosotros te enseñamos!
                                </Typography>
                            </CardContent>
                        </CardActionArea> */}
                        <CardActions>
                            <CardMedia
                                className={classes.sizescards}
                                image={redbanamex}
                                title="Contemplative Reptile"
                            />
                             <Typography  align='left' >
                                    Tarjeta Clásica Citibanamex ***849<br></br>
                                    $ 1,000.00
                                </Typography>
                            
                        </CardActions>
                        
                    </Card>
                </Grid>
            </Grid>
            {/* <Grid container >
                <Grid item xs={6}>
                    <CardMedia
                        className={classes.sizescards}
                        image={redbanamex}
                        title="Contemplative Reptile"
                    />
                </Grid>
                <Grid item xs={6}>
                    <CardMedia
                        className={classes.sizescards}
                        image={greencard}
                        title="Contemplative Reptile"
                    />               
                </Grid>
            </Grid>

            <Grid >
                <Grid item xs={12}>
                    <Typography align='left' variant="h6" className={classes.textCard} >Tarjetas de Débito</Typography>
                </Grid>
            </Grid>
            
            <Grid container >
                <Grid item xs={6}>
                    <CardMedia
                        className={classes.sizescards}
                        image={bluecard}
                        title="Contemplative Reptile"
                    />
                </Grid>                
            </Grid>

            <Grid container >
                <Grid item xs={6}>
                    <CardMedia
                        className={classes.menu}
                        image={menu}
                        title="Contemplative Reptile"
                    />
                </Grid>                
            </Grid> */}
           
          
            
        </div>

    )
}

export default Home
