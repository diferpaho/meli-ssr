import React from 'react';

import Navbar from './navbar';
import List from './list';

const Itemsearch = (props) => {

    return (
        <div className="App bg-light">
        <Navbar></Navbar>
        
      </div>
    );
};

Itemsearch.defaultProps = {
    items: []
};

export default Itemsearch;