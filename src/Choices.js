import React from 'react';
import { Card, Button } from 'semantic-ui-react';

class Choices extends React.Component {
  state = { id: "", name: "" }
  
  render() {
    const { name, id, clickChoice } = this.props
    return (
      <Card>
      <Card.Content textAlign="center" >
        <Button onClick={() => clickChoice(id)}>{name.toUpperCase()}</Button>
      </Card.Content>
    </Card>
    )
  }
}

// const Choices = ({ id, name, userClick }) => (
//     <Card>
//       <Card.Content textAlign="center" >
//         <Button onClick={() => userClick(id)}>{name.toUpperCase()}</Button>
//       </Card.Content>
//     </Card>
// )

export default Choices;