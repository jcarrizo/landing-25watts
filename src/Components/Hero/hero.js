import React, { useEffect } from 'react'
import axios from 'axios'
import '../Hero/hero.css'
import image from "../../Images/slide1-background@2x.png"
import image2 from "../../Images/slide2-background@2x.png"
import image3 from "../../Images/slide3-background@2x.png"
import logo from "../../Images/logo_25w.svg"

function Hero() {


  useEffect(() => {
    axios.get('http://localhost:3000/images')
      .then(function (response) {
        console.log(response.data);
      }
      )
  }, [])



  return (<>
    <header className="d-flex justify-content-center row py-3 mb-4 fixed-top">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto  text-decoration-none col-md-6">
        <img src={logo} className="logo"></img>
      </a>

      <ul className="nav nav-pills  col-md-6">
        <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">About Us</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Products</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Details</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
      </ul>
    </header>
    {/* <!-- hero section --> */}
    <section>
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image} className="d-block w-100 imagenes" alt="..."></img>
            <div className="carousel-text">
              <h3 className="fontSlider">Sed ut perspiciatis</h3>
              <h3 className="fontSlider2">unde omnis iste natus</h3>
              <p className="subfontSlider">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
              <button type="button" className="btn btn-hero btn-lg">Read more</button>
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100 imagenes" alt="..."></img>
            <div className="carousel-text">
              <h3 className="fontSlider">Proin elementum</h3>
              <h3 className="fontSlider2">massa et felis</h3>
              <p className="subfontSlider">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
              <button type="button" className="btn btn-hero btn-lg">Read more</button>
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100 imagenes" alt="..."></img>
            <div className="carousel-text">
              <h3 className="fontSlider">Nulla rhoncus</h3>
              <h3 className="fontSlider2">vulputate congue</h3>
              <p className="subfontSlider">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
              <button type="button" className="btn btn-hero btn-lg">Read more</button>
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  </>)
}


export default Hero;