import conversar from '@/functions/assistente-pessoal'
import type Mensagem from '@/model/Mensagem'
import { Id } from '@core'
import { useState } from 'react'
import useLocalStorage from './useLocalStorage'

const useChat = () => {
	const [chatId] = useLocalStorage<string>('chatId', Id.gerar())
	const [mensagens, setMensagens] = useLocalStorage<Mensagem[]>(
		'mensagens',
		[]
	)
	const [pensando, setPensando] = useState(false)

	const adicionarMensagem = async (texto: string) => {
		try {
			setPensando(true)
			const novaMensagem: Mensagem = {
				id: Id.gerar(),
				texto,
				autor: 'Visitante',
				lado: 'direito',
			}

			setMensagens((msgs) => [...msgs, novaMensagem])

			const resposta = await conversar(chatId, novaMensagem)

			if (!resposta) return

			const mensagemReposta: Mensagem = {
				id: Id.gerar(),
				texto: resposta,
				autor: 'Assistente',
				lado: 'esquerdo',
			}

			setMensagens((msgs) => [...msgs, mensagemReposta])
		} finally {
			setPensando(false)
		}
	}

	const limparMensagens = () => {
		setMensagens([])
	}

	return { chatId, mensagens, adicionarMensagem, limparMensagens, pensando }
}

export default useChat
