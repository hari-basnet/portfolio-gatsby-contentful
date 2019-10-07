import React from 'react'
import SubPageHeader from '../components/SubPageHeader'
import Project from '../components/Project'
import { Title3 } from '../components/Title'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

const portfolio = () => {

  const getProject = useStaticQuery(graphql`{

        allProjects:allContentfulProject(sort:{fields:[order], order:ASC}) {
          edges {
            node {
              id
              image {
                id
                fixed(height:240, width: 320) {
                  base64
                  tracedSVG
                  aspectRatio
                  width
                  height
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                }
              }
              title
              order
            }
          }
        }
        
      }
      `)
  const { edges } = getProject.allProjects

  return (
    <Layout>
      <SubPageHeader />
      <section id="portfolio-page" className="portfolio">
        <div className="heading-container">
          <div>
            <Title3 styleClass="title-h2-dark" text="Recent Projects" />
            <p className="project-page-title">Take a look at some my recent projects</p>
          </div>
        </div>
        <div className="portfolio__container">
          {
            edges.map(({ node: item }) => {
              return (
                <Project
                  image={item.image.fixed}
                  title={item.title}
                />
              )
            })

          }
        </div>
      </section>
    </Layout>
  )
}

export default portfolio
