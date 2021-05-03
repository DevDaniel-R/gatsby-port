import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <h4>Hi there, and welcome to</h4>
            <div className="underline"></div>
            <h1>AMBIT-WEB</h1>
            <div></div>
            <h3>
              We build web components <br />
              that drive results!
            </h3>
            <Link to="/contact" className="btn">
              contact us
            </Link>
            <div className="social-links"></div>
            {socialLinks.map(link => {
              return (
                <a href={link.url} key={link.id} className="social-link">
                  {link.icon}
                </a>
              )
            })}
          </div>
        </article>
        <StaticImage
          src="../assets/images/hero2.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
      </section>
    </header>
  )
}

export default Hero
