import React from 'react';
import { Box, Grid, Typography, Button } from '@material-ui/core';

export default (props) => (
  <Box bgcolor='secondary.main' color='white' py={10}>
    <Grid container justify='center'>
      <Grid item xs={10}>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='h3'>Job Board</Typography>
          <Button variant='contained' color='primary' disableElevation>
            Post a Job
          </Button>
        </Box>
      </Grid>
    </Grid>
  </Box>
);
