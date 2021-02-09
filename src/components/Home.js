import React from 'react';
import Header from './Header';
import config from '../config';

const Home = (props) => {

    const { authUrl, clientId, redirectUrl } = config.api;

    const handleLogin = () => {
         let url=`${authUrl}?client_id=${clientId}`
         url+=`&redirect_uri=${redirectUrl}`
         url+=`&response_type=token&show_dialog=true`;
         window.location = url;
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