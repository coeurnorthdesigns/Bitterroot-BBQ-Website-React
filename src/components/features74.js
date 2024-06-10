import React from 'react'

import PropTypes from 'prop-types'

import './features74.css'

const Features74 = (props) => {
  return (
    <div className="features74-layout226 thq-section-padding">
      <div className="features74-max-width thq-grid-3 thq-section-max-width">
        <div className="thq-flex-column">
          <div className="thq-flex-column features74-content">
            <h3 className="features74-title1 thq-heading-3">
              {props.feature1Title}
            </h3>
            <span className="features74-description1 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
        </div>
        <div className="features74-column1 thq-flex-column"></div>
        <div className="thq-flex-column">
          <div className="thq-flex-column features74-content1">
            <strong className="features74-title3 thq-heading-3">
              {props.feature3Title}
            </strong>
            <span className="features74-description3 thq-body-small">
              {props.feature3Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features74.defaultProps = {
  feature2Description:
    'Easily adjust the length and language of the lorem ipsum text to match the requirements of your design projects',
  feature1Description:
    'Generate lorem ipsum text with just a click of a button to fill your designs and mockups with placeholder content easily',
  feature1Title: 'Instant Lorem Ipsum Text',
  feature3Description:
    'Choose from a variety of languages to generate lorem ipsum text that aligns with the language preferences of your designs',
  feature3Title: 'Multilingual Support',
  feature3Slogan: 'Lorem ipsum text available in multiple languages',
  feature2Title: 'Customizable Text',
  feature2Slogan: 'Customize lorem ipsum text to fit your design needs',
  feature1Slogan: 'Get lorem ipsum text instantly for your designs',
}

Features74.propTypes = {
  feature2Description: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3Slogan: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2Slogan: PropTypes.string,
  feature1Slogan: PropTypes.string,
}

export default Features74
