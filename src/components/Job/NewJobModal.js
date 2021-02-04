import React from 'react';
import {
  Box,
  Grid,
  FilledInput,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  makeStyles,
  DialogActions,
  Button,
  IconButton,
} from '@material-ui/core';

import { Close as CloseIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  skills: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    fontSize: '14.5px',
    borderRadius: '5px',
    transition: '.3s',
    cursor: 'pointer',
    fontWeight: 600,
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,

    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: '#fff',
    },
  },
}));

const NewJobModal = () => {
  const classes = useStyles();
  const skills = [
    'JavaScript',
    'React',
    'Node',
    'Vue',
    'Firebase',
    'MongoDB',
    'SQL',
  ];
  return (
    <Dialog open={false} fullWidth>
      <DialogTitle>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          Post a Job
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilledInput placeholder='Job Title *' disableUnderline fullWidth />
          </Grid>
          <Grid item xs={6}>
            <Select
              disableUnderline
              variant='filled'
              defaultValue='Full Time'
              fullWidth
            >
              <MenuItem value='Full Time'>Full Time</MenuItem>
              <MenuItem value='Part Time'>Part time</MenuItem>
              <MenuItem value='Contract'>Contract</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              placeholder='Company Name *'
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              placeholder='Company URL *'
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              disableUnderline
              variant='filled'
              defaultValue='Remote'
              fullWidth
            >
              <MenuItem value='Remote'>Remote</MenuItem>
              <MenuItem value='In-office'>In-Office</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput placeholder='Job Link *' disableUnderline fullWidth />
          </Grid>
          <Grid item xs={12}>
            <FilledInput
              placeholder='Job Description *'
              disableUnderline
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography>Skills</Typography>
          <Box display='flex'>
            {skills.map((skill) => (
              <Box key={skill} className={classes.skills}>
                {skill}
              </Box>
            ))}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box
          color='red'
          width='100%'
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography variant='caption'>* Required Fields</Typography>
          <Button variant='contained' disabledElevation color='primary'>
            Post Job
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default NewJobModal;
