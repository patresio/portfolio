'use server'
import type Mensagem from '@/model/Mensagem'

const conversar = async (
	chatId: string,
	mensagem: Mensagem
): Promise<string | null> => {
	const webhookUrl = process.env.CHAT_N8N_WEBHOOK_URL

	if (!webhookUrl) return null

	const resposta = await fetch(webhookUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ chatId, mensagem: mensagem.texto }),
	})

	const msg = await resposta.json()
	return msg.resposta
}

export default conversar
