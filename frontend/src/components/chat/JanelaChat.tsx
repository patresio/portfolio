'use client'
import useChat from '@/hooks/useChat'
import { IconMessages, IconReload, IconSend } from '@tabler/icons-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import BalaoMensagem from './BalaoMensagem'

const JanelaChat = () => {
	const { mensagens, limparMensagens, adicionarMensagem, pensando } =
		useChat()
	const [texto, setTexto] = useState('')
	const fimChatRef = useRef<HTMLDivElement>(null)

	const enviarMensagem = () => {
		adicionarMensagem(texto)
		setTexto('')
	}

	useEffect(() => {
		fimChatRef.current?.scrollIntoView({ behavior: 'smooth' })
	}, [mensagens])

	return (
		<div className="flex flex-col bg-zinc-300/90 rounded-2xl text-black overflow-hidden">
			<div className="flex justify-between items-center p-4 bg-white">
				<h2 className="text-xl font-bold">Olá, visitante!</h2>
				<IconReload
					size={24}
					className="cursor-pointer text-black"
					onClick={limparMensagens}
				/>
			</div>
			{mensagens.length === 0 ? (
				<div className="flex flex-col items-center justify-center min-h-[400px] sm:min-h-[500px]">
					<IconMessages
						size={230}
						stroke={0.2}
						className="text-black/30"
					/>
					<span>Vamos conversar?</span>
				</div>
			) : (
				<div className="flex flex-col p-2 gap-2 min-h-[400px] sm:min-h-[500px] max-h-[400px] sm:max-h-[500px] overflow-y-scroll">
					{mensagens.map((mensagem, i) => {
						const mesmoAutor =
							i > 0 && mensagens[i - 1].autor === mensagem.autor
						return (
							<BalaoMensagem
								key={mensagem.id}
								mensagem={mensagem}
								omitirAutor={mesmoAutor}
							/>
						)
					})}
					{pensando && (
						<Image
							src="/pensando.gif"
							alt="Pensando"
							width={50}
							height={50}
							unoptimized
						/>
					)}
					<div ref={fimChatRef}></div>
				</div>
			)}
			<div className="h-px bg-zinc-400 mt-4"></div>
			<div className="flex items-center gap-2 p-1 rounded-full h-10 bg-white m-4">
				<input
					value={texto}
					type="text"
					onChange={(e) => {
						setTexto(e.target.value)
					}}
					onKeyDown={(e: any) => {
						if (e.key === 'Enter') {
							enviarMensagem()
						}
					}}
					className="flex-1 bg-transparent h-8 outline-none pl-3"
				/>
				<button
					onClick={enviarMensagem}
					className="bg-red-500 flex justify-center items-center min-h-8 min-w-8 rounded-full"
				>
					<IconSend size={18} className="text-white" />
				</button>
			</div>
		</div>
	)
}

export default JanelaChat
