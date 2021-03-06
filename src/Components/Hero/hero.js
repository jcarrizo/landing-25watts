import React from 'react'
import Slider from 'react-touch-drag-slider'
import styled from 'styled-components'
import '../Hero/hero.css'
import logo from "../../Images/logo_25w.svg"

// json-server --watch db.json

function Hero({ hero }) {

  const AppStyles = styled.main`
  height: 100vh;
  width: 100%;
  object-fit: cover;
`
  return (<>
    <div className="desplegableMenu fixed-top ">
      <div class="collapse " id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <h5 class="text-white h4">Collapsed content</h5>
          <span class="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark ">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
    <header className="Header-visibility d-flex justify-content-center row py-3 mb-4 fixed-top">
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
      <AppStyles>
        <Slider>
          {hero.map(({ url, title, text1, text2 }, index) => (
            <>
              <img src={url} className="image-slider w-100" key={index} alt={title} ></img>
              <div className="slider-text">
                <h3 className="fontSlider">{text1}</h3>
                <h3 className="fontSlider2">{text2}</h3>
                <p className="subfontSlider">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                <button type="button" className="btn btn-hero btn-lg">Read more</button>
              </div>
            </>
          ))}
        </Slider>
      </AppStyles>
    </section>
  </>)
}


export default Hero;