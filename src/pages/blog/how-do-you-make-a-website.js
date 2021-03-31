import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Blog6 = () => {
  return (
    <Layout>
      <SEO
        title="How To Build a Website"
        description="how do you make a website"
        keywords={["how do you make a website"]}
        ogTitle="How To Build a Website"
        ogDesc="how do you make a website"
        ogImg="/blog2-2.png"
        ogSite="mmwebservices.xyz"
        ogLocation="Kampala, Uganda"
        ogContent="article"
        twitterTitle="How To Build a Website"
        twitterDesc="how do you make a website"
        twitterImg="/blog2-2.png"
        twitterName="@mmwebservices"
      />
      <article className="blog-post">
        <h1>how do you make a website</h1>
        <img src="/blog2-2.png" alt="how do you make a website" />
        <p>Here are the technologies that are used to build websites</p>
        <ul>
          <li>
            Browsers like Google Chrome, Safari, Firefox and Internet Explorer
          </li>
          <li>
            HTML, a markup language that provides the structure of a website so
            that web browsers know what to show.
          </li>
          <li>
            CSS, Cascading Style Sheet. CSS let’s one change colors, fonts,
            animations, and transitions of web pages so that they look good.
          </li>
          <li>
            Programming Languages. Programming languages are ways to communicate
            to computers and tell them what to do. These include JavaScript,
            Python, Ruby, PHP, Go, C and Java
          </li>
          <li>
            Frameworks. Frameworks are built to make building and working with
            programming languages easier. Frameworks typically take all the
            difficult, repetitive tasks in setting up a new web application and
            either does them for you or make them very easy for you to do.
            Frameworks include Django - a full-stack framework built using
            Python, Node.js / express.js - a server-side javascript framework,
            Bootstrap - a framework for building with HTML/CSS/Javascript,
            Ember.js, Vue.js and Angular.js - front-end javascript frameworks.
          </li>
          <li>
            Libraries. These are groupings of code snippets to enable a large
            amount of functionality without having to write it all by yourself.
            They include React.js, jQuery and Underscore
          </li>
          <li>
            Databases. This is where all your data is stored. They include
            MongoDB, Redis, PostgreSQL, Oracle, MySQL
          </li>
          <li>
            Website builders. These are tools that typically allow the
            construction of websites without manual code editing. They require
            little or no coding skills. These include WordPress, Joomla, Wix and
            Drupal
          </li>
        </ul>
        <img src="/blog2-3.jpg" alt="website technologies" />

        <p>One should also be familiar with the following</p>
        <ul>
          <li>
            Client (or Client-side). A client is one user of an application.
            It’s you and me when we visit google.com. Client’s can be desktop
            computers, tablets, or mobile devices. Clients request and display
            data.
          </li>
          <li>
            Server (or Server-side). A server is where the application code is
            typically stored and responds to requests by the client.The server
            will gather the appropriate information and respond to those
            requests.
          </li>
          <li>
            Front-end. This is comprised of HTML, CSS, and Javascript. This is
            how and where the website is shown to users.
          </li>
          <li>
            Back-end. This is comprised of your server and database. It’s the
            place where functions, methods, and data manipulation happens that
            you don’t want the clients to see.
          </li>
          <li>
            Protocols. These are standardized instructions for how to pass
            information back and forth between computers and devices. They
            include HTTP, DDP
          </li>
          <li>
            API (Application programming interface). It is created by the
            developer of an application to allow other developers to use some of
            the application's functionality without sharing code. It works as a
            link between the client and the server and between different
            programs.
          </li>
          <li>
            Data formats. These are the structure of how data is stored. They
            include JSON, XML and CSV
          </li>
        </ul>

        <p>
          At first websites were only built manually with HTML to define the
          structure, CSS for styles and layout, JavaScript for client-side
          functionality and another programming language like Python or Java or
          JavaScript with Node.js to provide server-side functioning and a
          database like MongoDB or MySQL for storing the website data but then
          website development was made easier by the introduction of website
          building systems. These combine all the website necessities ie,
          client-side, server-side and database setup and they can be used by
          even non techy people with little or no coding skills. These website
          building systems include WordPress, Wix, Shopify, Joomla and others
        </p>
        <img src="/blog2-4.jpg" alt="website builders" />
        <p>
          Each of these two website developing approaches ie, manually or using
          a website building system, has its advantages and disadvantages and
          you may do your home work before choosing one for your website
        </p>
      </article>
      <Link to="/" className="back-home">
        Back Home
      </Link>
    </Layout>
  )
}

export default Blog6
