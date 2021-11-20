import React from 'react'
import '../Details/details.css'

function Details({ details }) {
  return (
    <>
      <section className="sectionDetails d-flex flex-column justify-content-center">
        {details.map((data) => {
          return (<>
            <h2 className="servicesTitle">{data.textTitle}</h2>
            <div className="w-100 divcontenedor">
              <p className="sub-text">{data.textSubTitle}</p>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <div>
                <div className="row  mb-5 me-5">
                  <div className="col-md-2 d-flex">
                    <img className="iconDetails" src={data.urlanchor}></img>
                  </div>
                  <div className="col-md-10 ">
                    <p className="sub-text text-details ">{data.texticon}</p>
                  </div>
                </div>
                <div className="row  mb-5 me-5">
                  <div className="col-md-2 d-flex">
                    <img className="iconDetails" src={data.urlbook}></img>
                  </div>
                  <div className="col-md-10">
                    <p className="sub-text text-details ">{data.texticon}</p>
                  </div>
                </div>
                <div className="row  mb-5 me-5">
                  <div className="col-md-2 d-flex">
                    <img className="iconDetails" src={data.urlbrush}></img>
                  </div>
                  <div className="col-md-10">
                    <p className="sub-text text-details ">{data.texticon}</p>
                  </div>
                </div>
              </div>
              <div >
                <div className="row  mb-5 me-5">
                  <div className="col-md-2 d-flex">
                    <img className="iconDetails" src={data.urlbell}></img>
                  </div>
                  <div className="col-md-10">
                    <p className="sub-text text-details ">{data.texticon}</p>
                  </div>
                </div>
                <div className="row  mb-5 me-5">
                  <div className="col-md-2 d-flex">
                    <img className="iconDetails" src={data.urlbandcamp}></img>
                  </div>
                  <div className="col-md-10">
                    <p className="sub-text text-details ">{data.texticon}</p>
                  </div>
                </div>
                <div className="row  mb-5 me-5">
                  <div className="col-md-2 d-flex">
                    <img className="iconDetails" src={data.urlbox}></img>
                  </div>
                  <div className="col-md-10">
                    <p className="sub-text text-details ">{data.texticon}</p>
                  </div>
                </div>
              </div>
            </div>
          </>)
        })}
      </section>
    </>
  )
}
export default Details;