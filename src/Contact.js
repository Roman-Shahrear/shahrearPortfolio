import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
        <div>
            <div className="contact-me-card row">
            <div className="col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2">
                <span className="get-in-touch mx-4 my-5">Get in touch</span>

                <div className="py-5 d-flex justify-content-center">
                <dotlottie-player
                src="https://lottie.host/78d38663-e02a-4f6c-9418-c50d47938b34/x2koqHCUoz.json"
                background="transparent"
                speed="1"
                style={{ width: "500px", height: "500px" }}
                loop
                autoplay
              ></dotlottie-player>
                </div>
            </div>
                <div className="col-lg-6 col-md-5 col-sm-12 my-auto">
                    <div className="d-flex flex-column card-contact-right">
                        <div className="input-group my-3 d-flex flex-column">
                            <label>Name</label>
                            <input type="text" placeholder="enter your name" className="input-groups"/>
                        </div>

                        <div className="input-group my-3 d-flex flex-column">
                            <label>Email</label>
                            <input type="text" placeholder="enter your name" className="input-groups"/>
                        </div>

                        <div className="input-group my-3 d-flex flex-column">
                            <label>Message</label>
                            <input type="text" placeholder="enter your name" className="input-groups"/>
                        </div>

                        <div className="input-group my-3 d-flex flex-column">
                            <button className="btn btn-success">Send Message</button>
                        </div>
                    </div>
                        
                        
                </div>

            </div>
        </div>
    </>
  )
}

export default Contact;