import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

const Cards = ({data: { confirmed, deaths, recovered, lastUpdate }}) => {

    const ru = recovered.value;
    const iu = confirmed.value;
    const du = deaths.value;

    return (
      <div className={styles.container}>
          <Grid container spacing={3} justify="center">
              <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                  <CardContent>
                      <Typography color="textPrimary" gutterBottom>INFECTED</Typography>
                      <Typography variant="h5">
                          <CountUp end={iu} duration={2} seperator=","/>
                      </Typography>
                      <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                      <Typography variant="body2">Number of active cases of Covid-19</Typography>
                  </CardContent>
              </Grid>
              <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                  <CardContent>
                      <Typography color="textPrimary" gutterBottom>RECOVERED</Typography>
                      <Typography variant="h5">
                          <CountUp end={ru} duration={2} seperator=","/>
                      </Typography>
                      <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                      <Typography variant="body2">Number of recovered cases from Covid-19</Typography>
                  </CardContent>
              </Grid>
              <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                  <CardContent>
                      <Typography color="textPrimary" gutterBottom>DEATHS</Typography>
                      <Typography variant="h5">
                          <CountUp end={du} duration={2} seperator=","/>
                      </Typography>
                      <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                      <Typography variant="body2">Number of deaths caused by Covid-19</Typography>
                  </CardContent>
              </Grid>
          </Grid>
      </div>
    )
}

export default Cards;