import React from 'react'

import PropTypes from 'prop-types'

import './banner2.css'

const Banner2 = (props) => {
  return (
    <div
      className={`banner2-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="banner2-max-width thq-section-max-width">
        <div className="banner2-container1">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="banner2-image"
          />
        </div>
        <video
          src={props.video1Src}
          loop="true"
          muted="true"
          poster={props.video1Poster}
          autoPlay="true"
          className="banner2-video"
        ></video>
      </div>
    </div>
  )
}

Banner2.defaultProps = {
  action1: 'Call to Action',
  video1Poster: 'https://play.teleporthq.io/static/svg/videoposter.svg',
  imageAlt: 'image',
  video1Src: '',
  content1: 'Company mission statement',
  heading1: 'Company Name',
  imageSrc: '/bitterroot%20red%20fonts%20trans-500w.png',
  rootClassName: '',
}

Banner2.propTypes = {
  action1: PropTypes.string,
  video1Poster: PropTypes.string,
  imageAlt: PropTypes.string,
  video1Src: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Banner2
