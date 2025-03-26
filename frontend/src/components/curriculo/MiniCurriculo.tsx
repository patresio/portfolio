import constants from '@/data/constants/constants'
import Image from 'next/image'

const MiniCurriculo = () => {
	const { nome, cargo, minicv } = constants
	return (
		<div className="flex flex-1 flex-col-reverse md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center xl:items-start bg-black border border-zinc-800 rounded-2xl px-6 pt-6 gap-6">
			<div className="relative min-w-80 h-72 xl:self-end">
				<Image src={'/minha-foto.png'} alt="Foto de perfil" fill />
			</div>
			<div className="flex flex-col gap-5 self-center py-6 items-center md:items-start lg:items-center xl:items-start">
				<div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
					<span className="bg-gradient-to-r from-red-500 via-white to-white text-transparent bg-clip-text text-2xl font-bold">
						{nome}
					</span>
					<span className="text-center md:text-left lg:text-center xl:text-left">
						{cargo}
					</span>
				</div>
				<p className="text-zinc-400 text-sm text-center md:text-left lg:text-center xl:text-left">
					{minicv}
				</p>
			</div>
		</div>
	)
}

export default MiniCurriculo
