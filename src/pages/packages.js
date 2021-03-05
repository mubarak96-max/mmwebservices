import React from 'react'
import {Link,useStaticQuery,graphql} from 'gatsby'
import Layout from '../components/layout'
import SEO from "../components/seo"
import BackgroundSection from '../components/BackgroundImage'

const query = graphql`
  {
    file(relativePath: {eq: "packages.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Packages = () => {
    const data = useStaticQuery(query)
    return (
        <Layout>
            <SEO title="Get Started"/>
             <BackgroundSection img={data.file.childImageSharp.fluid}  styleClass="background-image">
        <div className="background-overlay">
            <div className="background-content">
                <p className="packages-info">Review our packages below and decide which one is suitable for you</p>
            </div>
         </div>
        </BackgroundSection>
        <div className="packages">
                    <div className="basic">
                        <h4>Basic plan</h4>
                        <ul>
                            <li>Easy navigation</li>
                            <li>SEO friendly</li>
                            <li>Responsive intuitive design</li>
                            <li>Custom domain Name</li>
                            <li>Hosting up to one year</li>
                            <li>Social Media links</li>
                            <li>Upto 6 pages</li>
                            <li>One month support</li>
                        </ul>
                    </div>
                    <div className="standard">
                        <h4>Standard plan</h4>
                        <ul>
                            <li>All in Basic</li>
                        
                            <li>Content Management System</li>
                            <li>3 months web support</li>
                            <li>Chatbot</li>
                            <li>Upto 15 pages</li>
                            <li>Digital marketing solutions</li>
                            <li>Feedback collection form</li>
                        </ul>
                    </div>
                    <div className="premium">
                      <h4>Premium Plan</h4>
                      <ul>
                        <li>All in Standard</li>
                        <li>E-Commerce Setup</li>
                        <li>Upto 25 pages</li>
                        <li>Authentication</li>
                        <li>6 months web support</li>
                        <li>Online Payment system</li>
                        <li>Push Messages</li>
                      </ul>
                    </div>
                    <Link to='/contact' className='contact-link'>Contact us</Link>
                </div>
        </Layout>
    )
}

export default Packages
