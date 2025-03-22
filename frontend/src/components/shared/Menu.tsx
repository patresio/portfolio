'use client'
import menu from '@/data/constants/menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Menu = () => {
	const caminho = usePathname()

	const menus = menu

	return (
		<nav className="flex items-center gap-6">
			{menus.map((menu, i) => (
				<MenuItem
					key={i}
					href={menu.href}
					novaAba={menu.novaAba}
					selecionado={() => caminho === menu.href}
				>
					{menu.nome} {menu.icone}
				</MenuItem>
			))}
		</nav>
	)
}

const MenuItem = (props: {
	href: string
	children: React.ReactNode
	selecionado: () => boolean
	novaAba?: boolean
}) => {
	return (
		<Link href={props.href} target={props.novaAba ? '_blank' : '_self'}>
			<span
				className={`flex items-center gap-2 border-red-600 text-sm ${
					props.selecionado()
						? 'text-white border-b-4'
						: 'text-zinc-300 hover:text-red-300'
				}`}
			>
				{props.children}
			</span>
		</Link>
	)
}

export default Menu
