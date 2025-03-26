import type { Projeto } from '@core'
import Image from 'next/image'
import Link from 'next/link'

export interface ItemProjetoProps {
	projeto: Projeto
}

const ItemProjeto = (props: ItemProjetoProps) => {
	return (
		<Link href={`/projetos/${props.projeto.id}`}>
			<div className="min-w-64 min-h-64 relative rounded-2xl overflow-hidden border-zinc-800 border">
				<Image
					src={props.projeto.imagens[0]}
					alt={props.projeto.nome}
					fill
					className="object-cover"
				/>
			</div>
		</Link>
	)
}

export default ItemProjeto
