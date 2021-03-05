import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from './Navbar'
import Footer from './footer'

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <main>
      <Navbar/>
      {children}
      <Footer/>
    </main>
  )
}

export default Layout
