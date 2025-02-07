import React from 'react'
import Image from 'next/image'
import "@/style/about.css"
const About = () => {
  return (
    <>
       {/* About  */}
    <section className="about" id="about">
        <div className="headings">
            <h2>About Me</h2>
            <p>Introduction</p>
        </div>
        <div className="about_container">
            <div className="about_image">
                <Image 
                src={"/images/hero.jpg"}
                 alt={"this is"}
                 width={100}
                 height={100}
                 />
            </div>

    <div className="about_content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis rem eos consequatur magni
             voluptatibus  consequatur corporis itaque temporibus magni
            impedit eaque praesentium debitis!</p>

        <div className="my_info">
        <i className="ri-user-3-fill"></i>     
         <h2>Syeda Umama</h2>
     </div>

            <div className="my_info">
            <i className="ri-phone-fill"></i>
            <h2>+22436772</h2>
         </div>

        <div className="my_info">
        <i className="ri-mail-fill"></i>        
        <h2>Example@gmail.com</h2>
        </div>

        <button>Download CV</button>
        </div>
        </div>
    </section>
    </>
  )
}
export default About
