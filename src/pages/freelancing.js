import React from 'react'
import {useStaticQuery,graphql,Link} from 'gatsby'
import Layout from '../components/layout'
import SEO from "../components/seo"
import BackgroundSection from '../components/BackgroundImage'


 const query = graphql`
  {
    file(relativePath: {eq: "refactoring.jpg"}) {
      childImageSharp {
        fluid {
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
          <SEO title="Freelancing"/>
        <BackgroundSection img={data.file.childImageSharp.fluid}  styleClass="background-image">
            <div className="background-overlay">
            <div className="background-content">
          <p className="freelance-intro">
          We offer different services on a short-term basis regarding any of our fields working on a periodic or project basis.
        </p>
        <Link to='/contact' className='contact-link'>Contact Us Now</Link>
        </div>
      </div>
    </BackgroundSection>
        </Layout>
    )
}

export default Freelancing
