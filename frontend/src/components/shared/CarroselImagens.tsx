import Image from 'next/image'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../ui/carousel'

export interface CarroselImagensProps {
	imagens: string[]
}

const CarroselImagens = (props: CarroselImagensProps) => {
	const { imagens } = props
	return (
		<Carousel opts={{ loop: true }} className="w-7/10 md:w-11/12 xl:w-full">
			<CarouselContent>
				{imagens.map((imagem) => (
					<CarouselItem key={imagem} className="relative w-full h-96">
						<Image
							src={imagem}
							alt="Imagem"
							fill
							className="object-cover"
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}

export default CarroselImagens
