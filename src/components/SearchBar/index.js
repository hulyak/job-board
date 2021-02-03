import { Box, Button, MenuItem, Select, makeStyles } from '@material-ui/core';
import React from 'react';

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
  const classes = useStyles();
  return (
    <Box className={classes.wrapper} p={2} mt={-5} mb={2}>
      <Select disableUnderline variant='filled' defaultValue='Full Time'>
        <MenuItem value='Full Time'>Full Time</MenuItem>
        <MenuItem value='Part Time'>Part time</MenuItem>
        <MenuItem value='Contract'>Contract</MenuItem>
      </Select>
      <Select disableUnderline variant='filled' defaultValue='Remote'>
        <MenuItem value='Remote'>Remote</MenuItem>
        <MenuItem value='In-office'>In-Office</MenuItem>
      </Select>
      <Button variant='contained' color='primary' disableElevation>
        Search
      </Button>
    </Box>
  );
};
