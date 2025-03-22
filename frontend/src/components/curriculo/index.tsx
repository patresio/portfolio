import type { Tecnologia } from '@core'
import TecnologiaTrabalhadas from './TecnologiasTrabalhadas'

export interface CurriculoProps {
	tecnologias: Tecnologia[]
}

const Curriculo = (props: CurriculoProps) => {
	return (
		<div>
			<TecnologiaTrabalhadas tecnologias={props.tecnologias} />
		</div>
	)
}

export default Curriculo
