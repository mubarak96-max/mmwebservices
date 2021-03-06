import React from "react"
import { Link,graphql,useStaticQuery } from "gatsby"
import BackgroundSection from '../components/BackgroundImage'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Info from '../components/info'
import Why from '../components/why'



const query = graphql`
  {
    file(relativePath: {eq: "intro.jpg"}) {
      childImageSharp {
        fluid (maxWidth: 2400){
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const IndexPage = () => {
  const data = useStaticQuery(query)
  return (
  <Layout>
    <SEO title="Home" description='Your best choice for modern Websites and web apps in Uganda' keywords={['best web designer in Uganda', 'cheap web designer', 'e-commerce website', 'web development', 'affordable website', 'domain name', 'domain registration', 'seo', 'search engine optimization', 'freelancer in uganda', 'freelancer web designer']}/>
    <BackgroundSection img={data.file.childImageSharp.fluid}  styleClass="background-image">
      <div className="background-overlay">
        <div className="background-content">
          <p className="intro">
          Today, we live in a digital world and information changes and moves so fast. Digital presence is overtaking the traditional one as more and more people use the internet. Keeping your brand, business and organization off the web puts you in an unfavorable position concerning your works. We provide you with an affordable cost effective professional quality website that puts you miles ahead.
        </p>
        <Link to='/packages' className="packages-link">Get started</Link>
        </div>
      </div>
    </BackgroundSection>
    <Info info="Using modern dependable blazing technologies in the web field like HTML5, CSS3, JavaScript E8+, React, Gatsby, WordPress, AWS and others, we provide value driven web solutions to our customers. A website improves your credibility, ensured market expansion, convenience, offers a growth opportunity. We build web apps and websites for online stores, NGOs, personnal brands, restaurants, hotels, real estate, schools and all kinds of businesses and organizations."/>
    <Why/>
  </Layout>)
}



export default IndexPage
