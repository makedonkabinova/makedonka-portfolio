import './index.scss'
import { useRef } from 'react'
import * as emailjs from '@emailjs/browser'
const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm
      (
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  return(
    <div className='container contact-page'>
      <div className='text-zone'>
        <h1>Makedonka Binova</h1>
        <p>
          I am interested in freelance opportunities - especially on ambitious
          or large projects. However, if you have any other requests or
          questions, don't hesitate to contact me using below form either.
        </p>
      </div>
      <div className='contact-form'>
        <form ref={form} onSubmit={sendEmail}>
          <ul>
            <li className="half">
              <input
                placeholder="Name"
                type="text"
                name="name"
                required
              />
            </li>
            <li className="half">
              <input
                placeholder="Email"
                type="email"
                name="email"
                required
              />
            </li>
            <li>
              <input
                placeholder="Subject"
                type="text"
                name="subject"
                required
              />
            </li>
            <li>
              <textarea
                placeholder="Message"
                name="message"
                required
              />
            </li>
            <li>
              <input type="submit" className="flat-button" value="SEND" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  )
}

export default Contact