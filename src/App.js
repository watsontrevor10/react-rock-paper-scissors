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
    userWin: 0,
    compWin: 0,
  };
  
  // set both user and computer choices
  clickChoice = (id) => {
    this.setState({userChoice: id})
    this.userChoiceName()
    let compMath = (Math.floor(Math.random() * 3 + 1))
    this.setState({computerChoice: compMath})
    this.compChoiceName()
    this.winLogic(this.state.computerChoice, this.state.userChoice)
  }

  // convert comp choice into string for display
  compChoiceName = () => {
    switch(this.state.computerChoice) {
      case 1:
        return "ROCK";
      case 2:
        return 'PAPER';
      case 3:
        return 'SCISSORS';
      default :
        return 'None';
    }
  }

  // convert user choice into string for display
  userChoiceName = () => {
    switch(this.state.userChoice) {
      case 1:
        return "ROCK";
      case 2:
        return 'PAPER';
      case 3:
        return 'SCISSORS';
      default :
        return 'None';
    }
  }

  // Logic displaying win and loss
  winLogic = () => {
    const { computerChoice, userChoice } = this.state
    
    if (userChoice === computerChoice) {
      return "TIE"
    } else {
      switch(userChoice && computerChoice) {
        case 1 &&  2:
          return "You Lose" 
        case 1 && 3:
          return "You Win" 
        case  2 && 3:
          return "You Lose"
        case  2 && 1:
          return "You Win"
        case  3 && 1:
          return "You Lose"
        case  3 && 2:
          return "You Win"
        default :
          return null
      }
    }
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
              {this.state.userChoice ? this.userChoiceName(this.userChoiceName) : "User Choice" }
            </Card.Content>
          </Card>
          <h2>vs</h2>
          <Card>
            <Card.Content textAlign="center">
              {this.state.computerChoice ? this.compChoiceName(this.compChoiceName) : "Computer Choice" }
            </Card.Content>
          </Card>
        </Card.Group>

        <Card.Group itemsPerRow="3" centered>
          <Card>
            <Card.Content textAlign="center">
              {this.state.userWin}
            </Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign="center">
              {this.winLogic(this.winLogic)}
            </Card.Content>
          </Card>
          <Card>
            <Card.Content textAlign="center">
              {this.state.compWin}
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    )
  }

}

export default App;
