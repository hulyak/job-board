import { useState, useEffect } from 'react';
import {
  Box,
  CircularProgress,
  Grid,
  ThemeProvider,
  Button,
  Typography,
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { firestore, app } from './config';
import theme from './theme';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import JobCard from './components/Job/JobCard';
import NewJobModal from './components/Job/NewJobModal';
import ViewJobModal from './components/Job/ViewJobModal';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [customSearch, setCustomSearch] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [viewJob, setViewJob] = useState({});

  const fetchJobs = async () => {
    setCustomSearch(false);
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

  const fetchCustomJobs = async (jobSearch) => {
    setLoading(true);
    setCustomSearch(true);
    const req = await firestore
      .collection('jobs')
      .orderBy('postedOn', 'desc')
      .where('location', '==', jobSearch.location)
      .where('type', '==', jobSearch.type)
      .get();

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

    const tempData = req.docs.map((job) => ({
      ...job.data(),
      id: job.id,
      postedOn: job.data().postedOn.toDate(),
    }));

    setJobs(tempData);
    setLoading(false);
  };

  const PostJob = async (jobDetails) => {
    await firestore.collection('jobs').add({
      ...jobDetails,
      postedOn: app.firestore.FieldValue.serverTimestamp(),
    });
    fetchJobs();
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header openJobModal={() => setOpenModal(true)} />
      <NewJobModal
        closeJobModal={() => setOpenModal(false)}
        openModal={openModal}
        PostJob={PostJob}
      />
      <ViewJobModal job={viewJob} closeModal={() => setViewJob({})} />
      <Box>
        <Grid container justify='center'>
          <Grid item xs={10}>
            <SearchBar fetchCustomJobs={fetchCustomJobs} />
            {loading ? (
              <Box display='flex' justifyContent='center'>
                <CircularProgress />
              </Box>
            ) : (
              <>
                {customSearch && (
                  <Box my={2} display='flex' justifyContent='flex-end'>
                    <Button onClick={fetchJobs}>
                      <CloseIcon size={20} />
                      Custom Search
                    </Button>
                  </Box>
                )}
                {jobs.map((job) => (
                  <JobCard open={() => setViewJob(job)} key={job.id} {...job} />
                ))}
              </>
            )}
          </Grid>
        </Grid>
      </Box>
      <Box display='flex' justifyContent='center' mt={3} mb={2}>
        <Typography variant='caption'>
          &copy; Hulya Karakaya | All Rights Reserved.
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default App;
