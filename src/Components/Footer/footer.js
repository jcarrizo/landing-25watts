import React from 'react'
import '../Footer/footer.css'
import logo from "../../Images/logo_25w.svg"
import facebook from "../../Images/Icon ionic-logo-facebook.svg"
import instagram from "../../Images/Icon simple-instagram.svg"
import twitter from "../../Images/Icon simple-twitter.svg"
import youtube from "../../Images/Icon simple-youtube.svg"
import linkedin from "../../Images/Icon awesome-linkedin-in.svg"


function Footer() {
  return (<>
    <section className="sectionFooter row">

      <div className="col-md-4 d-flex flex-column align-items-center">
        <img className="mb-5 logo-footer" src={logo}></img>
        <p className="text-footer">2020 © All rights reserved.</p>
      </div>
      <div className="col-md-4 row">
        <div className="col-md-6 d-flex flex-column align-items-center">
          <p className="text-footer-menu">About</p>
          <p className="text-footer-menu">Services</p>
          <p className="text-footer-menu">Products</p>

        </div>
        <div className="col-md-6">
          <p className="text-footer-menu">Details</p>
          <p className="text-footer-menu">Contact</p>
        </div>

      </div>
      <div className="col-md-4 d-flex align-items-center flex-column">
        <p className="text-follow">Follow us</p>
        <div className="d-flex flex-columns mt-3">
          <img className="mb-5 me-5" src={instagram}></img>
          <img className="mb-5 me-5" src={facebook}></img>
          <img className="mb-5 me-5" src={twitter}></img>
          <img className="mb-5 me-5" src={youtube}></img>
          <img className="mb-5" src={linkedin}></img>
        </div>
      </div>


    </section>
  </>)
}
export default Footer;