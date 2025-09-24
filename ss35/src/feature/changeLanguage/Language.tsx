import type { RootState } from "../../store/store"
import { useDispatch, useSelector } from "react-redux"
import { setLanguage } from "./languageSlice"
import { translations } from "./translations"
import "../../App.css"

export default function Language() {
    const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage)
    const dispatch = useDispatch()
    
    const handleLanguageChange = (lang: 'en' | 'vi') => {
        dispatch(setLanguage(lang))
    }
    
    return (
        <div className="language-container">
            <div className="language-dropdown">
                <div className="dropdown-header">
                    {translations[currentLanguage].language}
                </div>
                <div className="dropdown-content">
                    <div 
                        className={`dropdown-item ${currentLanguage === 'vi' ? 'active' : ''}`}
                        onClick={() => handleLanguageChange('vi')}
                    >
                        <span>{translations[currentLanguage].vietnamese}</span>
                        {currentLanguage === 'vi' && <span className="checkmark">✓</span>}
                    </div>
                    <div 
                        className={`dropdown-item ${currentLanguage === 'en' ? 'active' : ''}`}
                        onClick={() => handleLanguageChange('en')}
                    >
                        <span>{translations[currentLanguage].english}</span>
                        {currentLanguage === 'en' && <span className="checkmark">✓</span>}
                    </div>
                </div>
            </div>
            
            <div className="academy-name">
                {translations[currentLanguage].academyName}
            </div>
        </div>
    )
}
