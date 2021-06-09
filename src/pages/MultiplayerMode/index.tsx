import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { generateRoomCode } from '../../utils/generateRoomCode';

import {Container, MenuContainer} from './styles';


const MultiplayerMode: React.FC = () => {
  const [room, setRoom] = useState<string>();

  const history = useHistory();

  function goToMultiplayer() {
    var roomCode = '';
    roomCode = generateRoomCode(5);
    history.push(`/onlineGame/${roomCode}`);
  }

  return (
    <Container>
      Multiplayer
      <MenuContainer>
        <button onClick={goToMultiplayer}>Criar partida</button>

        <input type="text" placeholder="Sala" id="roomCode" name="roomCode" onChange={(event => setRoom(event.target.value))} />

        <Link onClick={e => !room ? e.preventDefault() : null} to={`/onlineGame/${room}`}>
          <button>Entrar na sala</button>
        </Link>

        <Link to="/game/local">
          <button>Local</button>
        </Link>
      </MenuContainer>
    </Container>
  );
};

export default MultiplayerMode;
