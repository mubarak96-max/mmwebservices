import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <nav>
      <div className="head">
        <Link to="/">
          <img src={logo} alt="MM WEB SERVICES" />
        </Link>
        <button onClick={() => setShowLinks(!showLinks)}>
          {showLinks ? (
            <FaTimes size={44} color="#skyblue" />
          ) : (
            <FaBars size={44} color="#skyblue" />
          )}
        </button>
      </div>

      <div
        className={`${
          showLinks ? "links-model show-model" : "hide-model links-model"
        }`}
      >
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/blog">Blog</Link>
          </li> */}
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/packages" className="get-started">
              get started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
