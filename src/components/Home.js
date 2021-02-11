import React, { useState } from 'react';
import { connect } from 'react-redux';
import config from '../config';

const Home = () => {

    const { authUrl, redirectUrl } = config.api;

    const [name, setName] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        localStorage.setItem('clientID', name)
        handleLogin()
    }
    const handleLogin = () => {
        let url = `${authUrl}?client_id=${localStorage.getItem("clientID")}`
        url += `&redirect_uri=${redirectUrl}`
        url += `&response_type=token&show_dialog=true`;
        window.location = url;
    };

    return (
        <div className="login">
            <div className="welcomeMsg">
                <h1>Welcome</h1>
                <p>There's only one way you can acces to this demo and is getting my Spotify <strong>client ID</strong> and pasting it below</p>
                <p>Send me an email and I will send you</p>
                <a href="mailto:hector.pascual.diaz@gmail.com@" target="_blank" rel="noopener noreferrer">hector.pascual.diaz@gmail.com</a>
            </div>
            <form onSubmit={handleSubmit} className="welcome-form">
                <label>
                    Client ID:
                        <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <button type="submit" value="Submit" className="button-login">Login to spotify</button>
            </form>

        </div>
    );
};

export default connect()(Home);