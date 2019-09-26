import React, { Component } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FaAlignRight } from "react-icons/fa"
import "./navbar.css"

const NavbarHeader = ({ handleNavbar }) => {

  const getNavBar = useStaticQuery(graphql`
    {
      navLinks: allContentfulNavLinks(sort: { fields: [order], order: ASC }) {
        edges {
          node {
            id
            link
            order
          }
        }
      }
      navbarLogo: contentfulNavbarLogo {
    id
    logo {
      id
      fixed(width: 140) {
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
    firstName
    lastName
  }
    }
  `)

  const { logo, firstName, lastName } = getNavBar.navbarLogo

  return (
    <div className="header-wrapper">
      <Link to="/">
        <div className="flex-wrapper align">
          <img className="company-logo-mobile" src={logo.fixed.src} />
          <p className="company-name-mobile">
            {firstName} <br /> {lastName}
          </p>
        </div>
      </Link>
      <FaAlignRight
        className="toggle-icon"
        onClick={() => {
          handleNavbar()
        }}
      />
    </div>
  )
}

export default NavbarHeader
