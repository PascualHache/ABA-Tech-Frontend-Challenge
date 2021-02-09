import React from 'react';
import Header from './Header';
import config from '../config';

const Home = (props) => {

    const { authUrl, clientId, redirectUrl } = config.api;

    const handleLogin = () => {
        window.location = `${authUrl}?client_id=${clientId}
        &redirect_uri=${redirectUrl}
        &response_type=token&show_dialog=true`;
    };

    return (
        <div className="login">
            <Header />
            <button type="submit" onClick={handleLogin}>
                Login to spotify
            </button>
        </div>
    );
};

export default (Home);