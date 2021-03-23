import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const query = graphql`
  {
    file(relativePath: { eq: "seo.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const SeoPage = () => {
  const data = useStaticQuery(query)
  return (
    <Layout>
      <SEO
        title="SEO"
        description="SEO, search engine optimization in simple terms means the process of improving your site to increase its visibility for relevant searches. The better visibility your pages have in search results, the more likely you are to garner attention and attract prospective and existing customers to your business."
        keywords={["seo", "search engine optimization", "uganda"]}
      />

      <div className="option seo">
        <h3>SEO</h3>
        <Img fluid={data.file.childImageSharp.fluid}></Img>

        <p>
          SEO stands for “search engine optimization.” In simple terms, it means
          the process of improving your site to increase its visibility for
          relevant searches. The better visibility your pages have in search
          results, the more likely you are to garner attention and attract
          prospective and existing customers to your business.
        </p>
        <p>
          You might think of a search engine as a website you visit to search
          for an answer, forexample Google, Yahoo! or Bing.
        </p>
        <p>
          A search engine has a crawler that goes and gather information about
          all the content it can find on the internet. The data is brought and
          indexed and matched respective to an algorithm taking into account
          hundreds of ranking factors to determine the order pages should appear
          in the search results query.
        </p>
        <p>
          SE-Optimization ensures that the content on your site will be
          understood by the search engines and the users will arrive to it via
          search.
        </p>
        <p>
          SEO is a fundamental part of digital marketing because people conduct
          trillions of searches every year, often with commercial intent to find
          information about products and services. Search is often the primary
          source of digital traffic for brands and complements other marketing
          channels. Greater visibility and ranking higher in search results than
          your competition can have a material impact on your bottom line.
        </p>
        <p>
          However, search engines have evolved to give users more direct answers
          and information that is more likely to keep them on the page instead
          of driving them to other websites. You should work with us so that
          your site gets more relevance to the search engines and indexed
          favorably.
        </p>
        <Link to="/packages" className="get-started">
          get started
        </Link>
      </div>
    </Layout>
  )
}

export default SeoPage
