import React from 'react';
import Choices from './Choices';
import { Container, Header, Card, } from 'semantic-ui-react';
import './App.css';

class App extends React.Component {
  state = {
    gameChoices: [
      { id: 1, name: "rock"},
      { id: 2, name: "paper"},
      { id: 3, name: "scissors"},
    ],
  };

  render() {
    return (
      <Container>
        <Header as="h1">Rock Paper Scissors React</Header>

        {/* User Choices */}
        <Card.Group itemsPerRow="3">
          {
            this.state.gameChoices.map( choices => (
              <Choices key={choices.id} {...choices} />
            ))
          }
        </Card.Group>
          <hr />
        {/* Results */}
        <Card.Group itemsPerRow="3" centered>
          <Card>
            <Card.Content>User Choice</Card.Content>
          </Card>
          <h2>vs</h2>
          <Card>
            <Card.Content>Computer Choice</Card.Content>
          </Card>
        </Card.Group>
      </Container>
    )
  }

}

export default App;
