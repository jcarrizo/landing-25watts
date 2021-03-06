import React from 'react'
import '../Products/products.css'

function Products({ products }) {
  return (
    <>
      <section className="sectionProducts d-flex flex-column justify-content-center">
        {
          products.map((data) => {
            return (<>
              <h2 className="ProductsTitle">{data.textTitle}</h2>
              <h3 className="servicesTitle sub-title-product">{data.textSubTitle}</h3>
              <div id="carouselProducts" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div className="d-flex flex-colum justify-content-center mt-5">
                      <div class="card card-Products me-5">
                        <div class="card-body d-flex flex-column  justify-content-center">
                          <p className="text-products">{data.textTitleCard}</p>
                          <p className="sub-text-products">{data.textcard1}</p>
                          <p className="sub-text-products">{data.textcard2}</p>
                          <p className="sub-text-products">{data.textcard3}</p>
                          <p className="sub-text-products">{data.textcard4}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="d-flex flex-colum justify-content-center mt-5">
                      <div class="card card-Products me-5">
                        <div class="card-body d-flex flex-column  justify-content-center">
                          <p className="text-products">{data.textTitleCard}</p>
                          <p className="sub-text-products">{data.textcard1}</p>
                          <p className="sub-text-products">{data.textcard2}</p>
                          <p className="sub-text-products">{data.textcard3}</p>
                          <p className="sub-text-products">{data.textcard4}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="d-flex flex-colum justify-content-center mt-5">
                      <div class="card card-Products me-5">
                        <div class="card-body d-flex flex-column  justify-content-center">
                          <p className="text-products">{data.textTitleCard}</p>
                          <p className="sub-text-products">{data.textcard1}</p>
                          <p className="sub-text-products">{data.textcard2}</p>
                          <p className="sub-text-products">{data.textcard3}</p>
                          <p className="sub-text-products">{data.textcard4}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselProducts" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselProducts" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </>)
          })
        }
      </section>
    </>
  )
}
export default Products;