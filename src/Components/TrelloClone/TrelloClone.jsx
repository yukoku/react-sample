import React from 'react'
import { Button } from 'semantic-ui-react';
import css from './TrelloClone.scss';

const TrelloClone = () => (
  <div>
    <h2 className={css.title}>Trello Clone</h2>
    <Button basic color='green' content='Create a new board...' />
  </div>
)

export default TrelloClone;