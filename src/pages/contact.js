import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact Us" />
      <div className="form-section">
        <form action="https://formspree.io/f/xpzkalwp" method="POST">
          <input type="text" required name="names" placeholder="Names" />
          <input type="text" name="email" placeholder="E-Mail" />
          <input
            type="text"
            required
            name="phone-number"
            placeholder="Phone Number"
          />
          <input type="text" name="address" placeholder="Address" />
          <textarea name="message" cols="30" rows="5">
            How can we help you
          </textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <Link to="/" className="back-home">
        Back Home
      </Link>
    </Layout>
  )
}

export default Contact
