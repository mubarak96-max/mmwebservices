import React, {useState} from 'react'
import {Link} from 'gatsby'
import logo from '../images/logo.png'
import {FaBars,FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const [showLinks,setShowLinks] = useState(false)
    const [showServices,setShowServices] = useState(false)
    return (
        <nav>
            <div className="head">
                <Link to='/'><img src={logo} alt="MM WEB SERVICES"/></Link>
                <button onClick={()=>setShowLinks(!showLinks)}>
                    {showLinks ? <FaTimes  size={29} color="#fff"/> : <FaBars 
                    size={29} color="#fff"/>}
                </button>
            </div> 
            <div className={`${showLinks ? 'links show-links' : 'links'}`}>
            <ul className="links show-links">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
