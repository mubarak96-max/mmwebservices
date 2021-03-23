import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Img from "gatsby-image"

const query = graphql`
  {
    file(relativePath: { eq: "domain.jpg" }) {
      childImageSharp {
        fluid(quality: 95) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Domain = () => {
  const data = useStaticQuery(query)
  return (
    <Layout>
      <SEO
        title="Domain Registration"
        description="Domain name is the address of your website that people type in the browser URL bar to visit your website. It is essentially your website's equivalent of a physical address."
        keywords={["domain", "domain registration", "domain name", "uganda"]}
      />
      <div className="option domain">
        <h3>domain registration</h3>
        <Img fluid={data.file.childImageSharp.fluid}></Img>
        <p>
          Domain name is the address of your website that people type in the
          browser URL bar to visit your website. It is essentially your
          website's equivalent of a physical address.
        </p>
        <p>
          Domain name registration gives you personality and recognized
          identity. Once you register a domain name, your information is
          publicly available. There are currently more than 350 Million
          registered domain names and thousands more get registered each day. We
          can help you find a domain name that best suits what you do so you can
          easily promote your website.
        </p>
        <p>
          The price for a domain name registration varies greatly on its
          extension. For example, the most common .com is the most affordable
          one, while some country-specific domain name extensions are 5 times
          more expensive. We offer domain names with different extensions
          including .com .co.ug .ug .org .biz .health .educ and so many others
        </p>
      </div>
      <Link to="/contact" className="contact-us-link">
        Contact Us
      </Link>
    </Layout>
  )
}

export default Domain
