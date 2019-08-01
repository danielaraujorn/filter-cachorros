import React, { useContext } from 'react'
import { LanguageContext } from 'Context/LanguageContext'

export const withLanguage = PassedComponent => {
	const WithLanguage = props => {
		const language = useContext(LanguageContext)
		return <PassedComponent language={language} {...props} />
	}
	WithLanguage.displayName = `WithLanguage(${PassedComponent.displayName ||
		PassedComponent.name})`
	return WithLanguage
}
