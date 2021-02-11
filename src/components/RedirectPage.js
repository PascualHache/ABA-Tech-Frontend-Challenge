import React from 'react';
import _ from 'lodash';
import { getParamValues } from '../utils/functions';

export default class RedirectPage extends React.Component {
    componentDidMount() {
        const { history, location } = this.props;
        try {
            if (_.isEmpty(location.hash)) {
                return history.push('/main');
            }
            const access_token = getParamValues(location.hash);
            localStorage.setItem('params', JSON.stringify(access_token));
            history.push('/main');
        } catch (error) {
            history.push('/login');
        }
    }
    render() {
        return null;
    }
}