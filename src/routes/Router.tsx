import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/index';
import HowToPlay from '../pages/HowToPlay/index';
import Dificulty from '../pages/Dificulty/index';
import Game from '../pages/Game/index';
import MultiplayerMode from '../pages/MultiplayerMode/index';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/HowToPlay" component={HowToPlay} />
    <Route path="/gameDificulty" component={Dificulty} />
    <Route path="/game" component={Game} />
    <Route path="/multiplayer" component={MultiplayerMode} />
  </Switch>
);

export default Routes;
