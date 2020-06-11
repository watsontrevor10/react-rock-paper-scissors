import React, { useState, useEffect } from "react";
import { Card, Button, Header } from "semantic-ui-react";

const Home = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  const [userChoice, setUserChoice] = useState(null);
  const [compChoice, setCompChoice] = useState(null);
  const [winPrompt, setWinPrompt] = useState("Choose");
  let [wins, setWins] = useState(0);
  let [losses, setLosses] = useState(0);
  const [ties, setTies] = useState(0);

  const handleSubmit = (e) => {
    let indexChoice = Math.floor(Math.random() * 3);
    setCompChoice(indexChoice);
    setUserChoice(e);
    incement()
  };

  useEffect(() => {
    if (userChoice === compChoice && userChoice != null) {
      setWinPrompt("Tie");
    } else if (userChoice === null) {
      setWinPrompt("Choose");
    } else if ((userChoice - compChoice + 3) % 3 == 1) {
      setWinPrompt("You Win");
    } else {
      setWinPrompt("You Lose");
    }
  
  });
  
  const incement = () => {
    if (winPrompt == "Choose") {

    } else if (winPrompt == "You Lose") {
      setLosses(losses + 1);
    } else if (winPrompt == "You Win") {
      setWins(wins + 1) 
    } else {
      setTies(ties + 1);
    }
  }

  return (
    <>
      <div
        style={{ padding: "15px", margin: "10px, auto", textAlign: "center" }}
      >
        <Header as="h1">Rock Paper Scissors</Header>
      </div>
      <Card>
        <Button onClick={() => handleSubmit(0)}>Rock</Button>
      </Card>
      <Card>
        <Button onClick={() => handleSubmit(1)}>Paper</Button>
      </Card>
      <Card>
        <Button onClick={() => handleSubmit(2)}>Scissors</Button>
      </Card>
      <h3>{winPrompt}</h3>
      <h3>Your Choice</h3>
      <Card>
        {userChoice != null ? choices[userChoice] : "Select an Option"}
      </Card>
      <h3>Computer Choice</h3>
      <Card>
        {compChoice != null ? choices[compChoice] : "Select an Option"}
      </Card>
      <h3>Record</h3>
      <Card>
        {wins} - {ties} - {losses}
      </Card>
    </>
  );
};

export default Home;
