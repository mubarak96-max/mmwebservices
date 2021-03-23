import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Background from "../sliders/background"

const query = graphql`
  {
    file(relativePath: { eq: "intro.jpg" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 2450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const SliderOne = ({ img }) => {
  const data = useStaticQuery(query)
  return (
    <div>
      <Background img={data.file.childImageSharp.fluid}>
        <p>
          Maximize your potential with performant websites built with the
          latest, innovative technologies
        </p>
      </Background>
    </div>
  )
}

export default SliderOne
