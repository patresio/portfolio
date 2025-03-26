'use client'

import ConteudoMD from '@/components/shared/ConteudoMD'
import useChat from '@/hooks/useChat'
import Image from 'next/image'
import { useState } from 'react'

const Chat = () => {
	const { chatId, mensagens, adicionarMensagem, limparMensagens, pensando } =
		useChat()
	const [texto, setTexto] = useState('')

	return (
		<div>
			<h1>Chat</h1>
			<h2>Chat {chatId}</h2>
			<button onClick={limparMensagens}>Limpar</button>
			<ul>
				{mensagens.map((mensagem) => (
					<li key={mensagem.id} className="flex flex-col gap-2">
						<div>{mensagem.autor}</div>
						<ConteudoMD markdown={mensagem.texto} />
					</li>
				))}
			</ul>

			{pensando && (
				<div>
					<Image
						src="/pensando.gif"
						alt="Pensando"
						width={50}
						height={50}
					/>
				</div>
			)}

			<input
				value={texto}
				type="text"
				onChange={(e) => {
					setTexto(e.target.value)
				}}
				onKeyDown={(e: any) => {
					if (e.key === 'Enter') {
						adicionarMensagem(texto)
						setTexto('')
					}
				}}
				className="border-2 border-zinc-700 rounded-md p-2"
			/>
		</div>
	)
}

export default Chat
