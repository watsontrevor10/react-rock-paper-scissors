import React from 'react';
import Home from "./Home"
import { Container, } from 'semantic-ui-react';
import './App.css';


class App extends React.Component {

  render() {
    return (
      <Container>
        <Home />
      </Container>
    )
  }
}

export default App;
