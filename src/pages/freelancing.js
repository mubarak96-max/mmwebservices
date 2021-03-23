import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const query = graphql`
  {
    file(relativePath: { eq: "free.jpg" }) {
      childImageSharp {
        fluid(quality: 95) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Freelancing = () => {
  const data = useStaticQuery(query)
  return (
    <Layout>
      <SEO
        title="Freelancing"
        description="We offer freelancing services in the fields of our specifity"
        keywords={["freelancer", "freelancing", "uganda"]}
      />
      <div className="option freelance">
        <h3>freelancing</h3>
        <Img fluid={data.file.childImageSharp.fluid}></Img>
        <p>We offer freelancing services in the fields of our specifity</p>
        <p>
          We offer different services on a short-term basis working from
          anywhere on a periodic or project basis.
        </p>
        <Link to="/packages" className="get-started">
          get started
        </Link>
      </div>
    </Layout>
  )
}

export default Freelancing
