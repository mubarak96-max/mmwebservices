import React, {useState} from 'react'
import {useStaticQuery,graphql} from 'gatsby'
import Layout from "../components/layout"
import SEO from '../components/seo'
import Img from 'gatsby-image'

const info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ut iure corporis numquam provident natus magni quibusdam doloribus. Minima cumque quis eligendi consectetur aliquam ipsa eos esse saepe incidunt, a magni earum dolorem aperiam facere maiores dolorum molestiae. Quo, dolorum? Nisi aliquid, animi rerum tempore suscipit esse facilis placeat quod magni eaque at fugiat ducimus? Officia aperiam, porro quia facilis repellendus, cumque neque perspiciatis iure ut id corporis dicta repudiandae odit. Repellat, ipsam laborum dolorem tempore praesentium dicta quam esse enim sunt voluptatibus suscipit doloremque debitis, harum sapiente dolorum magni, omnis fugit id nisi qui repellendus accusamus. Cum veniam, doloribus dolore porro eaque, recusandae similique fugiat sit nam esse nulla eos, voluptate labore asperiores laborum minus consectetur adipisci in voluptas? Eum totam ab ipsa quae fugiat explicabo debitis deserunt nobis ea similique. Itaque cum tempora eaque cupiditate magnam eum odit error. Cupiditate voluptatem natus laudantium quis! Fuga facilis maiores accusamus. Repellat, ipsam laborum dolorem tempore praesentium dicta quam esse enim sunt voluptatibus suscipit doloremque debitis, harum sapiente dolorum magni, omnis fugit id nisi qui repellendus accusamus. Cum veniam, doloribus dolore porro eaque, recusandae similique fugiat sit nam esse nulla eos, "

const SingleBlog = () => {
    const [readMore,setReadMore] = useState(false)
    return (
        <div className="blog">
            <img src="/designing.jpg" alt=""/>
            <p>{readMore ? info : `${info.substring(0,200)}`}
                <button onClick={()=>setReadMore(!readMore)}>{readMore ? "...show less" : "read more..."}</button>
            </p>
        </div>
    )
}

const Blog = () => {
    return (
        <Layout>
            <SEO/>
        <section className="blogs">
          <SingleBlog/>
          <SingleBlog/>
          <SingleBlog/>
        </section>  
        </Layout>
    )
}

export default Blog
