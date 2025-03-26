import type { Projeto } from '@core'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../ui/carousel'
import ItemProjeto from './ItemProjeto'

export interface ProjetoProps {
	titulo: string
	lista: Projeto[]
}

const Projetos = (props: ProjetoProps) => {
	return (
		<div className="flex flex-col items-center sm:items-start w-7/10 md:w-11/12 xl:w-full gap-5">
			<h3 className="text-2xl font-bold text-white/70">{props.titulo}</h3>
			<Carousel opts={{ align: 'center', loop: true }} className="w-full">
				<CarouselContent className="flex">
					{props.lista.map((projeto) => (
						<CarouselItem
							key={projeto.id}
							className="xl:basis-1/4 lg:basis-1/3 md:basis-1/2"
						>
							<ItemProjeto projeto={projeto} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	)
}

export default Projetos
