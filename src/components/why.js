import React from 'react'
import {Link,graphql,useStaticQuery} from 'gatsby'
import BackgroundSection from './BackgroundImage'

const query = graphql`
  {
    file(relativePath: {eq: "why.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Why = () => {
    const data = useStaticQuery(query)
    return (
     <BackgroundSection img={data.file.childImageSharp.fluid}  styleClass="background-image">
      <div className="background-overlay">
        <div className="background-content">
         <h4 className="why-title">Why you should work with us.</h4>
         <ul className="reasons">
             <li>We are affordable</li>
             <li>We provide more value than the cost</li>
             <li>Responsive website looking good on all screen sizes</li>
             <li>Fast loading websites</li>
             <li>Amazing web features</li>
             <li>Available customer support</li>
         </ul>
        <Link to='/blog' className="packages-link">our blog</Link>
        </div>
      </div>
    </BackgroundSection>
    )
}


export default Why
