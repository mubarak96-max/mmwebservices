import React from "react"
import { Link } from "gatsby"
import {
  FaFacebookSquare,
  FaWhatsappSquare,
  FaGoogle,
  FaFreeCodeCamp,
  FaBehance,
  FaGithub,
  FaWordpress,
  FaJs,
  FaReact,
  FaNodeJs,
  FaCss3,
  FaHtml5,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <div className="footer-services">
        <h3>Services</h3>
        <Link to="/design">Web designing</Link>
        <Link to="/domain">domain registration</Link>
        <Link to="/seoPage">SEO</Link>
        <Link to="/ecommerce">E-Commerce</Link>
        <Link to="/maintenance">web maintenance</Link>
        <Link to="/freelancing">freelancing</Link>
      </div>
      <div className="page-links">
        <Link to="/packages">Get Started</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Get in touch</Link>
      </div>

      <div className="social-links">
        <a
          href="https://www.facebook.com/MM-Web-Services-100151941813144"
          target="_blank"
        >
          <FaFacebookSquare size={28} color="white"></FaFacebookSquare>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=256770441205"
          target="_blank"
        >
          <FaWhatsappSquare size={28} color="white"></FaWhatsappSquare>
        </a>
      </div>
      <div className="partners">
        <FaGoogle size={23} />
        <FaFreeCodeCamp size={23} />
        <FaReact size={23} />
        <FaHtml5 size={23} />
        <FaJs size={23} />
        <FaCss3 size={23} />
        <FaNodeJs size={23} />
        <FaBehance size={23} />
        <FaGithub size={23} />
        <FaWordpress size={23} />
      </div>
      <p className="contact">+256-759-984846</p>
      <p className="copyright">
        All rights reserved &copy; {new Date().getFullYear()} MM web services
      </p>
    </footer>
  )
}

export default Footer
