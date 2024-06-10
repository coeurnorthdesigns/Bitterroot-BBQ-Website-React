import React from 'react'

import PropTypes from 'prop-types'

import './banner11.css'

const Banner11 = (props) => {
  return (
    <div className="banner11-container thq-section-padding">
      <div className="banner11-max-width thq-section-max-width">
        <div className="banner11-container1">
          <h2 className="banner11-title thq-heading-2">{props.heading1}</h2>
        </div>
      </div>
    </div>
  )
}

Banner11.defaultProps = {
  content1: 'Generate Lorem Ipsum text instantly',
  heading1: 'Quickly Populate Your Designs',
  action1: 'Get Started',
}

Banner11.propTypes = {
  content1: PropTypes.string,
  heading1: PropTypes.string,
  action1: PropTypes.string,
}

export default Banner11
