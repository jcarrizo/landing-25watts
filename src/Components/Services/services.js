import React from 'react'
import '../Services/services.css'

function Services() {
  return (
    <>
      <section className="sectionAbout row">
        <div className="col-md-6 d-flex justify-content-between">
          <div className="bordeNaranja"></div>
          <div>
            <img className="imageabout" ></img>
          </div>
        </div>

        <div className="col-md-6 ">
          <h2 className="titleAbout">About us</h2>
          <p className="subtitleAbout">We Help Businesses</p>
          <p className="text-lorem">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
          <button type="button" className="btn btn-body btn-lg">More info</button>
        </div>
      </section>
    </>
  )
}
export default Services;