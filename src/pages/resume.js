import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Resume from "../components/Resume"
import SubPageHeader from "../components/SubPageHeader"

const services = () => {
  return (
    <Layout>
      <SEO title="Resume" />
      <SubPageHeader />
      <Resume />
    </Layout>
  )
}

export default services
