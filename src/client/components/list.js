import React from 'react';


function List(props) {
  if (typeof props.list !== 'undefined') {
    var listJson = JSON.parse(props.list);
  }

  return (
    <section id="list-product" className='container section-content' style={{ minHeight: '90%' }}>
      <div className='row content bg-white mx-5 mt-5'>


        { props.list !== 'undefined' ?
        
        listJson?.map((item) => (
          <>
            <div className='col-2 '>
              <a href={"/items/"+item.id}>
                <img src={item.picture}
                  className="card-img-top " alt="..." />
              </a>
            </div>
            <div className='col-8 text-start py-5'>
              <a href={"/items/"+item.id} style={{ textDecoration: 'none', color: 'black' }}>
                <h4>$ {item.price.amount}</h4>
                <h4>{item.title}</h4>
              </a>
            </div>
            <div className='col-2 text-start py-5'>
              <h5>Tecnologia</h5>
            </div>
          </>
        ))
          :
          <div></div>
      }

        
      </div>
    </section>
  );
}

export default List;