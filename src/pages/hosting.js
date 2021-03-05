import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'
import Layout from "../components/layout"
import BackgroundSection from '../components/BackgroundImage'
import SEO from "../components/seo"


 const query = graphql`
  {
    file(relativePath: {eq: "hosting.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hosting = () => {
    const data = useStaticQuery(query)
    return (
        <Layout>
          <SEO title="Web Hosting"/>
             <BackgroundSection img={data.file.childImageSharp.fluid}  styleClass="background-image">
            <div className="background-overlay">
            <div className="background-content">
          <p className="hosting-intro">
          hosting
        </p>
        </div>
      </div>
    </BackgroundSection>
        </Layout>
    )
}

export default Hosting
