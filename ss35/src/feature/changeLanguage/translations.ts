export const translations = {
  en: {
    dashboard: 'Dashboard',
    account: 'Account',
    assets: 'Assets',
    statistics: 'Statistics',
    documents: 'Documents',
    
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    switchToLight: 'Switch to Light',
    switchToDark: 'Switch to Dark',
    
    listMode: 'List Mode',
    gridMode: 'Grid Mode',
    
    count: 'Count',
    increment: 'Increment',
    decrement: 'Decrement',
    
    listNumber: 'List number',
    randomNumber: 'Random number',
    
    language: 'Language',
    english: 'English',
    vietnamese: 'Vietnamese',
    
    academyName: 'Rikkei Academy'
  },
  vi: {
    dashboard: 'Bảng điều khiển',
    account: 'Tài khoản',
    assets: 'Tài sản',
    statistics: 'Thống kê',
    documents: 'Tài liệu',
    
    lightMode: 'Chế độ sáng',
    darkMode: 'Chế độ tối',
    switchToLight: 'Chuyển sang sáng',
    switchToDark: 'Chuyển sang tối',
    
    listMode: 'Chế độ danh sách',
    gridMode: 'Chế độ lưới',
    
    count: 'Số đếm',
    increment: 'Tăng',
    decrement: 'Giảm',
    
    listNumber: 'Danh sách số',
    randomNumber: 'Số ngẫu nhiên',
    
    language: 'Ngôn ngữ',
    english: 'Tiếng Anh',
    vietnamese: 'Tiếng Việt',
    
    academyName: 'Học viện Rikkei'
  }
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.en

