import {useContext} from 'react'
import LanguageContext from '../Context/languageContext';
import internationalText from '../i18n/translations.json'

const useLanguage = () => {
   const {selectedLanguage} = useContext(LanguageContext)
   return {
      text: internationalText[selectedLanguage.i18n],
      i18n: selectedLanguage.i18n
   }
}

export default useLanguage

