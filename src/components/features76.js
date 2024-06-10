import React from 'react'

import PropTypes from 'prop-types'

import './features76.css'

const Features76 = (props) => {
  return (
    <div
      className={`features76-layout226 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features76-max-width thq-grid-3 thq-section-max-width">
        <div className="thq-flex-column">
          <div className="thq-flex-column features76-content">
            <h3 className="features76-title1 thq-heading-3">
              {props.feature1Title}
            </h3>
            <span className="features76-description1 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
        </div>
        <div className="features76-column1 thq-flex-column"></div>
        <div className="thq-flex-column">
          <div className="thq-flex-column features76-content1">
            <strong className="features76-title3 thq-heading-3">
              {props.feature3Title}
            </strong>
            <span className="features76-description3 thq-body-small">
              {props.feature3Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features76.defaultProps = {
  feature2Slogan:
    'Select from a variety of languages to generate Lorem Ipsum text in different languages',
  feature1Description:
    'Choose the exact number of words or characters you need for your project with our customizable text length feature',
  rootClassName: '',
  feature1Slogan:
    'Easily adjust the length of Lorem Ipsum text to fit your design',
  feature3Description:
    'Generate Lorem Ipsum text quickly and efficiently to speed up your design process with our instant text generation feature',
  feature3Slogan: 'Get Lorem Ipsum text instantly for your designs and mockups',
  feature2Description:
    'Explore our diverse language options to find the perfect Lorem Ipsum text for your design in multiple languages',
  feature2Title: 'Multiple Language Options',
  feature1Title: 'Customizable Text Length',
  feature3Title: 'Instant Text Generation',
}

Features76.propTypes = {
  feature2Slogan: PropTypes.string,
  feature1Description: PropTypes.string,
  rootClassName: PropTypes.string,
  feature1Slogan: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3Slogan: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3Title: PropTypes.string,
}

export default Features76
