import type { Tecnologia } from '@core'
import Image from 'next/image'

export interface TecnologiaProps {
	lista: Tecnologia[]
}

const Tecnologias = (props: TecnologiaProps) => {
	return props.lista ? (
		<div className="flex justify-center gap-4 flex-wrap w-4/5">
			{props.lista.map((tecnologia) => (
				<div
					key={tecnologia.id}
					className="flex flex-col items-center gap-1"
				>
					<span className="relative w-11 h-11 sm:w-16 sm:h-16 rounded-xl overflow-hidden">
						<Image
							src={tecnologia.imagem}
							alt={tecnologia.nome}
							fill
							className="object-contain"
						/>
					</span>
					<span className="text-sm text-zinc-400">
						{tecnologia.nome}
					</span>
				</div>
			))}
		</div>
	) : null
}

export default Tecnologias
