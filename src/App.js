import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AboutUs from './Components/aboutUs/aboutUs';
import Services from './Components/Services/services';
import Products from './Components/Products/products';
import Details from './Components/Details/details';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';
import Hero from './Components/Hero/hero';


function App() {
  const [hero, setHero] = useState([])
  const [about, setAbout] = useState([])
  const [services, setServices] = useState([])
  const [products, setProducts] = useState([])
  const [details, setDetails] = useState([])
  const [footer, setFooter] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/hero')
      .then(function (response) {
        setHero(response.data)

      });
    axios.get('http://localhost:3000/about')
      .then(function (response) {
        setAbout(response.data)
      })
    axios.get('http://localhost:3000/services')
      .then(function (response) {
        setServices(response.data)
      })
    axios.get('http://localhost:3000/products')
      .then(function (response) {
        setProducts(response.data)
      })
    axios.get('http://localhost:3000/details')
      .then(function (response) {
        setDetails(response.data)
      })

    axios.get('http://localhost:3000/footer')
      .then(function (response) {
        setFooter(response.data)
      })
  }, [])

  return (
    <>
      <Hero hero={hero}></Hero>
      <AboutUs about={about}></AboutUs>
      <Services services={services}></Services>
      <Products products={products}></Products>
      <Details details={details}></Details>
      <Contact></Contact>
      <Footer footer={footer}></Footer>
    </>
  );
}

export default App;
