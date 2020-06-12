import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Header,
  Statistic,
  Divider,
  Icon,
} from "semantic-ui-react";

const Home = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  const [userChoice, setUserChoice] = useState(null);
  const [compChoice, setCompChoice] = useState(null);
  const [winPrompt, setWinPrompt] = useState("Choose");
  let [wins, setWins] = useState(0);
  let [losses, setLosses] = useState(0);
  const [ties, setTies] = useState(0);

  // executes whenever a button is clicked
  const handleSubmit = (e) => {
    // Generates random number and assigns that as computer choice
    let indexChoice = Math.floor(Math.random() * 3);
    setCompChoice(indexChoice);
    // Grabs index number from user choice
    setUserChoice(e);

    // Increment win/ties/losses by 1
    if (e === indexChoice) {
      setTies(ties + 1);
    } else if ((e - indexChoice + 3) % 3 === 1) {
      setWins(wins + 1);
    } else {
      setLosses(losses + 1);
    }
  };

  // Sets the win/tie/lose prompt every time user clicks an option
  useEffect(() => {
    if (userChoice === compChoice && userChoice !== null) {
      setWinPrompt("Tie");
    } else if (userChoice === null) {
      setWinPrompt("Choose");
    } else if ((userChoice - compChoice + 3) % 3 === 1) {
      setWinPrompt("You Win");
    } else {
      setWinPrompt("You Lose");
    }
  });

  return (
    <>
      <div style={{ padding: "20px", marginTop: "20px", textAlign: "center" }}>
        <Header as="h1">Rock Paper Scissors</Header>
      </div>

      <div style={{ padding: "20px", marginBottom: "20px" }}>
        <Card.Group centered items="raised">
          <Card>
            <Button onClick={() => handleSubmit(0)}>
              <Icon name="hand rock" color="black" size="huge" />
            </Button>
          </Card>
          <Card>
            <Button onClick={() => handleSubmit(1)}>
              <Icon name="hand paper" color="black" size="huge" />
            </Button>
          </Card>
          <Card>
            <Button onClick={() => handleSubmit(2)}>
              <Icon name="hand scissors" color="black" size="huge" />
            </Button>
          </Card>
        </Card.Group>
      </div>

      {/* Displays the winner and the choices */}
      <div style={{ padding: "15px", marginBottom: "15px" }}>
        <Card.Group centered items="raised">
          <Card>
            <Header block as="h2" textAlign="center" size="huge">
              {userChoice != null ? choices[userChoice] : "Your Choice"}
            </Header>
          </Card>
          <Card>
            <Header block as="h2" textAlign="center" size="huge">
              {winPrompt}
            </Header>
          </Card>
          <Card>
            <Header block as="h2" textAlign="center" size="huge">
              {compChoice != null ? choices[compChoice] : "Computer Choice"}
            </Header>
          </Card>
        </Card.Group>
        <Divider horizontal></Divider>
      </div>

      {/* Win/Tie/Lose cards */}
      <Card.Group centered>
        <Card centered color="green">
          <Statistic>
            <Statistic.Label>Wins</Statistic.Label>
            <Statistic.Value>{wins}</Statistic.Value>
          </Statistic>
        </Card>
        <Card centered color="yellow">
          <Statistic>
            <Statistic.Label>Ties</Statistic.Label>
            <Statistic.Value>{ties}</Statistic.Value>
          </Statistic>
        </Card>
        <Card centered color="red">
          <Statistic>
            <Statistic.Label>Losses</Statistic.Label>
            <Statistic.Value>{losses}</Statistic.Value>
          </Statistic>
        </Card>
      </Card.Group>

      <div style={{ paddingTop: "10em", textAlign: "center"}}>
        <h3>By</h3>
        <h3>
          <a
            href="https://trevorwatson.me/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Trevor Watson
          </a>
        </h3>
      </div>
    </>
  );
};

export default Home;
