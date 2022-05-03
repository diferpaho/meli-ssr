import React from 'react';

import Navbar from './navbar';
import List from './list';

const Itemid = (props) => {

    return (
        <div className="App bg-light">
        <Navbar></Navbar>
        
      </div>
    );
};

Itemid.defaultProps = {
    items: []
};

export default Itemid;