import Img from "gatsby-image";
import React from "react";
import Script from "react-load-script";
import { graphql } from "gatsby";
import HomeHero from "../components/home/home-hero";
import Layout from "../components/layout";
const rgba = "0,0,0"; //`119, 139, 64`

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    const heroSizes = data.file.childImageSharp.fluid;
    return (
      <Layout>
        <div>
          <HomeHero
            background={
              <Img
                style={{
                  position: "absolute",
                  objectFit: "cover",
                  objectPosition: "center center",
                  width: "100%",
                  height: "100%",
                  opacity: "0.4"
                }}
                fluid={heroSizes}
                alt="Herbs, turmeric, chopping board"
              />
            }
          />
          <Script
            url="https://identity.netlify.com/v1/netlify-identity-widget.js"
            onLoad={this.handleScriptLoad.bind(this)}
          />
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query IndexQuery {
    file(relativePath: { eq: "image0.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
