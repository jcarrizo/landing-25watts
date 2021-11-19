import React from 'react'
import '../Details/details.css'
import img1 from '../../Images/Icon awesome-anchor.svg'
import img2 from '../../Images/Icon awesome-bookmark.svg'
import img3 from '../../Images/Icon awesome-brush.svg'
import img4 from '../../Images/Icon awesome-bell.svg'
import img5 from '../../Images/Icon awesome-bandcamp.svg'
import img6 from '../../Images/Icon awesome-box-open.svg'


function Details() {
  return (
    <>
      <section className="sectionDetails d-flex flex-column justify-content-center">
        <h2 className="servicesTitle">More details</h2>
        <div className="w-100 divcontenedor">
          <p className="sub-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel gravida felis, id tempor ex. Suspendisse congue purus eu neque auctor, eget dictum ipsum facilisis. Sed scelerisque sodales lorem,</p>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <div>
            <div className="row  mb-5 me-5">
              <div className="col-md-2 d-flex">
                <img src={img1}></img>
              </div>
              <div className="col-md-10 ">
                <p className="sub-text text-details ">Donec egestas tortor quis turpis finibus vestibulum vel nec ex. Nunc sed velit ullamcorper.</p>
              </div>
            </div>
            <div className="row  mb-5 me-5">
              <div className="col-md-2 d-flex">
                <img src={img2}></img>
              </div>
              <div className="col-md-10">
                <p className="sub-text text-details ">Donec egestas tortor quis turpis finibus vestibulum vel nec ex. Nunc sed velit ullamcorper.</p>
              </div>
            </div>
            <div className="row  mb-5 me-5">
              <div className="col-md-2 d-flex">
                <img src={img3}></img>
              </div>
              <div className="col-md-10">
                <p className="sub-text text-details ">Donec egestas tortor quis turpis finibus.</p>
              </div>
            </div>
          </div>
          <div >
            <div className="row  mb-5 me-5">
              <div className="col-md-2 d-flex">
                <img src={img4}></img>
              </div>
              <div className="col-md-10">
                <p className="sub-text text-details ">Donec egestas tortor quis turpis finibus vestibulum vel nec ex. Nunc sed velit ullamcorper.</p>
              </div>
            </div>
            <div className="row  mb-5 me-5">
              <div className="col-md-2 d-flex">
                <img src={img5}></img>
              </div>
              <div className="col-md-10">
                <p className="sub-text text-details ">Donec egestas tortor quis turpis finibus.</p>
              </div>
            </div>
            <div className="row  mb-5 me-5">
              <div className="col-md-2 d-flex">
                <img src={img6}></img>
              </div>
              <div className="col-md-10">
                <p className="sub-text text-details ">Donec egestas tortor quis turpis finibus vestibulum vel nec ex. Nunc sed velit ullamcorper.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Details;