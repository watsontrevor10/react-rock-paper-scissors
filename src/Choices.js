import React from 'react';
import { Card, Button } from 'semantic-ui-react';

const Choices = ({ id, name }) => (
    <Card>
      <Card.Content textAlign="center" >
        <Button>{name}</Button>
      </Card.Content>
    </Card>
)

export default Choices;