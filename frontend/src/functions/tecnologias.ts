import { Tecnologia } from '@core'
import { httpGet } from './api'

const obterTecnologias = async () => {
	const tecnologias: Tecnologia[] = await httpGet('/tecnologias')
	return {
		todas: tecnologias,
		get destaque() {
			return tecnologias.filter((t) => t.destaque)
		},
	}
}

export default obterTecnologias
