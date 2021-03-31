import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const query = graphql`
  {
    file(relativePath: { eq: "webd.jpg" }) {
      childImageSharp {
        fluid(quality: 95) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Design = () => {
  const data = useStaticQuery(query)
  return (
    <Layout>
      <SEO
        title="Web Designing"
        description="Web design is what creates the overall look and feel when you’re using a website. It’s the process of planning and building the elements of your website, from structure and layout to images, colors, fonts and graphics. Your number one web designer in Uganda."
        keywords={[
          "web designer",
          "website",
          "web developer",
          "uganda",
          "affordable website",
        ]}
      />
      <div className="option web-design">
        <h3>Web designing</h3>
        <Img fluid={data.file.childImageSharp.fluid}></Img>
        <p>
          Web design is what creates the overall look and feel when you’re using
          a website. It’s the process of planning and building the elements of
          your website, from structure and layout to images, colors, fonts and
          graphics.
        </p>
        <p>
          Web design has numerous components that work together to create the
          finished experience of a website, including graphic design, user
          experience design, interface design, search engine optimization (SEO)
          and content creation. These elements determine how a website looks,
          feels and works on various devices. We build your website in a
          timeframe between two days and two weeks depending on it's complexity
          and at the lowest cost possible.
        </p>

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
        <Link to="/packages" className="get-started">
          get started
        </Link>
      </div>
    </Layout>
  )
}

export default Design
