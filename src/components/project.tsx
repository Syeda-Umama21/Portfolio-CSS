import React from 'react'
import Image from 'next/image'
import "@/style/project.css"
const Project = () => {
  return (
    <div>
          {/* Project Sections  */}

<section className="project" id="project">
    <div className="headings">
        <h2>project</h2>
        <p>Our Recent Work</p>
    </div>

    <div className="project_cards">
        {/* card 1  */}
        <div className="project_card_img">
        <Image
             src={"/images/p11.jpg"} 
             alt={""}
             width={70}
             height={30}
             />        </div>
        {/* card 2  */}
        <div className="project_card_img">
          <Image
             src={"/images/p12.jpg"} 
             alt={""}
             width={50}
             height={50}
             />          </div>
        {/* card 3  */}
        <div className="project_card_img">
        <Image
             src={"/images/p13.png"} 
             alt={""}
             width={50}
             height={50}
             />          </div>
        {/* card 4  */}
        <div className="project_card_img">
        <Image
             src={"/images/p14.jpg"} 
             alt={""}
             width={50}
             height={50}
             />          </div>
        {/* card 5  */}
        <div className="project_card_img">
        <Image
             src={"/images/p15.jpg"} 
             alt={""}
             width={50}
             height={50}
             />          </div>
        {/* card 6  */}
        <div className="project_card_img">
            <Image
             src={"/images/p16.webp"} 
             alt={""}
             width={50}
             height={50}
             />
          </div>
    </div>
</section>
    </div>
  )
}

export default Project
