import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/BackgroundImage"

const query = graphql`
  {
    file(relativePath: { eq: "designing.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

const Design = () => {
  const data = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="Web Designing" />
      <BackgroundSection
        img={data.file.childImageSharp.fluid}
        styleClass="background-image"
      >
        <div className="background-overlay">
          <div className="background-content">
            <p className="design-intro">
              We create designs of websites that are displayed on the internet.
              Bringing out the appearance, layout and the content.
            </p>
          </div>
        </div>
      </BackgroundSection>
      <div className="design-points">
        <p>We create websites that are</p>
        <ul>
          <li>
            User friendly making it easy for its visitors to get information
          </li>
          <li>Responsive and well displayed on big and small screens</li>
          <li>Easy navigation through all pages</li>
          <li>Refactoring and redesigning your already existing website</li>
          <li>Speed loads making it convenient to the visitors</li>
        </ul>
        <Link to="/packages">get started</Link>
      </div>
    </Layout>
  )
}

export default Design
