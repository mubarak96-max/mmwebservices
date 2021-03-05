import React from 'react'
import {Link,graphql,useStaticQuery} from 'gatsby'
import Layout from '../components/layout'
import BackgroundSection from '../components/BackgroundImage'
import SEO from "../components/seo"

 const query = graphql`
  {
    file(relativePath: {eq: "seo.jpg"}) {
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
          <SEO title="SEO"/>
            <BackgroundSection img={data.file.childImageSharp.fluid}  styleClass="background-image">
            <div className="background-overlay">
            <div className="background-content">
             <p className="seo-intro">
                 SEO stands for Search Engine Optimization which is the practice of increasing the quantity and quality of traffic to your website through organic search engine results. It's all about improving your site's visibility in the search engines. You can attract all the web users in the world to your site by the use of SEO.
             </p>
            </div>
      </div>
        </BackgroundSection>
        <div className="about-seo">
          <p>You might think of a search engine as a website you visit to search for an answer, forexample Google, Yahoo! or Bing.</p>
          <p>A search engine has a crawler that goes and gather information about all the content it can find on the internet. The data is brought and indexed and matched respective to an algorithm taking into account hundreds of ranking factors to determine the order pages should appear in the search results query.</p>
          <p>SE-Optimization ensures that the content on your site will be understood by the search engines and the users will arrive to it via search.</p>
          <p>SEO is a fundamental part of digital marketing as people conduct millions of searches everyday with an intent of finding information about a particular product or service. Search is usually the primary source of web traffic for digital brands.</p>
          <p>However, search engines have evolved to give users more direct answers and information that is more likely to keep them on the page instead of driving them to other websites. You should work with us so that your site gets more relevance to the search engines and indexed favorably.</p>
        </div>
        </Layout>
    )
}

export default SeoPage
