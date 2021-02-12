import React from 'react';
import _ from 'lodash';
import { getParamValues } from '../utils/functions';

export default class RedirectPage extends React.Component {
    componentDidMount() {
        const { history, location } = this.props;
        try {
            if (_.isEmpty(location.hash)) {
                console.log("empty")
                return history.push('/ABA-Tech-Frontend-Challenge/Main');
            }
            console.log("location", location)
            const access_token = getParamValues(location.hash);
            localStorage.setItem('params', JSON.stringify(access_token));
            history.push('/ABA-Tech-Frontend-Challenge/Main');
        } catch (error) {
            console.log(error)
            history.push('/ABA-Tech-Frontend-Challenge/');
        }
    }
    render() {
        return null;
    }
}