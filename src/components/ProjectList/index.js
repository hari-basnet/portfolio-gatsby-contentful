import React from 'react';
import Project from '../Project'
import { useStaticQuery, graphql, Link } from 'gatsby';
import Button from '../Button'
import './styles.css'


const ProjectList = () => {
    const getProject = useStaticQuery(graphql`{
    allProject : allContentfulProject(sort:{fields:[order], order:ASC}) {
        edges {
            node {
                title
                order
                link
                image {
                  fixed(height:240, width:320) {
                    base64
            aspectRatio
            width
            height
            src
            srcSet
            srcWebp
            srcSetWebp
            
            }
        }
        }
      }
    } 
}`)
    return (
        <section className="section portfolio-section" id="services">
            <div className="container">
                <p className="normal-text">
                    I am a dedicated <span className="gold-text">Web Developer</span> 
              </p>
                <div className="portfolio__container">
                    {getProject.allProject.edges.slice(0, 6).map(({ node: item }) => {
                        return (
                            <Project image={item.image.fixed} title={item.title} link={item.link} />
                        )
                    })}
                </div>
                <div className="button-wrapper">
                    <Link to="/en/portfolio">
                        <Button styleClass="btn-primary" text="Learn more" />
                    </Link>
                </div>
            </div>
        </section>
    );
};
export default ProjectList;
