import React, { useState, useEffect } from 'react';
import Axios from "axios";

function Detail(props) {
  

  return (

    <section className='container section-content px-5' style={{ minHeight: '90%' }}>
      
        <div className='row content bg-white mx-5 px-5  mt-5 mb-5'>
          <div className='col-9'>
            <img src={JSON.parse(props.items).items.picture}
              className="card-img-top px-5" alt="..." style={{ width: '70%' }} />
            <h4 className='mt-5 mb-3'>Detalles del producto</h4>
            <p>
            {JSON.parse(props.items).items.description}
            </p>

          </div>
          <div className='col-3 mt-5'>
            <p className='form-text'>{JSON.parse(props.items).items.condition} - {JSON.parse(props.items).items.sold_quantity} vendidos</p>
            <h4>{JSON.parse(props.items).items.title}</h4>
            <h2>${JSON.parse(props.items).items.price.amount}</h2>
            <button className='btn btn-primary w-100'>Comprar</button>

          </div>
        </div>
    
    </section>

  );
}

export default Detail;