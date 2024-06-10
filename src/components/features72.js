import React from 'react'

import PropTypes from 'prop-types'

import './features72.css'

const Features72 = (props) => {
  return (
    <div className="features72-layout226 thq-section-padding">
      <div className="features72-max-width thq-grid-3 thq-section-max-width">
        <div className="thq-flex-column">
          <div className="thq-flex-column features72-content">
            <h3 className="features72-title1 thq-heading-3">
              {props.feature1Title}
            </h3>
            <span className="features72-description1 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
        </div>
        <div className="features72-column1 thq-flex-column"></div>
        <div className="thq-flex-column">
          <div className="thq-flex-column features72-content1">
            <strong className="features72-title3 thq-heading-3">
              {props.feature3Title}
            </strong>
            <span className="features72-description3 thq-body-small">
              {props.feature3Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features72.defaultProps = {
  feature1Description:
    'Generate Lorem Ipsum text with just a few clicks to fill in your designs and mockups quickly.',
  feature3Description:
    'Receive Lorem Ipsum text instantly without any delays, making your workflow more efficient.',
  feature3Slogan: 'Get text in an instant',
  feature2Description:
    'Easily adjust the length and format of the generated text to suit your specific requirements.',
  feature1Title: 'Lorem Ipsum Text Generation',
  feature1Slogan: 'Create placeholder text effortlessly',
  feature3Title: 'Instant Results',
  feature2Slogan: 'Tailor text to your needs',
  feature2Title: 'Customizable Options',
}

Features72.propTypes = {
  feature1Description: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3Slogan: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1Slogan: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2Slogan: PropTypes.string,
  feature2Title: PropTypes.string,
}

export default Features72
