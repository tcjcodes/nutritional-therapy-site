import React from 'react';
import Script from 'react-load-script';
import Hero from '../components/hero'
import { Container, Section } from 'bloomer'

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <div>
        <Hero/>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <Section>
          <Container>
            <h2 className="title">Hello World</h2>
            <p>Make muffins ignore the squirrels, you'll never catch them anyway but crash against wall but walk away like
              nothing happened for munch on tasty moths so run in circles plays league of legends. Flop over all of a
              sudden cat goes crazy. </p>
            <p>Chase imaginary bugs spend all night ensuring people don't sleep sleep all day howl uncontrollably for no
              reason, why must they do that, or i like big cats and i can not lie. Present belly, scratch hand when
              stroked. Eats owners hair then claws head lick the other cats purr while eating.</p>
          </Container>
        </Section>
        {/*<BlogTemplate posts={posts} />*/}
      </div>
    );
  }
}

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    excerpt(pruneLength: 400)
                    id
                    frontmatter {
                        title
                        templateKey
                        date(formatString: "MMMM DD, YYYY")
                        path
                    }
                }
            }
        }
    }
`;
