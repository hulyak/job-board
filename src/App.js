import { useState, useEffect } from 'react';
import { Box, CircularProgress, Grid, ThemeProvider } from '@material-ui/core';
import theme from './theme';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import JobCard from './components/Job/JobCard';
import NewJobModal from './components/Job/NewJobModal';
import { firestore, app } from './config';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [customSearch, setCustomSearch] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [viewJob, setViewJob] = useState({});

  const fetchJobs = async () => {
    const request = await firestore
      .collection('jobs')
      .orderBy('postedOn', 'desc')
      .get();
    const tempJobs = request.docs.map((job) => ({
      ...job.data(),
      id: job.id,
      postedOn: job.data().postedOn.toDate(),
    }));
    // console.log(tempJobs)
    setJobs(tempJobs);
    setLoading(false);
  };
  // save in the firestore as a new document
  const postJob = async (jobDetails) => {
    await firestore
      .collection('jobs')
      // bring the date from firestore timestamp
      .add({
        ...jobDetails,
        postedOn: app.firestore.fieldValue.serverTimestamp(),
      });
    fetchJobs();
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <NewJobModal />
      <Grid container justify='center'>
        <Grid item xs={10}>
          <SearchBar />
          {loading ? (
            <Box display='flex' justifyContent='center'>
              <CircularProgress />
            </Box>
          ) : (
            jobs.map((job) => <JobCard key={job.id} {...job} />)
          )}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
