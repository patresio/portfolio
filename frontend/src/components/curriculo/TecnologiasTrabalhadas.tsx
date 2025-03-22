import type { Tecnologia } from '@core'

export interface TecnologiaTrabalhadasProps {
	tecnologias: Tecnologia[]
}

const TecnologiaTrabalhadas = (props: TecnologiaTrabalhadasProps) => {
	return props.tecnologias ? (
		<div className="flex justify-center items-center p-6 lg:w-72 w-full bg-black rounded-2xl border border-zinc-800">
			<div className="flex justify-center flex-wrap gap-x-3">
				{props.tecnologias.map((tecnologia) => (
					<div key={tecnologia.id}>
						<span className="text-red-500 font-bold">#</span>
						<span>{tecnologia.nome}</span>
					</div>
				))}
			</div>
		</div>
	) : null
}

export default TecnologiaTrabalhadas
