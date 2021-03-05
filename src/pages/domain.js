import React from 'react'
import {Link} from 'gatsby'
import SEO from "../components/seo"
import Layout from '../components/layout'

const Domain = () => {
    return (
        <Layout>
            <SEO title="Domain Registration"/>
            <div className="domain">
                <h4>Bring your ideas to the world by securing a domain name for your brand/business/organization.</h4>
                <p>Register a domain name and create your online identity that will reach you to the millions of people around the world using the internet.</p>
                <p>We offer domain names with different extensions including  .com  .co.ug  .ug  .org  .biz  .health  .educ and so many others</p>
            </div>
            <Link to='/contact' className="contact-us-link">Contact Us</Link>
        </Layout>
    )
}

export default Domain
