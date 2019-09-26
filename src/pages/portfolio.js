import React from 'react'
import SubPageHeader from '../components/SubPageHeader'
import Project from '../components/Project'
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
                        <h3 className="heading-title heading-title--dark">My Latest Work</h3>
                        <p>Take a look at some my recent projects</p>
                    </div>
                    <a className="portfolio__button" href="#">View All</a>
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
