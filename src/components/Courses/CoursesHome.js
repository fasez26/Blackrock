import React from 'react'
import { Container } from '@material-ui/core';
// import { withRouter } from "react-router-dom";
import { makeStyles, Theme } from '@material-ui/styles';
import { Button, Typography } from '@material-ui/core'
import '../../assets/styles/Styles.css';
import person from '../../assets/images/Avatar.png';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles((theme) => ({
    root: {
        minSize: 250, 
      },
    content: {
        flex: '1 0 auto',
      },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        margin: theme.spacing(5),
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
        margin: theme.spacing(8),
    },

}));

function CoursesHome() {
    const classes = useStyles();
    return (

        <div className='App container'>

            <Grid container >
                <Grid item xs={3}>
                    <Avatar alt="Remy Sharp" src={person} className={classes.large} />
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="h5" align='left' className={classes.textTitle} >María Sánchez</Typography>
                </Grid>
            </Grid>

            <Grid>
                <Card className={classes.content}> 
                    <CardContent>
                        <Typography variant="body2">hola soy una card jaja </Typography>
                    </CardContent>
                </Card>
            </Grid>

            
        </div>

    )
}

export default CoursesHome
