import React from 'react'
import {Link} from 'gatsby'
import SEO from "../components/seo"
import Layout from '../components/layout'


const Contact = () => {
    return (
        <Layout>
            <SEO title="Contact Us"/>
            <div className="form-section">
            <form>
                <div className="field">
                    <label htmlFor="names">Names: </label>
                    <input type="text" required name="names"/>
                </div>
                <div className="field">
                    <label htmlFor="email">E-mail: </label>
                    <input type="text" name="email"/>
                </div>
                <div className="field">
                    <label htmlFor="phone-number">Phone Number: </label>
                    <input type="text" required name="phone-number"/>
                </div>
                <div className="field">
                    <label htmlFor="web design">Service</label>
                    <select name="service">
                        <option value="web designing">Web Designing</option>
                        <option value="domain registration">Domain Registration</option>
                        
                        <option value="web mantainance">Web Mantainance</option>
                        <option value="seo">SEO</option>
                        <option value="freelancing">Freelancing</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="package">Package</label>
                    <select name="packages">
                        <option value="basic">Basic Plan</option>
                        <option value="standard">Standard Plan</option>
                        <option value="Premium">Premium Plan</option>
                    </select>
                </div>
                <div className="field">
                     <textarea name="message" cols="30" rows="5">
                    How can we help you
                </textarea>
                </div>
               <button>
                    Send
                </button>
            </form>
            <Link to='/' className='back-home'>Back Home</Link>
            </div>
        </Layout>
    )
}

export default Contact
