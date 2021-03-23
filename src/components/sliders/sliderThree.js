import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Background from "../sliders/background"

const query = graphql`
  {
    file(relativePath: { eq: "resp.jpg" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 2450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const SliderThree = ({ img }) => {
  const data = useStaticQuery(query)
  return (
    <div>
      <Background img={data.file.childImageSharp.fluid}>
        <p>
          A website is the easiest way to feed information to your customers and
          followers and gives you more credibility
        </p>
      </Background>
    </div>
  )
}

export default SliderThree
