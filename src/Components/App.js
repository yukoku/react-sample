import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Grid, Menu, Segment } from 'semantic-ui-react';
import Home from './Home/Home';
import TrelloClone from './TrelloClone/TrelloClone';
import UserDashboard from './UserDashboard/UserDashboard';

const App = () => (
  <BrowserRouter>
    <Grid>
      <Grid.Column width={4}>
      <Menu fluid vertical tabular>
        <Menu.Item><Link to='/'>Home</Link></Menu.Item>
        <Menu.Item><Link to='/trello-clone'>Trello Clone</Link></Menu.Item>
        <Menu.Item><Link to='/user-dashboard'>User Dashboard</Link></Menu.Item>
      </Menu>
      </Grid.Column>
      <Grid.Column streched width={12}>
        <Segment>
          <Route exact path='/' component={Home} />
          <Route path='/trello-clone' component={TrelloClone} />
          <Route path='/user-dashboard' component={UserDashboard} />
        </Segment>
      </Grid.Column>
    </Grid>
  </BrowserRouter>
);

export default App;
