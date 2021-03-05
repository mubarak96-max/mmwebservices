import React from 'react'
import {Link} from 'gatsby'
import {FaFacebookSquare,FaWhatsappSquare,FaGoogle,FaFreeCodeCamp,FaBehance,FaGithub,FaWordpress,FaJs,FaReact,FaNodeJs,FaCss3,FaHtml5} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <div className="page-links">
                <Link to='/packages'>Get Started</Link>
                <Link to='/services'>Our Services</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            <div className="social-links">
                <a href="http://facebook.com/MM-Web-Services" target="_blank"><FaFacebookSquare size={28} color="white"></FaFacebookSquare></a>
                <a href="http://whatsapp.com" target="_blank"><FaWhatsappSquare size={28} color="white"></FaWhatsappSquare></a>
            </div>
            <div className="partners">
                <FaGoogle size={23}/>
                <FaFreeCodeCamp size={23}/>
                <FaReact size={23}/>
                <FaHtml5 size={23}/>
                <FaJs size={23}/>
                <FaCss3 size={23}/>
                <FaNodeJs size={23}/>
                <FaBehance size={23}/>
                <FaGithub size={23}/>
                <FaWordpress size={23}/>
            </div>
            <p className="contact">+256759984846</p>
            <p className="copyright">All rights reserved &copy; {new Date().getFullYear()} MM web services</p>
        </footer>
    )
}

export default Footer
