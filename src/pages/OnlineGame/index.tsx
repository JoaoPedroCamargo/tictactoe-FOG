import React from 'react';
import { useParams } from 'react-router';

import OnlineGameBoard from '../../components/OnlineBoard';

interface onlineGameProps {
    room: string;
}

const OnlineGame: React.FC<onlineGameProps> = () => {
    const { room } = useParams<onlineGameProps>();


    return (
        <OnlineGameBoard roomCode={room}/>
    );
};

export default OnlineGame;

