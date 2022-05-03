import React from 'react';


function List(props) {


  return (
    <section className='container section-content' style={{ minHeight: '90%' }}>
      <div className='row content bg-white mx-5 mt-5'>


        {JSON.parse(props.list).map((item) => (
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
              <h5>Tecnología</h5>
            </div>
          </>
        ))}

        
      </div>
    </section>
  );
}

export default List;