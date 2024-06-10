import React from 'react'

import PropTypes from 'prop-types'

import './features75.css'

const Features75 = (props) => {
  return (
    <div className="features75-layout226 thq-section-padding">
      <div className="features75-max-width thq-grid-3 thq-section-max-width">
        <div className="thq-flex-column">
          <div className="features75-content thq-flex-column">
            <h3 className="features75-title1 thq-heading-3">
              {props.feature1Title}
            </h3>
            <span className="features75-description1 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
        </div>
        <div className="features75-column1 thq-flex-column"></div>
        <div className="thq-flex-column">
          <div className="features75-content1 thq-flex-column">
            <strong className="features75-title3 thq-heading-3">
              {props.feature3Title}
            </strong>
            <span className="features75-description3 thq-body-small">
              {props.feature3Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features75.defaultProps = {
  feature1Title: 'Customizable Text Length',
  feature3Slogan: 'Get Lorem Ipsum text instantly for your designs and mockups',
  feature3Title: 'Instant Text Generation',
  feature2Title: 'Multiple Language Options',
  feature1Slogan:
    'Easily adjust the length of Lorem Ipsum text to fit your design',
  feature3Description:
    'Generate placeholder text quickly and efficiently without any delays',
  feature1Description:
    'Choose the exact number of words, sentences, or paragraphs you need for your project',
  feature2Slogan:
    'Select from a wide range of languages to generate Lorem Ipsum text',
  feature2Description:
    'Explore different language options to match the design aesthetic or language requirements',
}

Features75.propTypes = {
  feature1Title: PropTypes.string,
  feature3Slogan: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1Slogan: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2Slogan: PropTypes.string,
  feature2Description: PropTypes.string,
}

export default Features75
