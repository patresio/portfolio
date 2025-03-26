import Curriculo from '@/components/curriculo'
import Principal from '@/components/landing/Principal'
import Projetos from '@/components/projetos/Projetos'
import Container from '@/components/shared/Container'
import { obterProjetos } from '@/functions/projetos'
import obterTecnologias from '@/functions/tecnologias'

export default async function Home() {
	const tecnologias = await obterTecnologias()
	const projetos = await obterProjetos()

	return (
		<div>
			<Principal tecnologias={tecnologias.destaque} />
			<Container className="sm:py-16 py-8 flex flex-col gap-10 items-center">
				<Projetos titulo="Destaques" lista={projetos.destaques} />
				<Projetos titulo="Web" lista={projetos.web} />
				<Projetos titulo="Mobile" lista={projetos.mobile} />
				<Projetos titulo="Jogos" lista={projetos.jogos} />
				<Curriculo tecnologias={tecnologias.todas} />
			</Container>
		</div>
	)
}
