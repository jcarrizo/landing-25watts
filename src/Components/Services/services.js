import React from 'react'
import '../Services/services.css'

function Services({ services }) {
  return (
    <>
      <section className="sectionServices d-flex flex-column justify-content-center">
        {
          services.map((data) => {
            return (<>    <h2 className="servicesTitle">{data.textTitle}</h2>
              <div className="w-100 divcontenedor">
                <p className="sub-text">{data.textLarge}</p>
              </div>
              <div className="d-flex justify-content-center">
                <div className="row  divServices">
                  <div className="col-md-3  flex-column">
                    <div className="d-flex justify-content-center">
                      <img src={data.urlworld} className="icons"></img>
                    </div>

                    <p className="subtext-icon">{data.textworld}</p>
                  </div>
                  <div className="col-md-3 flex-column">
                    <div className="d-flex justify-content-center">
                      <img src={data.urlup} className="icons"></img>
                    </div>
                    <p className="subtext-icon">{data.textup}</p>
                  </div>
                  <div className="col-md-3 flex-column">
                    <div className="d-flex justify-content-center">
                      <img src={data.urlphone} className="icons"></img>
                    </div>
                    <p className="subtext-icon">{data.textphone}</p>
                  </div>
                  <div className="col-md-3 flex-column">
                    <div className="d-flex justify-content-center">
                      <img src={data.urlpeople} className="icons"></img>
                    </div>
                    <p className="subtext-icon">{data.textpeople}</p>
                  </div>
                </div>
              </div>
            </>
            )
          })
        }
      </section>
    </>
  )
}
export default Services;