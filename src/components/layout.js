import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
      render={data => (
        <div className="flex flex-col font-sans min-h-screen text-grey-darkest opacity-100">
          <div className="flex flex-col flex-1 justify-center max-w-xl mx-auto p-8 w-full">
            {children}
          </div>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
