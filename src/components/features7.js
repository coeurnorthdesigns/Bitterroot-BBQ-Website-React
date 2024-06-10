import React from 'react'

import PropTypes from 'prop-types'

import './features7.css'

const Features7 = (props) => {
  return (
    <div
      className={`features7-layout226 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features7-max-width thq-grid-3 thq-section-max-width">
        <div className="thq-flex-column">
          <div className="thq-flex-column features7-content">
            <h3 className="features7-title1 thq-heading-3">
              {props.feature1Title}
            </h3>
            <span className="features7-description1 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
        </div>
        <div className="features7-column1 thq-flex-column"></div>
        <div className="thq-flex-column">
          <div className="thq-flex-column features7-content1">
            <strong className="features7-title3 thq-heading-3">
              {props.feature3Title}
            </strong>
            <span className="features7-description3 thq-body-small">
              {props.feature3Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features7.defaultProps = {
  feature2Title: 'Discover the Magic of Lorem Ipsum Text Generation',
  rootClassName: '',
  feature1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature3Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature3Title: 'Discover the Magic of Lorem Ipsum Text Generation',
  feature2Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature2Slogan: 'Slogan',
  feature3Slogan: 'Slogan',
  feature1Slogan: 'Slogan',
  feature1Title: 'Discover the Magic of Lorem Ipsum Text Generation',
}

Features7.propTypes = {
  feature2Title: PropTypes.string,
  rootClassName: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2Slogan: PropTypes.string,
  feature3Slogan: PropTypes.string,
  feature1Slogan: PropTypes.string,
  feature1Title: PropTypes.string,
}

export default Features7
