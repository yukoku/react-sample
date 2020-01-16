import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Grid, Menu, Segment, Divider } from 'semantic-ui-react';
import Home from './Home/Home';
import TrelloClone from './TrelloClone/TrelloClone';
import UserDashboard from './UserDashboard/UserDashboard';
import Vis from './VIS/Vis';

const apps = [
  {name: 'Home', route: '/', component: Home},
  {name: 'Trello Clone', route: '/trello-clone', component: TrelloClone},
  {name: 'User Dashboard', route: '/user-dashboard', component: UserDashboard},
  {name: 'React VIS', route: '/react-vis', component: Vis},
]

const App = () => (
  <BrowserRouter>
    <Grid>
      <Grid.Column width={4}>
      <Menu fluid vertical tabular>
        {apps.map(obj => {
          return (
            <>
              <Menu.Item><Link to={obj.route}>{obj.name}</Link></Menu.Item>
              <Divider />
            </>
          );
        })}
      </Menu>
      </Grid.Column>
      <Grid.Column streched width={12}>
        <Segment>
          {apps.map(obj => {
          if(obj.name === 'Home'){
            return (
              <Route exact path='/' component={Home} />
            );
          }else{
            return (
              <Route path={obj.route} component={obj.component} />
            );
          }
          })}
        </Segment>
      </Grid.Column>
    </Grid>
  </BrowserRouter>
);

export default App;
