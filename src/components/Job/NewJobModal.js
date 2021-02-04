import React, { useState } from 'react';
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
  CircularProgress,
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
  included: {
    backgroundColor: theme.palette.secondary.main,
    color: '#fff',
  },
}));

const NewJobModal = (props) => {
  const classes = useStyles();
  const [jobDetails, setJobDetails] = useState({
    company: '',
    companyUrl: '',
    location: 'Remote',
    salary: '',
    title: '',
    type: 'Full Time',
    applyAt: '',
    description: '',
    skills: [],
  });

  const [jobDetails, setJobDetails] = useState(initState);

  console.log(jobDetails);

  // change the state when user types
  const handleChange = (e) => {
    e.persist();
    setJobDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const addRemoveSkill = (skill) => {
    jobDetails.skills.includes(skill)
      ? // remove skill
        setJobDetails((prevState) => ({
          ...prevState,
          skills: prevState.skills.filter((s) => s !== skill),
        }))
      : //Add skill
        setJobDetails((prevState) => ({
          ...prevState,
          skills: prevState.skills.concat(skill),
        }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    await props.postJob(jobDetails);
    setLoading(false);
  };

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
    <Dialog open={true} fullWidth>
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
            <FilledInput
              onChange={handleChange}
              name='title'
              value={jobDetails.title}
              onChange={(e) => setJobDetails(e.target.value)}
              autoComplete='off'
              placeholder='Job Title *'
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              onChange={handleChange}
              name='type'
              value={jobDetails.type}
              disableUnderline
              variant='filled'
              fullWidth
            >
              <MenuItem value='Full Time'>Full Time</MenuItem>
              <MenuItem value='Part Time'>Part time</MenuItem>
              <MenuItem value='Contract'>Contract</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              onChange={handleChange}
              name='company'
              value={jobDetails.company}
              autoComplete='off'
              placeholder='Company Name *'
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              onChange={handleChange}
              name='company URL'
              value={jobDetails.companyUrl}
              autoComplete='off'
              placeholder='Company URL *'
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              onChange={handleChange}
              name='location'
              value={jobDetails.location}
              disableUnderline
              variant='filled'
              // defaultValue='Remote'
              fullWidth
            >
              <MenuItem value='Remote'>Remote</MenuItem>
              <MenuItem value='In-office'>In-Office</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              onChange={handleChange}
              name='Apply at'
              value={jobDetails.applyAt}
              autoComplete='off'
              placeholder='Job Link *'
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FilledInput
              onChange={handleChange}
              name='description'
              value={jobDetails.description}
              autoComplete='off'
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
              <Box
                onClick={() => addRemoveSkill(skill)}
                key={skill}
                className={`${classes.skills} ${
                  jobDetails.skills.includes(skill) && classes.included
                }`}
              >
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
          <Button
            onClick={handleSubmit}
            variant='contained'
            disabledElevation
            color='primary'
            disabled={loading}

          >
            {loading ? CircularProgress color="secondary" size={22} /> }
            Post Job
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default NewJobModal;
