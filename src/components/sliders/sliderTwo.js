import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Background from "../sliders/background"

const query = graphql`
  {
    file(relativePath: { eq: "cnt.jpg" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 2450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const SliderTwo = ({ img }) => {
  const data = useStaticQuery(query)
  return (
    <div>
      <Background img={data.file.childImageSharp.fluid}>
        <p>
          We connect you to the more than 2 billion people worldwide who uses
          the internet everyday
        </p>
      </Background>
    </div>
  )
}

export default SliderTwo
