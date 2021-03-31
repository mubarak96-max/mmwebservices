import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Blog1 = () => {
  return (
    <Layout>
      <SEO
        title="The Need for a Website in Uganda"
        description="Why you need a website for your business/brand/organization in Uganda"
        keywords={["why you need a website in Uganda"]}
      />
      <article className="blog-post">
        <h1>Why you need a website in Uganda</h1>
        <img src="/blog1-2.jpg" alt="why you need a website in Uganda" />
        <p>
          There is a rapid launch of businesses and that’s happening almost
          everywhere, totalling to hundreds and thousands of new business across
          your city, country and continent but only a third dare to have a
          website. Websites are regarded as the cyber/digital home for any
          business and the digital world is borderless for any individual with
          an internet-enabled device, the potential of customer attraction is
          overwhelming. Some businesses have attained multi-national and global
          success, thanks to the role played by their websites but what does
          having a website mean for your business?
        </p>
        <div className="reason">
          <h2>A website works as a receptionist for your business</h2>
          <p>
            Considering a start up business that needs to scale up and expand
            slowly through the process then it is necessary to have a website to
            assist you with the reception roles such as welcoming potential
            customers, answering (FAQs) frequently asked questions and taking
            appointment bookings on the digital front. Websites belonging to
            businesses with abundant resources have chatbots that automatically
            chat and respond to website visitors and feedback forms that collect
            data from visitors.
          </p>
        </div>
        <div className="reason">
          <h2>A website enhances your online presence</h2>
          <p>
            Of the 7.4 Billion people in the world, upto 3.5 Billion people or
            47% are online every day. They are searching for information,
            sharing on social media or shopping on e-commerce websites. This
            number is expected to grow as the world becomes increasingly
            dependent on mobile technology to search the Internet. Today there
            are an estimated 2.3 Billion smartphones worldwide. But in 2020, the
            total number of smartphones is expected to hit 6.1 Billion. If your
            small business does not have a website, you will be undermining its
            ability to generate income
          </p>
        </div>
        <div className="reason">
          <h2>A website works on the publicity of the business</h2>
          <p>
            Businesses need all the publicity they can get and an up-to-date
            website designed to match the business branding and consisting all
            the accurate info from logo, contacts, location, services offered
            and other information you want displayed to on your website. That is
            a great publicist.
          </p>
        </div>
        <div className="reason">
          <h2>A website works as a shop</h2>
          <p>
            A business may have costumers coming to the store but it is
            difficult ignoring the fact that there are hundreds of thousands of
            potential customers that are willing to purchase a product or pay
            for a service without having to meet in person and a business has an
            advantage of even making sales during non-business hours.
          </p>
        </div>
        <div className="reason">
          <h2>A website gives you more credibility</h2>
          <p>
            Your website is the face of your business and you have to make sure
            it is looking pretty all the time because, in this internet driven
            age, potential customers will inspect your website for
            trustworthiness and they better not catch you slipping with a poorly
            designed website when you are found. A website makes your business
            look more serious and in the playing field like a corporate. A
            website helps keeping your clients' reviews and testimonials on
            display for every visitor to see. An appealing website with all the
            information in the right place will get you new customers calling
            your phone and making inquiries regardless of your actual financial
            situation or position in the industry.
          </p>
        </div>
        <div className="reason">
          <h2>A website offers affordable advertising</h2>
          <p>
            Traditional advertising has been hooking and promoted brands but if
            you’re looking for affordable advertising solutions then a website
            may offer you the best value for your money through social media
            marketing, search engine marketing and search engine optimization to
            make your brand more visible on the cyber world. A standard ad
            budget can take your brand to places you may never have imagined.
            You may also advertise to people in locations around your business
            area if you need them to be aware of your neighbourhood business.
          </p>
        </div>
        <div className="reason">
          <h2>A business creates online relationships with clients</h2>
          <p>
            A business should be a living breathing entity and loyalty is
            achieved when customers know they are dealing with a brand that
            understands their needs and not just one that wants to profit. A
            website introduces who you are, addresses the needs of your market,
            educate the market of your works and improve customer service
          </p>
        </div>
      </article>
      <Link to="/" className="back-home">
        Back Home
      </Link>
    </Layout>
  )
}

export default Blog1
