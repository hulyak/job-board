import React from 'react';
import { Box, Grid, Typography, Button, makeStyles } from '@material-ui/core';

const skills = ['Javascript', 'ReactJS', 'NodeJS'];
const useStyles = makeStyles((theme) => ({
  wrapper: {
    border: '1px solid #e8e8e8',
    cursor: 'pointer',
    transition: '.3s',

    '&:hover': {
      boxShadow: '0px 5px 25px rgba(0,0,0,0.1)',
      borderLeft: '6px solid #4d64e4',
    },
  },
  companyName: {
    fontSize: '13.5px',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(0.75),
    borderRadius: '5px',
    display: 'inline-block',
    fontWeight: 600,
  },
  skills: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    fontSize: '14.5px',
    borderRadius: '5px',
    transition: '.3s',
    cursor: 'pointer',
    fontWeight: 600,
    backgroundColor: theme.palette.secondary.main,
    color: '#fff',
  },
}));

const JobCard = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper} p={2}>
      <Grid container alignItems='center'>
        <Grid item xs>
          <Typography variant='subtitle1'>Frontend Dev</Typography>
          <Typography variant='subtitle1' className={classes.companyName}>
            Google
          </Typography>
        </Grid>
        <Grid item container xs>
          {skills.map((skill) => (
            <Grid item key={skill} className={classes.skills}>
              {skill}
            </Grid>
          ))}
        </Grid>
        <Grid item container direction='column' alignItems='flex-end' xs>
          <Grid item>
            <Typography variant='caption'>
              2577 min | Full Time | Remote
            </Typography>
          </Grid>
          <Grid item>
            <Box mt={2}>
              <Button variant='outlined'>Check</Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobCard;
