import React from 'react';
import { Button, Icon, Divider, Grid, Card, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const card = [1, 2, 3];

export default class TrelloCard extends React.Component {
  render() {
    return (
      <div>
        <h2><Link to={'/trello-clone'} >Trello Clone <Icon name='home' color='teal' /></Link></h2>
        <Button basic color='green' content='Create Kanban' onClick={this.handleOpenModal} />
        <Divider />
          <Grid columns={6} >
            {card.map((c, i) => {
              return (
                <Grid.Column key={`card-${i}`}>
                  <Segment placeholder>
                    <Card description={`card-${i}`}/>
                  </Segment>
                </Grid.Column>
              );
            })}
          </Grid>
      </div>
    );
  }
}
