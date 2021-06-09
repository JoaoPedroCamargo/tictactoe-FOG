import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/index';
import HowToPlay from '../pages/HowToPlay/index';
import Dificulty from '../pages/Dificulty/index';
import Game from '../pages/Game/index';
import MultiplayerMode from '../pages/MultiplayerMode/index';
import OnlineGame from '../pages/OnlineGame/index';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/HowToPlay" component={HowToPlay} />
    <Route path="/singleplayer" component={Dificulty} />
    <Route path="/game/:difficulty" component={Game} />
    <Route path="/multiplayer" component={MultiplayerMode} />
    <Route path="/onlineGame/:room" component={OnlineGame} />
  </Switch>
);

export default Routes;
