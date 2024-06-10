import React from 'react'

import PropTypes from 'prop-types'

import './features77.css'

const Features77 = (props) => {
  return (
    <div className="features77-layout226 thq-section-padding">
      <div className="features77-max-width thq-grid-3 thq-section-max-width">
        <div className="thq-flex-column">
          <div className="thq-flex-column features77-content">
            <h3 className="features77-title1 thq-heading-3">
              {props.feature1Title}
            </h3>
            <span className="features77-description1 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
        </div>
        <div className="features77-column1 thq-flex-column"></div>
        <div className="thq-flex-column">
          <div className="features77-content1 thq-flex-column"></div>
        </div>
      </div>
    </div>
  )
}

Features77.defaultProps = {
  feature2Slogan: 'Choose from a variety of languages',
  feature3Slogan: 'Get Lorem Ipsum text quickly',
  feature2Description:
    'Select the language that best fits your design needs, from English to Spanish, and more',
  feature1Title: 'Custom Text Length',
  feature3Description:
    'Generate Lorem Ipsum text instantly to fill your designs with content in a snap',
  feature2Title: 'Multiple Languages',
  feature3Title: 'Instant Generation',
  feature1Description:
    'Easily adjust the number of words or characters to generate the perfect amount of text for your design',
  feature1Slogan: 'Set the desired length of Lorem Ipsum text',
}

Features77.propTypes = {
  feature2Slogan: PropTypes.string,
  feature3Slogan: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1Slogan: PropTypes.string,
}

export default Features77
