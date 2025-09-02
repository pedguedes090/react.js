import React, { useContext } from 'react'
import { ThemeProviderContext } from './ThemeContext';

export default function Content() {
    const context = useContext(ThemeProviderContext);
    if(!context){
        return null;
    }
    const {theme} = context
  return (
    <div>
        <p>Đây là phần nội dung chính của ứng dụng</p>
        <p>Theme hiện tại <strong>{theme}</strong></p>
    </div>
  )
}