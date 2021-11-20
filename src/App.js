import './App.css';
import AboutUs from './Components/aboutUs/aboutUs';
import Services from './Components/Services/services';
import Products from './Components/Products/products';
import Details from './Components/Details/details';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';
import Hero from './Components/Hero/hero';
function App() {

  return (
    <>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <Services></Services>
      <Products></Products>
      <Details></Details>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
