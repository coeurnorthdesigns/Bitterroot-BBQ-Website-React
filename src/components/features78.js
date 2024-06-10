import React from 'react'

import PropTypes from 'prop-types'

import './features78.css'

const Features78 = (props) => {
  return (
    <div className="features78-layout226 thq-section-padding">
      <div className="features78-max-width thq-grid-auto-300 thq-section-max-width">
        <div className="features78-column thq-flex-column">
          <div className="thq-flex-column features78-content">
            <h3 className="features78-title1 thq-heading-3">
              {props.feature1Title}
            </h3>
            <span className="features78-description1 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
        </div>
        <div className="features78-column1 thq-flex-column"></div>
      </div>
    </div>
  )
}

Features78.defaultProps = {
  feature3Title: 'Instant Generation',
  feature1Title: 'Custom Text Length',
  feature3Description:
    'Generate Lorem Ipsum text instantly to fill your designs with content in a snap',
  feature2Title: 'Multiple Languages',
  feature3Slogan: 'Get Lorem Ipsum text quickly',
  feature2Slogan: 'Choose from a variety of languages',
  feature1Slogan: 'Set the desired length of Lorem Ipsum text',
  feature2Description:
    'Select the language that best fits your design needs, from English to Spanish, and more',
  feature1Description:
    'Easily adjust the number of words or characters to generate the perfect amount of text for your design',
}

Features78.propTypes = {
  feature3Title: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3Slogan: PropTypes.string,
  feature2Slogan: PropTypes.string,
  feature1Slogan: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Description: PropTypes.string,
}

export default Features78
