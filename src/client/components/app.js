import React from 'react';

import Navbar from './navbar';
import List from './list';

const App = (props) => {

    return (
        <div className="App bg-light">
        <Navbar></Navbar>
        
      </div>
    );
};

App.defaultProps = {
    items: []
};

export default App;