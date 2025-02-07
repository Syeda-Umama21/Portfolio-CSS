import React from 'react'

const contact = () => {
  return (
    <>
       {/* Contact  */}

<section className="contact" id="contact">
    <div className="headings">
        <h2>Contact</h2>
        <p>Contact With Us</p>
    </div>

    <div className="contact_form">
        <div className="inuts">
            <input type="text" placeholder="Your Name"/>
            <input type="email" placeholder="Your Email"/>
            <textarea placeholder="Write Message Here"></textarea>
            <button>Send</button>
        </div>
    </div>
</section>
<div className="social_contact">
    <div className="social_sec">
        <h1>Co<span>der.</span></h1>
        <div className="contact_icon"></div>
        <i className="ri-facebook-fill"></i>
        <i className="ri-twitter-fill"></i>
        <i className="ri-linkedin-fill"></i>
        <i className="ri-youtube-fill"></i>
    </div>
</div>
    </>
  )
}

export default contact
