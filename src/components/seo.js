/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
function SEO({
  description,
  title,
  keywords,
  ogTitle,
  ogDesc,
  ogImg,
  ogSite,
  ogLocation,
  ogContent,
  twitterTitle,
  twitterDesc,
  twitterImg,
  twitterName,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={title}>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDesc} />

      <meta property="og:image" content={ogImg} />
      <meta property="og:site_name" content={ogSite} />
      <meta property="og:locale" content={ogLocation} />
      <meta property="og:type" content={ogContent} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDesc} />

      <meta name="twitter:image" content={twitterImg} />
      <meta name="twitter:creator" content={twitterName} />
    </Helmet>
  )
}

// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string.isRequired,
// }

export default SEO
