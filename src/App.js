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
    userChoice: null,
    computerChoice: null,
  };
  
  
  clickChoice = (name) => {
    this.setState({userChoice: name})
    this.setState({computerChoice: Math.floor(Math.random() * 3 + 1)})
  }

  render() {
    return (
      <Container>
        <Header as="h1" textAlign="center">Rock Paper Scissors React</Header>

        {/* User Choices */}
        <Card.Group itemsPerRow="3">
          {
            this.state.gameChoices.map( gameChoices => (
              <Choices key={gameChoices.id} {...gameChoices} clickChoice={this.clickChoice} />
            ))
          }
        </Card.Group>
          <hr />
        {/* Results */}
        <Card.Group itemsPerRow="3" centered>
          <Card>
            <Card.Content textAlign="center">
              {this.state.userChoice ? this.state.userChoice.toUpperCase() : "User Choice" }
            </Card.Content>
          </Card>
          <h2>vs</h2>
          <Card>
            <Card.Content textAlign="center">Computer Choice + {this.state.computerChoice}</Card.Content>
          </Card>
        </Card.Group>
      </Container>
    )
  }

}

export default App;
