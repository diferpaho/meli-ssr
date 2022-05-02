import React from 'react';


function List() {

  return (
    <section className='container section-content' style={{ minHeight: '90%' }}>
      <div className='row content bg-white mx-5 mt-5'>



        <div className='col-2 '>
          <a href='#'>
            <img src="https://webplanetbogota.com/wp-content/uploads/2021/03/K2-blue.png"
              className="card-img-top " alt="..." />
          </a>
        </div>
        <div className='col-8 text-start py-5'>
          <a href='#' style={{ textDecoration: 'none', color: 'black' }}>
            <h4>$ 850.000</h4>
            <h4>xiaomi 11 LITE 5G NE  nuevo</h4>
          </a>
        </div>
        <div className='col-2 text-start py-5'>
          <h5>smartphones</h5>
        </div>


        <div className='col-2 '>
          <a href='#'>
            <img src="https://i01.appmifile.com/webfile/globalimg/spainOria/K7B-Blue1.png"
              className="card-img-top " alt="..." />
          </a>
        </div>
        <div className='col-8 text-start py-5'>
          <a href='#'>
            <h4>$ 850.000</h4>
            <h4>xiaomi 11 LITE 5G NE  nuevo</h4>
          </a>
        </div>
        <div className='col-2 text-start py-5'>
          <h5>smartphones</h5>
        </div>


        <div className='col-2 '>
          <a href='#'>
            <img src="https://tauretcomputadores.com/images/products/Product_202201251831481790013372.png"
              className="card-img-top " alt="..." />
          </a>
        </div>
        <div className='col-8 text-start py-5'>
          <a href='#'>
            <h4>$ 850.000</h4>
            <h4>xiaomi 11 LITE 5G NE  nuevo</h4>
          </a>
        </div>
        <div className='col-2 text-start py-5'>
          <h5>smartphones</h5>
        </div>
      </div>
    </section>
  );
}

export default List;