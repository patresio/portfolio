import Cabecalho from '@/components/shared/Cabecalho'

const PaginaProjeto = async (props: { params: Promise<{ id: string }> }) => {
	const { id } = await props.params

	return (
		<div className="bg-black">
			<Cabecalho />
			<div>
				<h1>Projeto {id}</h1>
			</div>
		</div>
	)
}

export default PaginaProjeto
