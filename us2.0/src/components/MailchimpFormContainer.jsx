import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import CustomForm from './CustomForm'

const postUrl =
  'https://usbandofficial.us11.list-manage.com/subscribe/post?u=cf617eaf727fe7f2d29e3042b&amp;id=ed0b5f2f1d&amp;f_id=00e812e1f0'
const MailchimpFormContainer = (props) => {
  return (
    <div>
      <MailchimpSubscribe
        url={postUrl}
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

export default MailchimpFormContainer
