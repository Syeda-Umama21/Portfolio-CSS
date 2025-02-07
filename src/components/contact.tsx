import React from 'react'
import "@/style/contact.css"

const Contact = () => {
  return (
    <div>
      
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
    </div>
  )
}

export default Contact
