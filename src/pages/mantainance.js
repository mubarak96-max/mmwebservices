import React from 'react'
import {useStaticQuery,graphql,Link} from 'gatsby'
import Layout from "../components/layout"
import BackgroundSection from '../components/BackgroundImage'
import SEO from "../components/seo"

 const query = graphql`
  {
    file(relativePath: {eq: "mantain.jpg"}) {
      childImageSharp {
        fluid {
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
          <SEO title="Web Mantainace"/>
             <BackgroundSection img={data.file.childImageSharp.fluid}  styleClass="background-image">
            <div className="background-overlay">
            <div className="background-content">
          <p className="mantainance-intro">
          Checking your website regularly for issues, mistakes and keeping it updated and relevant on a consistent basis so as to keep the website healthy, encouraged traffic growth and strengthening the SEO rankings. Keeping a website well mantained and attractive engage and retains customers. Regular monitoring of your website is a must for keeping your business running smoothly. We keep track of your website for effective results.
        </p>
          <Link to='/contact' className='contact-link'>Contact Us</Link>
        </div>
      </div>
    </BackgroundSection>
        </Layout>
    )
}

export default Mantainance
