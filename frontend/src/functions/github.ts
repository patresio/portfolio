export const obterREADME = async (repoURL: string) => {
	const repositorio = repoURL.split('github.com/')[1]
	const readmeURL = `https://raw.githubusercontent.com/${repositorio}/main/README.md`
	const resposta = await fetch(readmeURL)
	return resposta.text()
}
