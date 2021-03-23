import React from "react"
import { Link } from "gatsby"
import MainSlider from "../components/sliders/mainSlider"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from "../components/services"
import Info from "../components/info"
import Why from "../components/why"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="MM Web Services"
        description="Your best choice for modern Websites and web apps in Uganda. Using modern dependable blazing technologies in the web field and provide value driven solutions. We build web apps and websites for online stores, NGOs, personnal brands, restaurants, hotels, real estate, schools and all kinds of businesses and organizations"
        keywords={[
          "best web designer in Uganda",
          "cheap web designer",
          "e-commerce website",
          "web development",
          "affordable website",
          "domain name",
          "domain registration",
          "seo",
          "search engine optimization",
          "freelancer in uganda",
          "freelancer web designer",
        ]}
      />
      <MainSlider />

      <Info info="Using modern dependable blazing technologies in the web field like HTML5, CSS3, JavaScript, React, Gatsby, WordPress, Shopify, Netlify, Firebase, Contentful and others, we provide value driven web solutions. A website improves your credibility, ensured market expansion, convenience, offers a growth opportunity. We build web apps and websites for online stores, NGOs, personnal brands, restaurants, hotels, real estate, schools and all kinds of businesses and organizations." />
      <Why />
      <Services />
    </Layout>
  )
}

export default IndexPage
