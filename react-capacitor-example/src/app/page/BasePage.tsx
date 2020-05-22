import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { BaseLayout } from '../layout/BaseLayout';



export const BasePage: React.FC<{}>=()=> {
  return (
    <React.Fragment>
      <Container >
        <BaseLayout/>
      </Container>
    </React.Fragment>
  );
}
