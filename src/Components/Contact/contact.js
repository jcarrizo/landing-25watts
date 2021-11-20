import React from 'react'
import '../Contact/contact.css'
import Image from '../../Images/image@2x.png'


function Contact() {
  return (<>
    <section className="sectionContact">
      <div className="row columContact">
        <div className="col-md-6 pe-5 columna1">
          <h2 className="titleAbout">Get in touch</h2>
          <p className="subtitleAbout">We are hiring!</p>
          <div class="mb-3">
            <input type="email" class="form-control" id="FormControlInputName" placeholder="Name"></input>
          </div>
          <div class="mb-3">
            <input type="email" class="form-control" id="FormControlInputEmail" placeholder="Email"></input>
          </div>
          <div class="mb-3">
            <input type="email" class="form-control" id="FormControlInputNumber" placeholder="Phone Number"></input>
          </div>
          <div class="mb-3">
            <textarea class="form-control" id="FormControlTextarea" placeholder="Message" rows="3"></textarea>
          </div>
          <button type="button" className="btn btn-body btn-lg">Send</button>
        </div>
        <div className="col-md-6 d-flex align-items-center columna2">
          <div>
            <img className="imageContact" src={Image}></img>
          </div>
        </div>

      </div>

    </section>
  </>)
}
export default Contact;