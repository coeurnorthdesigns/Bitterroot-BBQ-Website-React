import React from 'react'

import PropTypes from 'prop-types'

import './banner13.css'

const Banner13 = (props) => {
  return (
    <div className="banner13-container thq-section-padding">
      <div className="banner13-max-width thq-section-max-width">
        <div className="banner13-container1">
          <h2 className="banner13-title thq-heading-2">{props.heading1}</h2>
        </div>
      </div>
    </div>
  )
}

Banner13.defaultProps = {
  content1:
    'Quickly populate your designs with placeholder text in various languages.',
  action1: 'Get Started',
  heading1: 'Generate Lorem Ipsum Text Instantly',
}

Banner13.propTypes = {
  content1: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
}

export default Banner13
