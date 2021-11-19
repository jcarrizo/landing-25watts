import React from 'react'
import '../Products/products.css'

function Products() {
  return (
    <>
      <section className="sectionProducts d-flex flex-column justify-content-center">
        <h2 className="ProductsTitle">Products</h2>
        <h3 className="servicesTitle sub-title-product">In eget tortor tempor mollis purus</h3>


        <div id="carouselProducts" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="d-flex flex-colum justify-content-center mt-5">
                <div class="card card-Products me-5">
                  <div class="card-body d-flex flex-column  justify-content-center">
                    <p className="text-products">Aliquam at dui lorem ipsum</p>
                    <p className="sub-text-products">- Ut mattis gravida efficitur.</p>
                    <p className="sub-text-products">- Ut feugiat vehicula nibh, efficitur laoreet justo.</p>
                    <p className="sub-text-products">- Molestie id. Integer varius enim sit amet egestas.</p>
                    <p className="sub-text-products">- Ut mattis gravida efficitur.</p>
                  </div>
                </div>
                <div class="card card-Products me-5">
                  <div class="card-body d-flex flex-column  justify-content-center">
                    <p className="text-products">Aliquam at dui lorem ipsum</p>
                    <p className="sub-text-products">- Ut mattis gravida efficitur.</p>
                    <p className="sub-text-products">- Ut feugiat vehicula nibh, efficitur laoreet justo.</p>
                    <p className="sub-text-products">- Molestie id. Integer varius enim sit amet egestas.</p>
                    <p className="sub-text-products">- Ut mattis gravida efficitur.</p>
                  </div>
                </div>
                <div class="card card-Products me-5">
                  <div class="card-body d-flex flex-column  justify-content-center">
                    <p className="text-products">Aliquam at dui lorem ipsum</p>
                    <p className="sub-text-products">- Ut mattis gravida efficitur.</p>
                    <p className="sub-text-products">- Ut feugiat vehicula nibh, efficitur laoreet justo.</p>
                    <p className="sub-text-products">- Molestie id. Integer varius enim sit amet egestas.</p>
                    <p className="sub-text-products">- Ut mattis gravida efficitur.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="d-flex flex-colum justify-content-center mt-5">
                <div class="card card-Products me-5">
                  <div class="card-body d-flex flex-column  justify-content-center">
                    <p className="text-products">Aliquam at dui lorem ipsum</p>
                    <p className="sub-text-products">- Ut mattis gravida efficitur.</p>
                    <p className="sub-text-products">- Ut feugiat vehicula nibh, efficitur laoreet justo.</p>
                    <p className="sub-text-products">- Molestie id. Integer varius enim sit amet egestas.</p>
                    <p className="sub-text-products">- Ut mattis gravida efficitur.</p>
                  </div>
                </div>
                <div class="card card-Products me-5">
                  <div class="card-body d-flex flex-column  justify-content-center">
                    <p className="text-products">Aliquam at dui lorem ipsum</p>
                    <p className="sub-text-products">- Ut mattis gravida efficitur.</p>
                    <p className="sub-text-products">- Ut feugiat vehicula nibh, efficitur laoreet justo.</p>
                    <p className="sub-text-products">- Molestie id. Integer varius enim sit amet egestas.</p>
                    <p className="sub-text-products">- Ut mattis gravida efficitur.</p>
                  </div>
                </div>
                <div class="card card-Products me-5">
                  <div class="card-body d-flex flex-column  justify-content-center">
                    <p className="text-products">Aliquam at dui lorem ipsum</p>
                    <p className="sub-text-products">- Ut mattis gravida efficitur.</p>
                    <p className="sub-text-products">- Ut feugiat vehicula nibh, efficitur laoreet justo.</p>
                    <p className="sub-text-products">- Molestie id. Integer varius enim sit amet egestas.</p>
                    <p className="sub-text-products">- Ut mattis gravida efficitur.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="carousel-item">
              <img src="https://picsum.photos/200/300?random=1" class="d-block w-100" alt="..."></img>
            </div> */}
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



      </section>
    </>
  )
}
export default Products;