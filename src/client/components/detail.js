import React from 'react';


function Detail() {


  return (

    <section className='container section-content px-5' style={{ minHeight: '90%' }}>
      <div className='row content bg-white mx-5 px-5  mt-5 mb-5'>
        <div className='col-9'>
          <img src="https://webplanetbogota.com/wp-content/uploads/2021/03/K2-blue.png"
            className="card-img-top px-5" alt="..." style={{width: '70%'}}/>
          <h4 className='mt-5 mb-3'>Detalles del producto</h4>
          <p>
            In this example we have 3 pages handled by the router: a home page, an about page, and a users page. As you click around on the different  the router renders the matching

            Note: Behind the scenes a  renders an  with a real href, so people using the keyboard for navigation or screen readers will still be able to use this app.
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