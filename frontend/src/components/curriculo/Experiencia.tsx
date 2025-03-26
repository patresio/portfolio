import constants from '@/data/constants/constants'

const Experiencia = () => {
	const { experiencias } = constants

	return (
		<div className="flex flex-col sm:flex-row lg:flex-col items-center p-6 bg-black border-zinc-800 border rounded-2xl justify-around gap-6">
			{experiencias.map((xp, i) => (
				<Item key={i} principal={xp.principal} label={xp.label} />
			))}
		</div>
	)
}

export default Experiencia

function Item(props: { principal: string; label: string }) {
	return (
		<div className="flex flex-col items-center gap-1">
			<span className="text-red-500 text-4xl font-bold">
				{props.principal}
			</span>
			<span className="text-zinc-400 text-sm text-center">
				{props.label}
			</span>
		</div>
	)
}
