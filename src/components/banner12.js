import React from 'react'

import PropTypes from 'prop-types'

import './banner12.css'

const Banner12 = (props) => {
  return (
    <div className="banner12-container thq-section-padding">
      <div className="banner12-max-width thq-section-max-width">
        <div className="banner12-container1">
          <h2 className="banner12-title thq-heading-2">{props.heading1}</h2>
        </div>
      </div>
    </div>
  )
}

Banner12.defaultProps = {
  heading1: 'Quickly Populate Your Designs',
  content1: 'Generate Lorem Ipsum text instantly',
  action1: 'Get Started',
}

Banner12.propTypes = {
  heading1: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
}

export default Banner12
