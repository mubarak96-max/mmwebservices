import React from 'react'
import {Link} from 'gatsby'
import {FaFrown} from 'react-icons/fa'
import Layout from '../components/layout'
import SEO from "../components/seo"

const Portfolio = () => {
    return (
        <Layout>
            <SEO title="Portfolio"/>
            <div className="unavailable">
                
                <p>We are sorry...<FaFrown size={30} color='yellow'/> This page is currently unavailable but it's soon going to be back on</p>
                <Link to='/' className='back-home'>Back Home</Link>
            </div>
        </Layout>
    )
}

export default Portfolio
