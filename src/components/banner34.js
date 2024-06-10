import React from 'react'

import PropTypes from 'prop-types'

import './banner34.css'

const Banner34 = (props) => {
  return (
    <div
      className={`banner34-container thq-section-padding ${props.rootClassName} `}
    >
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="banner34-image thq-img-ratio-16-9"
      />
      <div className="banner34-max-width thq-section-max-width">
        <div className="banner34-container1">
          <h2 className="banner34-title thq-heading-2">{props.heading1}</h2>
        </div>
      </div>
    </div>
  )
}

Banner34.defaultProps = {
  rootClassName: '',
  content1: 'Company mission statement',
  action1: 'Call to Action',
  image1Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image1Alt: 'image',
  heading1: 'Company Name',
}

Banner34.propTypes = {
  rootClassName: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  heading1: PropTypes.string,
}

export default Banner34
