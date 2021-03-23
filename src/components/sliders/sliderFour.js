import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Background from "../sliders/background"

const query = graphql`
  {
    file(relativePath: { eq: "packages.jpg" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 2450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const SliderFour = ({ img }) => {
  const data = useStaticQuery(query)
  return (
    <div>
      <Background img={data.file.childImageSharp.fluid}>
        <p>
          We bring your brand stories to life, communication using unique
          content turning visitors into clients
        </p>
      </Background>
    </div>
  )
}

export default SliderFour
