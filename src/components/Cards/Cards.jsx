import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

const Cards = ({data: { confirmed, deaths, recovered, lastUpdate }}) => {

    return (
      <div className={styles.container}>
          <Grid container spacing={3} justify="center">
              <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                  <CardContent>
                      <Typography color="textSecondary" gutterBottom>INFECTED</Typography>
                      <Typography variant="h5">
                          {confirmed ? <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/> : <Skeleton/>}
                      </Typography>
                      <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                      <Typography variant="body2">Number of active cases of Covid-19</Typography>
                  </CardContent>
              </Grid>
              <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                  <CardContent>
                      <Typography color="textSecondary" gutterBottom>RECOVERED</Typography>
                      <Typography variant="h5">
                          {recovered ? <CountUp start={0} end={recovered.value} duration={2.5} separator=","/> : <Skeleton/>}
                      </Typography>
                      <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                      <Typography variant="body2">Number of recovered cases from Covid-19</Typography>
                  </CardContent>
              </Grid>
              <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                  <CardContent>
                      <Typography color="textSecondary" gutterBottom>DEATHS</Typography>
                      <Typography variant="h5">
                          {deaths ? <CountUp start={0} end={deaths.value} duration={2.5} separator=","/> : <Skeleton/>}
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