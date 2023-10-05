import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      refForm.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        alert("Message successfully sent.")
        window.location.reload(false)
      },
      () => {
        alert("Failed to send the message. Please try again.")
      }
    )
  }
  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>Contact me</h1>
          <p>
            Recently, I've been focusing extensively on Android app development,
            honing my skills to deliver user-centric mobile applications.
            Additionally, I possess a solid foundation in web development. What sets me apart is my rapid learning ability,
            allowing me to swiftly adapt to new technologies and environments. This makes me an asset in both Android and web development,
            ensuring I can seamlessly contribute to any project. Don't hesitate to contact me using the form below.
          </p>
        </div>
        <div className='contact-form'>
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className='half'>
                <input
                  type='text'
                  name='name'
                  placeholder='Name'
                  required/>
              </li>
              <li className='half'>
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  required/>
              </li>
              <li className='half'>
                <input
                  type='text'
                  name='subject'
                  placeholder='Subject'
                  required/>
              </li>
              <li className='half'>
                  <textarea
                    name='message'
                    placeholder='Message'
                    required/>
              </li>
              <li>
                <input
                  type='submit'
                  name='submit'
                  value='SEND'
                  required/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact