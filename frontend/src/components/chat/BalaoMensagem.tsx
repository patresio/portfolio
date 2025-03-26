import type Mensagem from '@/model/Mensagem'
import Image from 'next/image'
import ConteudoMD from '../shared/ConteudoMD'

export interface BalaoMensagemProps {
	mensagem: Mensagem
	omitirAutor?: boolean
}

const BalaoMensagem = (props: BalaoMensagemProps) => {
	return props.mensagem.lado === 'esquerdo' ? (
		<BalaoEsquerdo {...props} />
	) : (
		<BalaoDireito {...props} />
	)
}

export default BalaoMensagem

const BalaoEsquerdo = (props: BalaoMensagemProps) => {
	return (
		<div className="flex gap-4">
			<Image src="/chat.svg" width={40} height={40} alt="Assistente" />
			<div className="flex flex-col">
				{!props.omitirAutor && (
					<span className="text-xs text-zinc-600">
						{props.mensagem.autor}
					</span>
				)}
				<div className="bg-black text-white px-7 py-4 sm:w-80 rounded-r-3xl rounded-bl-3xl">
					<ConteudoMD markdown={props.mensagem.texto} />
				</div>
			</div>
		</div>
	)
}
const BalaoDireito = (props: BalaoMensagemProps) => {
	return (
		<div className="flex flex-col items-end">
			{!props.omitirAutor && (
				<span className="text-xs text-zinc-600">
					{props.mensagem.autor}
				</span>
			)}
			<div className="bg-red-500 text-white px-7 py-4 sm:w-80 rounded-l-3xl rounded-br-3xl">
				<ConteudoMD markdown={props.mensagem.texto} />
			</div>
		</div>
	)
}
