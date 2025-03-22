import BotaoChat from '@/components/chat/BotaoChat'

const Layout = (props: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-col min-h-screen">
			{props.children}
			<BotaoChat />
		</div>
	)
}

export default Layout
