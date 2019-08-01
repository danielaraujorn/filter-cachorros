import { ptBr } from './ptBr'

const DEFAULTLANGUAGE = ptBr

const languages = {
	'pt-BR': ptBr,
	PTBR: ptBr
}

export const getLanguage = selector => {
	return (
		languages[selector] ||
		languages[navigator.language || navigator.userLanguage] ||
		DEFAULTLANGUAGE
	)
}

export const languageEnum = Object.keys(languages)
