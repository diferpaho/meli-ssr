import React from 'react';


function Navbar() {
    const styles = {
        background: "#fff159",
    };

    return (
        <header className="App-header">
            <nav className="navbar" style={styles}>
                <div className="container mx-5">
                    <div className='row mx-5 px-5 w-100'>
                        <a className="navbar-brand col-1" href="#">
                            <img src="https://www.expoknews.com/wp-content/uploads/2020/03/1200px-MercadoLibre.svg-1.png" alt="" width="60" height="30" className="d-inline-block align-text-top" />
                        </a>
                        <div className="input-group col">
                            <input type="text" className="form-control" placeholder="Nunca dejes de buscar" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="input-group-text" type="button" id="button-addon2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </nav>
        </header>
    );
}

export default Navbar;