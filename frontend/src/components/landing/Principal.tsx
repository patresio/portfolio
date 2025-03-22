import constants from '@/data/constants/constants'
import { Tecnologia } from '@core'
import Cabecalho from '../shared/Cabecalho'
import Tecnologias from '../tecnologias/Tecnologias'

export interface PrincipalProps {
	tecnologias: Tecnologia[]
}

const Principal = (props: PrincipalProps) => {
	const { nome, cargo } = constants
	return (
		<div
			className={`
				flex flex-col h-[32rem]
				bg-[url("/principal.jpg")] bg-cover bg-center
				justify-center items-center
		`}
		>
			<Cabecalho />
			<div className="flex-1 flex flex-col justify-center items-center gap-5 w-full">
				<div className="flex flex-col gap-1 items-center">
					<h1 className="flex gap-3 items-center">
						<span className="w-2 h-2 sm:w-4 sm:h-4 bg-red-500 inline-block rounded-full" />
						<span className="text-3xl sm:text-5xl font-bold text-center">
							{nome}
						</span>
						<span className="w-2 h-2 sm:w-4 sm:h-4 bg-red-500 inline-block rounded-full" />
					</h1>
					<h2 className="text-zinc-500 text-center">{cargo}</h2>
				</div>
				<Tecnologias lista={props.tecnologias} />
			</div>
		</div>
	)
}

export default Principal
