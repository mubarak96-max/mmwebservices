import React from "react"
import { Link } from "gatsby"

const services = () => {
  return (
    <div>
      <section className="services">
        <h2>our services</h2>
        <article className="service">
          <h3>web designing</h3>
          <p>
            We create designs of websites that are displayed on the internet.
            Bringing out the appearance, layout and the content.
          </p>
          <Link to="/design">See more</Link>
        </article>
        <article className="service">
          <h3>domain registration</h3>
          <p>
            Bring your ideas to the world by securing a domain name for your
            brand/business/organization. Register a domain name and create your
            online identity that will reach you to the millions of people around
            the world using the internet.
          </p>
          <Link to="/domain">See more</Link>
        </article>
        <article className="service">
          <h3>web mantainance</h3>
          <p>
            Checking your website regularly for issues, mistakes and keeping it
            updated and relevant on a consistent basis so as to keep the website
            healthy, encouraged traffic growth and strengthening the SEO
            rankings. Keeping a website well mantained and attractive engage and
            retains customers. Regular monitoring of your website is a must for
            keeping your business running smoothly
          </p>
          <Link to="/mantainance">See more</Link>
        </article>
        <article className="service">
          <h3>Freelancing</h3>
          <p>
            We offer different services on a short-term basis regarding any of
            our fields working on a periodic or project basis.
          </p>
          <Link to="/freelancing">See more</Link>
        </article>
        <article className="service">
          <h3>search engine optimization - SEO</h3>
          <p>
            SEO stands for Search Engine Optimization which is the practice of
            increasing the quantity and quality of traffic to your website
            through organic search engine results. It's all about improving your
            site's visibility in the search engines. You can attract all the web
            users in the world to your site by the use of SEO.
          </p>
          <Link to="/seoPage">See more</Link>
          <article className="service">
            <h3>E-Commerce</h3>
            <p>
              Ecommerce is often used to refer to the sale of physical products
              online, but it can also describe any kind of commercial
              transaction that is facilitated through the internet. Ecommerce
              can take on a variety of forms involving different transactional
              relationships between businesses and consumers, as well as
              different objects being exchanged as part of these transactions.
            </p>
            <Link to="/ecommerce">See more</Link>
          </article>
        </article>
      </section>
    </div>
  )
}

export default services
