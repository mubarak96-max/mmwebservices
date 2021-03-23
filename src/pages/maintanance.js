import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const query = graphql`
  {
    file(relativePath: { eq: "webm.jpg" }) {
      childImageSharp {
        fluid(quality: 95) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Mantainance = () => {
  const data = useStaticQuery(query)
  return (
    <Layout>
      <SEO
        title="Web Mantainace"
        description="Your website is the foundation of your business’s online presence. People visit it to learn about your company, find your contact information, and purchase your products. If your website isn’t workin properly or is out of date, you may lose out on significant opportunities, such as new leads and sales."
        keywords={["website maintenance", "maintenance", "uganda"]}
      />
      <div className="option maintenance">
        <h3>web maintanance</h3>
        <Img fluid={data.file.childImageSharp.fluid}></Img>
        <p>
          Your website is the foundation of your business’s online presence.
          People visit it to learn about your company, find your contact
          information, and purchase your products. If your website isn’t working
          properly or is out of date, you may lose out on significant
          opportunities, such as new leads and sales.
        </p>
        <p>
          First impressions relate to web design, people may come away with a
          poor first impression of your business if your site isn’t up to date
          and functional. Regular monitoring of your website is a must for
          keeping your business running smoothly. We task ourselves keeping your
          website functioning properly and up to date, regularly checking your
          it for issues, correcting any issues, and making updates. This should
          be done on a consistent basis in order to keep your website healthy,
          encourage continued traffic growth, and strengthen your SEO and Google
          rankings.
        </p>
        <p>
          If users frequently leave your website shortly after arriving on it,
          Google may view this as a sign that your site isn’t relevant. This
          increase in bounce rate can lead to lower rankings in search results,
          which means you’ll drive less traffic to your site. Persistent
          technical issues, security issues, and outdated website design,
          structure, or content all contribute to diminishing your search engine
          rankings.
        </p>
        <Link to="/packages" className="get-started">
          get started
        </Link>
      </div>
    </Layout>
  )
}

export default Mantainance
