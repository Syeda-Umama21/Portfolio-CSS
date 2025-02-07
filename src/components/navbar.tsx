import React from 'react'
import "@/style/navbar.css"
import { MdMenu } from "react-icons/md";
import Link from 'next/link';
import navItems from './constant';

const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <a href="">Co<span>der.</span></a>
        </div>
        <div className="menu_list">
            <ul className="menu">
               {navItems
               .filter((nav) => nav.label !== "Contact") 
               .map((nav) => (
                 <Link key={nav.id} href={nav.url}>
                   {nav.label}
                 </Link>
               ))}
            </ul>
            <div className='nav-btn'> 
              <Link href={"/Contact"}>            
                <button>CONTACT ME</button>
                </Link> 
            </div>

            <div className='menu_btn font-size-50px font-weight-800'>
              <MdMenu />
            </div>
        </div>
    </nav>
  )
}

export default Navbar;
