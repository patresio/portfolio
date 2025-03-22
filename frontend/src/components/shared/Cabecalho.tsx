import Image from 'next/image'
import Link from 'next/link'
import Container from './Container'
import Menu from './Menu'

const Cabecalho = () => {
	return (
		<header className="flex w-full items-center h-16 bg-black/50">
			<Container className="flex-1 flex items-center justify-center sm:justify-between">
				<div className="flex items-center gap-10">
					<Link href="/" className="hidden sm:block">
						<Image
							src={'/logo.svg'}
							alt="Logo"
							width={80}
							height={0}
						/>
					</Link>
					<Menu />
				</div>
				<div className="hidden sm:flex items-center">
					<Link
						href="https://linkedin.com/in/patresio"
						target="_blank"
						className="text-white bg-red-500 text-sm font-semibold px-6 py-2 rounded-full"
					>
						Perfil
					</Link>
				</div>
			</Container>
		</header>
	)
}

export default Cabecalho
