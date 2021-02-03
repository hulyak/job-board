import theme from './theme';
import './App.css';
import Header from './components/Header';
import { Grid, ThemeProvider } from '@material-ui/core';
import SearchBar from './components/SearchBar';
import JobCard from './components/Job/JobCard';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Grid container justify='center'>
        <Grid item xs={10}>
          <SearchBar />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
