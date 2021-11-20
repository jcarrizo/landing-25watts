import React from 'react'
import '../Contact/contact.css'
import Image from '../../Images/image@2x.png'

const submit = () => {
  let name = document.getElementById("FormControlInputName").value
  let email = document.getElementById("FormControlInputEmail").value
  let number = document.getElementById("FormControlInputNumber").value
  let textArea = document.getElementById("FormControlTextarea").value


  if (name !== "" && email !== "" && number !== "" && textArea !== "") {
    alert("tu nombre es: " + name)

    alert("tu email es: " + email)

    alert("tu numero es: " + number)

    alert("tu mensaje es: " + textArea)


    document.getElementById("FormControlInputName").value = ""
    document.getElementById("FormControlInputEmail").value = ""
    document.getElementById("FormControlInputNumber").value = ""
    document.getElementById("FormControlTextarea").value = ""
  }



}


function Contact() {
  return (<>
    <section className="sectionContact">
      <div className="row columContact">
        <div className="col-md-6 pe-5 columna1">
          <h2 className="titleAbout">Get in touch</h2>
          <p className="subtitleAbout">We are hiring!</p>
          <form onSubmit={() => { submit() }} >
            <div className="mb-3">
              <input type="text" className="form-control" id="FormControlInputName" maxLength="20" required placeholder="Name"></input>
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" id="FormControlInputEmail" maxLength="25" required placeholder="Email"></input>
            </div>
            <div className="mb-3">
              <input type="number" className="form-control" id="FormControlInputNumber" min="1" max="999999999" required placeholder="Phone Number"></input>
            </div>
            <div className="mb-3">
              <textarea className="form-control" id="FormControlTextarea" required placeholder="Message" maxLength="150" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-body-contact btn-lg">Send</button>
          </form>

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