import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
// import "../assets/fonts/AirbnbCerealBlack.woff"
// import "../assets/fonts/AirbnbCerealBold.woff"
// import "../assets/fonts/AirbnbCerealBook.woff"
// import "../assets/fonts/AirbnbCerealExtraBold.woff"
// import "../assets/fonts/AirbnbCerealLight.woff"
// import "../assets/fonts/AirbnbCerealMedium.woff"

const IndexPage = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
  } = data
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Projects title="Featured Projects" projects={projects} />
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject {
      nodes {
        description
        github
        id
        slug
        title
        url
        stack {
          id
          title
        }
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`

export default IndexPage
