import React, { FormEvent, useContext, useState } from 'react'
import { ModalMask, ModalContent, Form } from './style'
// import { ButtonCustom } from '../../styles/commonStyles'
import { ThemeContext } from 'styled-components'
import { database } from '../../services/firebase'
import { toast } from 'react-toastify'

interface IModal {
  setIsOpen: (value: boolean) => void
}

export const ModalFeedback: React.FC<IModal> = ({ setIsOpen }) => {
  const theme = useContext(ThemeContext)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  async function handleSendFeedback(e: FormEvent) {
    e.preventDefault()

    await database.ref(`/feedbacks/${name}`).set({ message }, error => {
      if (error) {
        console.log(error)
        toast.error('Ops, algo deu errado :(')
      }
      toast.success('Obrigado pela ajuda!')
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
        <h1>Me fale o que achou do meu site!</h1>
        <span>
          Me fale em poucas palavras o que você mais gostou ou o que posso
          melhorar no meu site!{' '}
        </span>
        <Form onSubmit={handleSendFeedback}>
          <div className="input-block">
            <label>Nome</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              required
              placeholder="Nome"
            />
          </div>
          <div className="input-block">
            <label>Mensagem</label>
            <input
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
              placeholder="Mensagem"
            />
          </div>
          <button type="submit">Enviar</button>
          <button
            // backgroundColor={theme.colors.red}
            onClick={() => setIsOpen(false)}
            style={{ marginTop: '10px' }}
          >
            Cancelar
          </button>
        </Form>
      </ModalContent>
    </ModalMask>
  )
}
