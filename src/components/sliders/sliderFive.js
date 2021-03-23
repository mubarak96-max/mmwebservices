import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Background from "../sliders/background"

const query = graphql`
  {
    file(relativePath: { eq: "dgmkt.jpg" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 2450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const SliderFive = ({ img }) => {
  const data = useStaticQuery(query)
  return (
    <div>
      <Background img={data.file.childImageSharp.fluid}>
        <p>
          Digital branding is overtaking traditional marketing and it will boost
          your business by tenfolds
        </p>
      </Background>
    </div>
  )
}

export default SliderFive
