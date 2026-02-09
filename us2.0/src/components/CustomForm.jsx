import React, { useState, useEffect } from 'react'
import '../css/FormStyle.css'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('')
  const [isDone, setIsDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email && email.indexOf('@') > -1) {
      onValidated({ EMAIL: email })
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  useEffect(() => {
    if (status === 'success') {
      clearFields()
    }
  }, [status])

  const clearFields = () => {
    setEmail('')
  }

  const handleDoneClick = () => {
    setIsDone(true)
    clearFields()
  }

  if (isDone) {
    return <div></div>
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{status === 'success' ? 'Success!' : 'NEWSLETTER'}</h2>

      {status === 'sending' && <div>Sending...</div>}
      {status === 'error' && (
        <div
          style={{ color: 'white' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div dangerouslySetInnerHTML={{ __html: message }} />
      )}
      {status !== 'success' && (
        <div>
          <input
            value={email}
            onChange={handleEmailChange}
            placeholder='your@email.com'
          />
        </div>
      )}
      <div className='buttonContainer'>
        <button
          type={status === 'success' ? 'button' : 'submit'}
          onClick={status === 'success' ? handleDoneClick : handleSubmit}
        >
          {status === 'success' ? 'Done' : 'Subscribe'}
        </button>
      </div>
    </form>
  )
}

const MailchimpForm = (props) => {
  const url = `https://usbandofficial.us11.list-manage.com/subscribe/post?u=cf617eaf727fe7f2d29e3042b&amp;id=ed0b5f2f1d&amp;f_id=00e812e1f0`

  return (
    <div className='mc__form-container'>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  )
}

export default MailchimpForm
