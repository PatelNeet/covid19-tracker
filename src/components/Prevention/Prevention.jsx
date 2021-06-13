import React from 'react';
import styles from './Prevention.module.css';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

//import images
//Icon downalod Link: https://www.flaticon.com/
import handwash from '../images/hand-wash.png';
import mask from '../images/mask.png';
import stayhome from '../images/stay-home.png';
import newsreport from '../images/news-report.png';
import distance from '../images/distance.png';
import allergic from '../images/allergic.png';


const Prevention = () => {


    return (
        <>

            <div className={styles.root}>
                <Paper className={styles.paper}>
                    <h1>Prevention Steps Agains Coronavirus</h1>

                    <Grid container spacing={4} justify="center">
                        <Grid item xs={4}>
                            <div className={styles.image}>
                                <img className={styles.img} alt="hand-wash" src={handwash} />
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography varaint="body2">Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub</Typography>

                        </Grid>

                    </Grid>
                    <br />

                    <Grid container spacing={4} justify="center">
                        <Grid item xs={6}>
                            <Typography varaint="body2">Stay home and self isolate from others in the household if you feel unwell </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <div className={styles.image}>

                                <img className={styles.img} alt="stay-home" src={stayhome} />
                            </div>
                        </Grid>


                    </Grid>
                    <br />

                    <Grid container spacing={4} justify="center">
                        <Grid item xs={4}>
                            <div className={styles.image}>

                                <img className={styles.img} alt="mask" src={mask} />
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography varaint="body2">Cover your noseland mouth with a disposable tissue or flexed elbow when you cough or sneeze </Typography>
                        </Grid>



                    </Grid>
                    <br />

                    <Grid container spacing={4} justify="center">
                        <Grid item xs={6}>
                            <Typography varaint="body2">Stay informed by watching news & follow the recommended practices </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <div className={styles.image}>

                                <img className={styles.img} alt="news-report" src={newsreport} />
                            </div>
                        </Grid>


                    </Grid>
                    <br />

                    <Grid container spacing={4} justify="center">
                        <Grid item xs={4}>
                            <div className={styles.image}>

                                <img className={styles.img} alt="distance" src={distance} />
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography varaint="body2">Avoid close contact (1 meter or 3 feet) with people who are unwell</Typography>

                        </Grid>

                    </Grid>
                    <br />

                    <Grid container spacing={4} justify="center">
                        <Grid item xs={6}>
                            <Typography varaint="body2">If you have fever, cough and difficulty breathing, seek medical care early</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <div className={styles.image}>

                                <img className={styles.img} alt="allergic" src={allergic} />
                            </div>
                        </Grid>


                    </Grid>
                    <br />

                </Paper>

            </div>

        </>

    )
}

export default Prevention;