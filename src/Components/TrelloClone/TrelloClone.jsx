import React from 'react'
import { Button, Icon, Modal, Divider, Form, Input} from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import css from './TrelloClone.scss';
import Board from './Board';
import BoardCard from './BoardCard';

export default class TrelloClone extends React.Component {
  constructor(){
    super();
    this.state = {
      gen_id: 1,
      board_name: '',
      cards: [],
      modalOpen: false,
    };
  }

  handleCreateBoard = () => {
    this.setState(prevState => {
      const card = new Board(prevState.gen_id, prevState.board_name);
      const cards = prevState.cards.slice();
      cards.push(card);
      return {
        gen_id: prevState.gen_id + 1,
        board_name: '',
        modalOpen: false,
        cards
      }
    });
  }

  handleChange = (e, {name, value}) => this.setState({ [name]: value });
  handleOpenModal = () => this.setState({ modalOpen: true })
  handleCloseModal = () => this.setState({ modalOpen: false })

  renderCreateBoardModal(trigger) {
    const { board_name, modalOpen } = this.state;
    return (
      <Modal trigger={trigger} open={modalOpen} onClose={this.handleCloseModal} size='mini' >
        <Modal.Header>Create new board</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleCreateBoard}>
            <Form.Group>
              <Form.Input
                placeholder='board name'
                name='board_name'
                value={board_name}
                onChange={this.handleChange}
              />
              <Divider />
              <Form.Button basic color='green' disabled={board_name === ''} >Create</Form.Button>
            </Form.Group>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }

  render(){
    return (
      <div>
        <h2 className={css.title}><Link to={'/trello-clone'} >Trello Clone <Icon name='home' color='teal' /></Link></h2>
        {this.renderCreateBoardModal((<Button basic color='green' content='Create a new board...' onClick={this.handleOpenModal} />))}
        {this.state.cards.map((card, i) => {
          return (
            <BoardCard key={`board-card-${i}`} card={card} />
          );
        })}
      </div>
    );
  }
}

