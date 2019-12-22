/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"
import "./layout.css"
import HeaderMenu from "@howtocodewell/header-menu";
import FooterMenu from "@howtocodewell/footer-menu";

const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

    return (
        <>
            <HeaderMenu/>

            <div className="page-container container mx-auto px-4">
                <main>{children}</main>


            </div>

            <div className='footer mt-4 pb-2'>
                <FooterMenu/>
                <footer className="pt-2">
                    <div className="container mx-auto px-4">
                        <div className='flex justify-between'>
                            <div className="mr-2">
                                <a href="https://github.com/howToCodeWell/wiki" target={'_blank'}
                                   rel="noopener noreferrer">Edit</a>
                            </div>
                            <div className="m2">
                                <a href="https://howtocodewell.net">How To Code Well</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout
