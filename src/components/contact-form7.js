import React from 'react'

import PropTypes from 'prop-types'

import './contact-form7.css'

const ContactForm7 = (props) => {
  return (
    <div className="contact-form7-contact1 thq-section-padding">
      <div className="contact-form7-max-width thq-section-max-width thq-flex-row">
        <div className="contact-form7-section-title thq-flex-column">
          <div className="contact-form7-content">
            <h2 className="contact-form7-text thq-heading-2">
              {props.heading1}
            </h2>
          </div>
          <div className="contact-form7-content1">
            <div className="contact-form7-row">
              <span className="contact-form7-email thq-body-small">
                {props.email}
              </span>
            </div>
            <div className="contact-form7-row1">
              <span className="contact-form7-phone thq-body-small">
                {props.phone}
              </span>
            </div>
          </div>
        </div>
        <form className="contact-form7-form thq-flex-column">
          <div className="contact-form7-container">
            <div className="contact-form7-input">
              <label
                htmlFor="contact-form-7-first-name"
                className="contact-form7-text1 thq-body-small"
              >
                First name
              </label>
              <input
                type="text"
                id="contact-form-7-first-name"
                required="true"
                placeholder="First Name"
                className="contact-form7-text-input thq-input"
              />
            </div>
            <div className="contact-form7-input1">
              <label
                htmlFor="contact-form-7-last-name"
                className="contact-form7-text2 thq-body-small"
              >
                Last name
              </label>
              <input
                type="text"
                id="contact-form-7-last-name"
                required="true"
                placeholder="Last Name"
                className="contact-form7-text-input1 thq-input"
              />
            </div>
          </div>
          <div className="contact-form7-container1">
            <div className="contact-form7-input2">
              <label
                htmlFor="contact-form-7-email"
                className="contact-form7-text3 thq-body-small"
              >
                Email
              </label>
              <input
                type="email"
                id="contact-form-7-email"
                required="true"
                placeholder="Email"
                className="contact-form7-text-input2 thq-input"
              />
            </div>
            <div className="contact-form7-input3">
              <label
                htmlFor="contact-form-7-phone"
                className="contact-form7-text4 thq-body-small"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="contact-form-7-phone"
                required="true"
                placeholder="Phone Number"
                className="contact-form7-text-input3 thq-input"
              />
            </div>
          </div>
          <div className="contact-form7-container2">
            <div className="contact-form7-input4">
              <label
                htmlFor="contact-form-7-options"
                className="contact-form7-text5 thq-body-small"
              >
                Order Delivery Date
              </label>
              <input
                type="date"
                id="contact-form-7-email"
                required="true"
                placeholder="Email"
                className="contact-form7-text-input4 thq-input"
              />
            </div>
          </div>
          <div className="contact-form7-container3">
            <div className="contact-form7-input5">
              <label
                htmlFor="contact-form-7-message"
                className="contact-form7-text6 thq-body-small"
              >
                Details About Your Order
              </label>
              <textarea
                id="contact-form-7-message"
                rows="3"
                placeholder="Enter your message"
                className="contact-form7-textarea thq-input"
              ></textarea>
            </div>
          </div>
          <div className="contact-form7-checkbox"></div>
          <a
            href="mailto:bitterrootbbq@protonmail.com?subject=Order Request"
            className="contact-form7-button thq-button-filled"
          >
            <span className="contact-form7-action1 thq-body-small">
              {props.action}
            </span>
          </a>
        </form>
      </div>
    </div>
  )
}

ContactForm7.defaultProps = {
  content2: 'Estamos aquí para responder cualquier pregunta que puedas tener.',
  email: 'Tu correo electrónico',
  address: 'Nuestra dirección: 123 Calle Principal, Ciudad, País',
  action: 'Enviar mensaje',
  content1:
    '¡Gracias por visitar nuestro sitio web! ¿Cómo podemos ayudarte hoy?',
  heading1: 'Contáctanos',
  phone: 'Tu número de teléfono',
}

ContactForm7.propTypes = {
  content2: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.string,
  action: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  phone: PropTypes.string,
}

export default ContactForm7
