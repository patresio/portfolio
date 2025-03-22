import { FaWhatsapp } from 'react-icons/fa'

const menu = [
	{
		nome: 'Home',
		href: '/',
		novaAba: false,
		icone: null,
	},
	{
		nome: 'Projetos',
		href: '/projetos/1',
		novaAba: false,
		icone: null,
	},
	{
		nome: 'Sobre',
		href: '/sobre',
		novaAba: true,
		icone: null,
	},
	{
		nome: 'Contato',
		href: 'https://api.whatsapp.com/send/?phone=5517988147723&text&type=phone_number&app_absent=0',
		novaAba: true,
		icone: <FaWhatsapp />,
	},
]
export default menu
