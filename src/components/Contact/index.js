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
          I'm enthusiastic about diving into Android and mobile development,
          as well as exploring exciting web platforms. At our faculty,
          we delved into a diverse range of web technologies, which equipped me with a knack for swiftly grasping new concepts.
          I believe this adaptability will be a great asset as I venture into these new realms. Don't hesitate to contact me.
          Looking forward to the opportunities ahead!
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