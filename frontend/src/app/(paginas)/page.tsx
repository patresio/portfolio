import Curriculo from '@/components/curriculo'
import Principal from '@/components/landing/Principal'
import Container from '@/components/shared/Container'
import obterTecnologias from '@/functions/tecnologias'

export default async function Home() {
	const tecnologias = await obterTecnologias()

	return (
		<div>
			<Principal tecnologias={tecnologias.destaque} />
			<Container className="sm:py-16 py-8">
				<Curriculo tecnologias={tecnologias.todas} />
			</Container>
		</div>
	)
}
