import React from 'react'
import {createContext} from 'react'
import {languages} from '../i18n/languages';

const LanguageContext = createContext({
    selectedLanguage: languages[0],
    setSelectedLanguage: (language) => {
        console.warn(`No LanguageProvider found, de default implementation, which doesn't do anything, is used.`)
    }
})

export default LanguageContext;