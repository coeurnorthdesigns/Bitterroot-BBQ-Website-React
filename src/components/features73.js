import React from 'react'

import PropTypes from 'prop-types'

import './features73.css'

const Features73 = (props) => {
  return (
    <div className="features73-layout226 thq-section-padding">
      <div className="features73-max-width thq-grid-3 thq-section-max-width">
        <div className="thq-flex-column">
          <div className="thq-flex-column features73-content">
            <h3 className="features73-title1 thq-heading-3">
              {props.feature1Title}
            </h3>
            <span className="features73-description1 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
        </div>
        <div className="features73-column1 thq-flex-column"></div>
        <div className="thq-flex-column">
          <div className="features73-content1 thq-flex-column">
            <strong className="features73-title3 thq-heading-3">
              {props.feature3Title}
            </strong>
            <span className="features73-description3 thq-body-small">
              {props.feature3Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features73.defaultProps = {
  feature1Description:
    'Generate Lorem Ipsum text instantly in various languages to fill your designs with content placeholders.',
  feature2Slogan: 'Lorem Ipsum in various languages',
  feature3Title: 'Customizable Text Length',
  feature3Slogan: 'Control the length of generated text',
  feature2Title: 'Multiple Language Support',
  feature1Title: 'Instant Lorem Ipsum Generation',
  feature3Description:
    'Easily adjust the length of Lorem Ipsum text to fit the space requirements of your design layout.',
  feature2Description:
    'Get Lorem Ipsum text in different languages to suit your design needs and reach a wider audience.',
  feature1Slogan: 'Quickly populate designs and mockups',
}

Features73.propTypes = {
  feature1Description: PropTypes.string,
  feature2Slogan: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3Slogan: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Slogan: PropTypes.string,
}

export default Features73
