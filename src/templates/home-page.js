/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Offerings from '../components/Offerings'
import Testimonials from '../components/Testimonials'

export const HomePageTemplate = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='hero is-large' id='homepage-banner'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title is-size-1'>
                  Learn SEO For Free, <br/>
                  and Power Up Your Digital Marketing
                </h1>
                <hr/>
                <a className="button is-rounded is-large">Get Started For Free</a>
                <p><em>or </em><a href="/about" id="homepage-banner-link">Learn More About The Institute</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section section--gradient'>
      <div className='container'>

        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <div>
                  <h3 className='has-text-weight-semibold is-size-2'>
                    {heading}
                  </h3>
                  <p>{description}</p>
                  <hr/>
                  <div className="columns">
                    <div className="column">
                      <a className="button is-rounded is-large is-hoverable">Get Started For Free</a> <br />
                      <em id="homepage-cta-extra">No sign up required. Just learn. No catch!</em>
                    </div>
                    <div className="column" id="menu-cta"></div>
                    <hr />
                  </div>
                </div>
                <h2 className='has-text-weight-semibold is-size-2'>Reviews of The SEO Course</h2>
                <Testimonials testimonials={testimonials} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

function makeMenuCTA() {
  const menuItems = [
      'Learn More About The Institute',
      'Meet Our Team of Experts',
      'Join Our Free Slack Community'
  ];

  const menuLinks = [
      '/about-us',
      '/about-us#faculty',
      '/contact'
  ]

  var el = document.getElementById('menu-cta');
  var elNav = document.createElement('ul');
  var menuLength = menuItems.length;

  el.appendChild(elNav);

  for (let i = 0; i < menuLength; i++) {
      var elNavItem = document.createElement('li');
      var elNavItemLink = document.createElement('a');

      elNav.appendChild(elNavItem);
      elNavItemLink.setAttribute("class", "link is-info");
      elNavItemLink.setAttribute("href", menuLinks[i]);
      elNavItemLink.innerHTML = menuItems[i];
      elNavItem.appendChild(elNavItemLink);
  };
}

makeMenuCTA();

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

const HomePage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <HomePageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      heading={frontmatter.heading}
      description={frontmatter.description}
      offerings={frontmatter.offerings}
      testimonials={frontmatter.testimonials}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        heading
        description
        offerings {
          blurbs {
            image
            text
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`
