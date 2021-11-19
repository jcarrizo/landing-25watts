import React from 'react'
import '../Products/products.css'

function Products() {
  return (
    <>
      <section className="sectionServices d-flex flex-column justify-content-center">
        <h2 className="servicesTitle">Services</h2>
        <div className="w-100 divcontenedor">
          <p className="sub-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel gravida felis, id tempor ex. Suspendisse congue purus eu neque auctor, eget dictum ipsum facilisis. Sed scelerisque sodales lorem,</p>
        </div>
        <div className="d-flex justify-content-center">
          <div className="row  divServices">
            <div className="col-md-3  flex-column">
              <div className="d-flex justify-content-center">

              </div>

              <p className="subtext-icon">Stet clita kasd gubergren</p>
            </div>
            <div className="col-md-3 flex-column">
              <div className="d-flex justify-content-center">

              </div>
              <p className="subtext-icon">At vero eos et accusam</p>
            </div>
            <div className="col-md-3 flex-column">
              <div className="d-flex justify-content-center">

              </div>
              <p className="subtext-icon">Sed ut perspiciatis unde</p>
            </div>
            <div className="col-md-3 flex-column">
              <div className="d-flex justify-content-center">

              </div>
              <p className="subtext-icon">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>


      </section>
    </>
  )
}
export default Products;