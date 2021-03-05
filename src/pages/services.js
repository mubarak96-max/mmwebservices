import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import SEO from "../components/seo"

const Services = () => {
    return (
       <Layout>
           <SEO title="Services"/>
           <div className="services">
               <h5>Explore our services</h5>
               <div className="links-services">
                   <Link to='/design'>web designing</Link>
                   <Link to='/domain'>Domain Registration</Link>
                   <Link to='/mantainance'>web mantainance</Link>
                   <Link to='/seoPage'>SE-Optimization</Link>
                   <Link to='/freelancing'>freelancing</Link>
               </div>
               <Link to='/' className='back-home'>back home</Link>
           </div>
       </Layout>
    )
}

export default Services
