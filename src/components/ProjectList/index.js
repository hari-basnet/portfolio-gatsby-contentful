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
        // <section id="portfolio-page" class="portfolio">
        //     <div class="portfolio__container">
        //         {getProject.allProject.edges.slice(0, 6).map(({ node: item }) => {
        //             return (
        //                 <Project image={item.image.fixed} title={item.title} />
        //             )
        //         })}
        //     </div>
        // </section>
        <section className="section portfolio-section" id="services">
            <div className="container">
                <p className="normal-text">
                    I provide <span className="gold-text">high quality</span> Event
                    Management, Leadership Development and Project Management.
              </p>
                <div className="portfolio__container">
                    {getProject.allProject.edges.slice(0, 6).map(({ node: item }) => {
                        return (
                            <Project image={item.image.fixed} title={item.title} />
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
