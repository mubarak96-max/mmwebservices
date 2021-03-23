import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const query = graphql`
  {
    file(relativePath: { eq: "ec.jpg" }) {
      childImageSharp {
        fluid(quality: 95) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Ecommerce = () => {
  const data = useStaticQuery(query)
  return (
    <Layout>
      <SEO
        title="E-Commerce"
        description="Ecommerce is often used to refer to the sale of physical products online, but it can also describe any kind of commercial transaction that is facilitated through the internet. Ecommerce can take on a variety of forms involving different transactional relationships between businesses and consumers, as well as different objects being exchanged as part of these transactions."
        keywords={["e-commerce", "e-commerce website builder", "uganda"]}
      />
      <div className="option ecommerce">
        <h3>E-Commerce</h3>
        <Img fluid={data.file.childImageSharp.fluid}></Img>
        <p>
          Ecommerce, also known as electronic commerce or internet commerce,
          refers to the buying and selling of goods or services using the
          internet, and the transfer of money and data to execute these
          transactions. Ecommerce is often used to refer to the sale of physical
          products online, but it can also describe any kind of commercial
          transaction that is facilitated through the internet. Ecommerce can
          take on a variety of forms involving different transactional
          relationships between businesses and consumers, as well as different
          objects being exchanged as part of these transactions.
        </p>
        <p>
          The first step to start reaching new customers or gaining visibility
          for your brand starts with your website.
        </p>
        <img src="/ecom.png" alt="types of e-commerce" width="100%" />
        <h5>Why you should migrate to E-Commerce</h5>
        <ul>
          <li>
            It is expected that mobile ecommerce retail sales will reach $3.5
            trillion by 2021
          </li>
          <li>
            It is expected that by 2040, 95% of all purchases will be via
            ecommerce.
          </li>
          <li>
            Around 43% of ecommerce traffic comes from Google search minus
            advert costs.
          </li>
          <li>
            The world’s fastest-growing ecommerce market is China with an
            estimated ecommerce value of $672 billion in 2017.
          </li>
          <li>
            The top reason why people make online purchases is that they can
            shop whenever they want, 24/7.
          </li>
          <li>
            Around 51% of digital buyers conduct purchases via their smartphones
          </li>
        </ul>
        <Link to="/packages" className="get-started">
          get started
        </Link>
      </div>
    </Layout>
  )
}

export default Ecommerce
