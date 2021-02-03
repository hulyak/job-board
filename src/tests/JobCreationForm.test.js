import React from 'react';
import renderer from 'react-test-renderer';
import JobCreationForm from '../JobCreationForm';
import theme from '../theme';
import { ThemeProvider } from '@material-ui/core';

const log = (e) => console.log(e);

describe('JobCreationForm.js', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <JobCreationForm onSubmit={log} />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
