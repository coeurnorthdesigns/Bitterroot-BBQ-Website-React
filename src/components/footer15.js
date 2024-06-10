import React from 'react'

import PropTypes from 'prop-types'

import './footer15.css'

const Footer15 = (props) => {
  return (
    <div className="footer15-container thq-section-padding">
      <div className="footer15-max-width thq-section-max-width">
        <div className="footer15-credits">
          <div className="footer15-row">
            <div className="footer15-credits1">
              <span className="footer15-link12 thq-body-small">
                {props.termsLink}
              </span>
            </div>
          </div>
          <span className="footer15-content3 thq-body-small">
            {props.copyright}
          </span>
        </div>
      </div>
    </div>
  )
}

Footer15.defaultProps = {
  cookiesLink: 'Cookie Policy',
  logoAlt: 'Lorem Ipsum Text Generator Logo',
  copyright: '© 2023 Lorem Ipsum Text Generator',
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  content1:
    'Lorem Ipsum Text Generator - Instant placeholder text for your design projects.',
  action1: 'Get Started',
  content2:
    'Quickly generate Lorem Ipsum text for your designs and mockups in multiple languages.',
  privacyLink: 'Privacy Policy',
  termsLink: 'Terms of Service',
}

Footer15.propTypes = {
  cookiesLink: PropTypes.string,
  logoAlt: PropTypes.string,
  copyright: PropTypes.string,
  logoSrc: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
  content2: PropTypes.string,
  privacyLink: PropTypes.string,
  termsLink: PropTypes.string,
}

export default Footer15
