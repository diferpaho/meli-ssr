import React from 'react';
import {
    StaticRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Navbar from './navbar';
import List from './list';
import Items from './items';

const App = (props) => {

    return (
        <div className="App bg-light">
        <Navbar></Navbar>
        
      </div>
    );
};

export default App;