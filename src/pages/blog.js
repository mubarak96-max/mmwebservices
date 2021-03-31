import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="blog-links">
        <div className="blog-link">
          <div className="blog-href">
            <Link to="/blog/why-you-need-a-website">
              why you need a website
            </Link>
          </div>
          <div className="blog-image">
            <Link to="/blog/why-you-need-a-website">
              <img src="/blog1-1.jpg" alt="why you need a website in Uganda" />
            </Link>
          </div>
        </div>

        <div className="blog-link">
          <div className="blog-href">
            <Link to="/blog/how-do-you-make-a-website">building a website</Link>
          </div>
          <div className="blog-image">
            <Link to="/blog/how-do-you-make-a-website">
              <img src="/blog2-1.jpg" alt="how do you make a website" />
            </Link>
          </div>
        </div>

        {/* <Link to="/blog/progressive-web-apps">progressive web apps</Link>
      <Link to="/blog/the-future-of-ecommerce">the future of ecommerce</Link>
      <Link to="/blog/jam-stack">jam stack</Link>
      <Link to="/blog/career-path-of-a-software-engineer">career path</Link> */}
      </div>
    </Layout>
  )
}

export default Blog
