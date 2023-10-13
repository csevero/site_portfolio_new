import React, { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { getLanguage } from '../../helpers/getLanguage'
import { database } from '../../services/firebase'
import { Form, ModalContent, ModalMask } from './style'

interface IModal {
  setIsOpen: (value: boolean) => void
}

export const ModalFeedback: React.FC<IModal> = ({ setIsOpen }) => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const translate = getLanguage()

  async function handleSendFeedback(e: FormEvent) {
    e.preventDefault()

    await database
      .ref(`/feedbacks/${name}`)
      .set({ message, date: new Date().toLocaleString('pt-br') }, error => {
        if (error) {
          console.log(error)
          toast.error(translate.notifications.feedbackError)
        }
        toast.success(translate.notifications.feedbackSuccess)
        setIsOpen(false)
      })
  }

  return (
    <ModalMask
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
    >
      <ModalContent>
        <button onClick={() => setIsOpen(false)} className="close" />
        <h1>{translate.modalFeedback.title}</h1>
        <span>{translate.modalFeedback.description}</span>
        <Form onSubmit={handleSendFeedback}>
          <div className="input-block">
            <label>{translate.modalFeedback.fields.name}</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              required
              placeholder={translate.modalFeedback.fields.placeholderName}
            />
          </div>
          <div className="input-block">
            <label>{translate.modalFeedback.fields.message}</label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
              placeholder={translate.modalFeedback.fields.placeholderMessage}
            />
          </div>
          <button type="submit">
            {translate.modalFeedback.fields.buttonSend}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            style={{ marginTop: '10px', background: 'var(--color-red-1)' }}
          >
            {translate.modalFeedback.fields.buttonCancel}
          </button>
        </Form>
      </ModalContent>
    </ModalMask>
  )
}
