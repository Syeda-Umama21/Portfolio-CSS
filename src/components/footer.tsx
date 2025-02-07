import React from 'react'
import "@/style/footer.css"
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="social_contact">
        <div className="social_sec">
            <h1>Co<span>der.</span></h1>
            <div className="contact_icon">
            <FaGithub />           
            <FaSquareXTwitter />     
           <FaLinkedin />
           </div>
        </div>
    </div>
<div className="copy_rights">
    <h1>Copy Right Reserved By <span>Coder.</span></h1>
</div>    
    </>
  )
}

export default Footer
