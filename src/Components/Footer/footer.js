import React from 'react'
import '../Footer/footer.css'

function Footer({ footer }) {
  return (<>

    {footer.map((data) => {

      return (
        <>
          <section className="sectionFooter row">

            <div className="col-md-4 d-flex flex-column align-items-center">
              <img className="mb-5 logo-footer" src={data.logo}></img>
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
                <img className="mb-5 me-5 iconfooter" src={data.instagram}></img>
                <img className="mb-5 me-5 iconfooter" src={data.facebook}></img>
                <img className="mb-5 me-5 iconfooter" src={data.twitter}></img>
                <img className="mb-5 me-5 iconfooter" src={data.youtube}></img>
                <img className="mb-5 iconfooter" src={data.linkedin}></img>
              </div>
            </div>


          </section>

        </>
      )


    })}

  </>)
}
export default Footer;