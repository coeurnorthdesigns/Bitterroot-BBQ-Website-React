import React from 'react'

import PropTypes from 'prop-types'

import './banner33.css'

const Banner33 = (props) => {
  return (
    <div
      className={`banner33-container thq-section-padding ${props.rootClassName} `}
    >
      <img
        id={props.imageId}
        alt={props.image1Alt}
        src={props.image1Src}
        className="banner33-image thq-img-ratio-16-9"
      />
      <div className="banner33-max-width thq-section-max-width">
        <div className="banner33-container1">
          <h2 className="banner33-title thq-heading-2 thq-heading-3">
            {props.heading1}
          </h2>
          <h3 className="banner33-text thq-heading-3">{props.content1}</h3>
        </div>
      </div>
    </div>
  )
}

Banner33.defaultProps = {
  image1Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageId: '',
  action1: 'Call to Action',
  rootClassName: '',
  heading1: 'Company Name',
  image1Alt: 'image',
  content1: 'Company mission statement',
}

Banner33.propTypes = {
  image1Src: PropTypes.string,
  imageId: PropTypes.string,
  action1: PropTypes.string,
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
}

export default Banner33
