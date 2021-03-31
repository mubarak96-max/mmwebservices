import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Packages = () => {
  return (
    <Layout>
      <SEO title="Get Started" />

      <div className="packages">
        <p className="packages-info">
          Review our packages below and decide which one is suitable for you
        </p>
        <div className="basic">
          <h4>Basic plan</h4>
          <ul>
            <li>Easy navigation</li>
            <li>SEO friendly</li>
            <li>Responsive intuitive design</li>
            <li>Custom domain Name</li>
            <li>Logo Design</li>
            <li>Hosting up to one year</li>
            <li>Static pages</li>
            <li>Social Media links</li>
            <li>Upto 5 pages</li>
            <li>One month support</li>
          </ul>
          <span className="price">UgShs 300,000</span>
        </div>
        <div className="standard">
          <h4>Standard plan</h4>
          <ul>
            <li>All in Basic</li>
            <li>Content Management System</li>
            <li>3 months web support</li>
            <li>Chatbot</li>
            <li>Upto 10 pages</li>
            <li>Dynamic pages</li>
            <li>Digital marketing solutions</li>
            <li>Feedback collection form</li>
          </ul>
          <span className="price">UgShs 700,000</span>
        </div>
        <div className="premium">
          <h4>Premium Plan</h4>
          <ul>
            <li>All in Standard</li>
            <li>E-Commerce Setup</li>
            <li>Upto 25 pages</li>
            <li>Authentication</li>
            <li>Offline loading</li>
            <li>6 months web support</li>
            <li>Online Payment system</li>
            <li>Push Notifications</li>
          </ul>
          <span className="price">UgShs 1.5 millions</span>
        </div>
        <Link to="/contact" className="contact-link">
          Contact us
        </Link>
      </div>
    </Layout>
  )
}

export default Packages
