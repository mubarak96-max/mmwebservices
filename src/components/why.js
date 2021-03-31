import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundSection from "./BackgroundImage"

const query = graphql`
  {
    file(relativePath: { eq: "why.jpg" }) {
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
    <BackgroundSection
      img={data.file.childImageSharp.fluid}
      styleClass="background-image"
    >
      <div className="background-overlay">
        <div className="why">
          <h4 className="why-title">Why you should work with us.</h4>
          <ul className="reasons">
            <li>We are affordable</li>
            <li>
              We build websites for small, medium and large brands, businesses
              and organizations
            </li>
            <li>We provide more value than the cost</li>
            <li>Responsive websites looking good on all screen sizes</li>
            <li>
              We build websites and progressive web apps that work more like
              native apps
            </li>
            <li>Fast loading websites</li>
            <li>Amazing web features</li>
            <li>Available customer support</li>
          </ul>
        </div>
      </div>
    </BackgroundSection>
  )
}

export default Why
