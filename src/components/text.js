import React from 'react'

import PropTypes from 'prop-types'

import './text.css'

const Text = (props) => {
  return (
    <div className="text-container">
      <span className="text-text thq-body-small">{props.plan1Feature3}</span>
    </div>
  )
}

Text.defaultProps = {
  plan1Feature3: 'Feature text goes here',
}

Text.propTypes = {
  plan1Feature3: PropTypes.string,
}

export default Text
