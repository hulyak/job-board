import React, { useState } from 'react';
import {
  Box,
  Button,
  MenuItem,
  Select,
  makeStyles,
  CircularProgress,
} from '@material-ui/core';

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: '#fff',
    display: 'flex',
    boxShadow: '0px 1px 5px rgba(0,0,0,0.1)',
    borderRadius: '5px',
    '& > * ': {
      flex: 1,
      height: '45px',
      margin: '8px',
    },
  },
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [loading, setLoading] = useState(false);

  const [jobSearch, setJobSearch] = useState({
    type: 'Full Time',
    location: 'Remote',
  });

  const handleChange = (e) => {
    e.persist();
    setJobSearch((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const search = async () => {
    setLoading(true);
    await props.fetchCustomJobs(jobSearch);
    setLoading(false);
  };

  const classes = useStyles();
  return (
    <Box className={classes.wrapper} p={2} mt={-5} mb={2}>
      <Select
        disableUnderline
        variant='filled'
        // defaultValue='Full Time'
        onChange={handleChange}
        value={jobSearch.type}
        name='type'
      >
        <MenuItem value='Full Time'>Full Time</MenuItem>
        <MenuItem value='Part Time'>Part time</MenuItem>
        <MenuItem value='Contract'>Contract</MenuItem>
      </Select>
      <Select
        onChange={handleChange}
        value={jobSearch.location}
        name='location'
        disableUnderline
        variant='filled'
        // defaultValue='Remote'
      >
        <MenuItem value='Remote'>Remote</MenuItem>
        <MenuItem value='In-office'>In-Office</MenuItem>
      </Select>
      <Button
        variant='contained'
        color='primary'
        disableElevation
        onClick={search}
      >
        {loading ? <CircularProgress color='secondary' size={22} /> : 'Search'}
      </Button>
    </Box>
  );
};
