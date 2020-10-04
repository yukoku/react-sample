import React from 'react'
import { withRouter } from 'react-router-dom'
import { Card } from 'semantic-ui-react';

class CardWrapper extends React.Component {
  handleLink = () => {
    this.props.history.push(this.props.card.route);
  }
  render() {
    return (
      <Card description={this.props.card.name} onClick={this.handleLink} />
    );
  }
}

export default withRouter(CardWrapper);
