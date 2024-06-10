import React from 'react'

import PropTypes from 'prop-types'

import './features71.css'

const Features71 = (props) => {
  return (
    <div className="features71-layout226 thq-section-padding">
      <div className="features71-max-width thq-grid-3 thq-section-max-width">
        <div className="thq-flex-column">
          <div className="features71-content thq-flex-column">
            <h3 className="features71-title1 thq-heading-3">
              {props.feature1Title}
            </h3>
            <span className="features71-description1 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
        </div>
        <div className="features71-column1 thq-flex-column"></div>
        <div className="thq-flex-column">
          <div className="features71-content1 thq-flex-column">
            <strong className="features71-title3 thq-heading-3">
              {props.feature3Title}
            </strong>
            <span className="features71-description3 thq-body-small">
              {props.feature3Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features71.defaultProps = {
  feature3Description:
    'Generate Lorem Ipsum text in various languages to suit different design projects and multicultural needs.',
  feature1Description:
    'Get instant Lorem Ipsum text to quickly populate your designs and mockups without any delay.',
  feature3Title: 'Variety of Languages Supported',
  feature1Slogan: 'Efficiently fill in designs and mockups',
  feature1Title: 'Instant Lorem Ipsum Generation',
  feature2Slogan: 'Tailor Lorem Ipsum to your needs',
  feature2Description:
    'Easily adjust the length of Lorem Ipsum text generated to match your specific design requirements.',
  feature2Title: 'Customizable Text Length',
  feature3Slogan: 'Lorem Ipsum in multiple languages',
}

Features71.propTypes = {
  feature3Description: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1Slogan: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2Slogan: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3Slogan: PropTypes.string,
}

export default Features71
