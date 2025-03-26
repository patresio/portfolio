import type { Tecnologia } from '@core'
import Experiencia from './Experiencia'
import MiniCurriculo from './MiniCurriculo'
import TecnologiaTrabalhadas from './TecnologiasTrabalhadas'

export interface CurriculoProps {
	tecnologias: Tecnologia[]
}

const Curriculo = (props: CurriculoProps) => {
	return (
		<div className="flex gap-4 flex-col lg:flex-row min-h-72 w-full">
			<MiniCurriculo />
			<Experiencia />
			<TecnologiaTrabalhadas tecnologias={props.tecnologias} />
		</div>
	)
}

export default Curriculo
