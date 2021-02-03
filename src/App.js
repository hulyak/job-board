import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
