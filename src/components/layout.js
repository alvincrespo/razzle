import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { Global } from "@emotion/core"
import styled from "@emotion/styled"

import { globalStyles } from "./globalStyles"

const Footer = styled.footer`
  text-align: center;
  font-size: 0.8rem;
  color: yellow;

  a {
    color: yellow;
  }
`

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Global styles={globalStyles} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://www.gatsbyjs.org">@alvincrespo</a> using{" "}
          <a href="https://www.gatsbyjs.org">GatsbyJS</a>
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
