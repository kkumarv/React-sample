import React from 'react';
import { history } from '../helpers/history';
import {
    BrowserRouter as Router, Route, Routes
} from 'react-router-dom';

import Welcome from './welcome';
import App from '../App';

class Template extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            loggedin: true,
        };
    }

    componentDidMount() {
        console.log('sfs');
    }

    render() {


        return (<Router >
            <Routes>
                <Route path="welcome" element={<Welcome />} />
            </Routes>
        </Router>
        );
    }

}
export default Template;