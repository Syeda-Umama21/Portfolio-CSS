import Image from 'next/image'
import "@/style/header.css"
import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Header = () => {
  return (
    <>
       {/*  HERO SECTION */}
    <section className="hero" id="home" >
        <div className="hero_social_icon">
        <FaLinkedin />
        <FaGithub />
        <FaXTwitter />
        <FaInstagram />           
        </div>

        <div className="hero_content">
            <h3>Hello, I am</h3>
            <h1>Syeda Umama</h1>
            <h3>Full-Stack Developer</h3>
            <p>Lorem ipsum dolor t facilis repudiandae aliquam? Officiis, quis eveniet!</p>
            <div className="hero_btns">
              <Link href={"/Contact"}>
                <button>Contact Me</button>
                </Link>
                <button>Hire Me</button>
            </div>
        </div>
        <div className="hero_img">
            <Image 
              src={"/images/hero.jpg"}
              alt={"this is "}
              width={100}
              height={100}
              />
        </div>
    </section>
    </>

    
  )
}

export default Header
