import React, { useState, useEffect } from 'react';
import Axios from "axios";

function Detail(props) {
  const [list, setList] = useState([]);

  return (

    <section className='container section-content px-5' style={{ minHeight: '90%' }}>
      
        <div className='row content bg-white mx-5 px-5  mt-5 mb-5'>
          <div className='col-9'>
            <img src="https://webplanetbogota.com/wp-content/uploads/2021/03/K2-blue.png"
              className="card-img-top px-5" alt="..." style={{ width: '70%' }} />
            <h4 className='mt-5 mb-3'>Detalles del producto</h4>
            <p>
            {JSON.parse(props.items).author.name}
            </p>

          </div>
          <div className='col-3 mt-5'>
            <p className='form-text'>nuevo - 50 vendidos</p>
            <h4>nombre</h4>
            <h2>$ 1900</h2>
            <button className='btn btn-primary w-100'>Comprar</button>

          </div>
        </div>
    
    </section>

  );
}

export default Detail;