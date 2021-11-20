import React from 'react'
import "../aboutUs/aboutUs.css"

function AboutUs({ about }) {
  return (
    <>
      <section className="sectionAbout row">
        {about.map((data) => {

          return (<>
            <div className="col-md-6 d-flex justify-content-between">
              <div className="bordeNaranja"></div>
              <div>
                <img className="imageabout" src={data.url}></img>
              </div>
            </div>

            <div className="col-md-6 colum-about">
              <h2 className="titleAbout">{data.textTitle}</h2>
              <p className="subtitleAbout">{data.textSubTitle}</p>
              <p className="text-lorem">{data.textLarge}</p>
              <button type="button" className="btn btn-body btn-lg">More info</button>
            </div>
          </>)

        })
        }

      </section>
    </>
  )
}
export default AboutUs;