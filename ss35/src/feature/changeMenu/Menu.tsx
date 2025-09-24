import type { RootState } from "../../stores"
import { useDispatch, useSelector } from "react-redux"
import { toggleMenu, setActiveItem } from "./menuSlice"
import { 
  DashboardOutlined, 
  UserOutlined, 
  DollarOutlined, 
  LineChartOutlined, 
  FileTextOutlined, 
  MenuFoldOutlined 
} from "@ant-design/icons"
import { translations } from "../changeLanguage/translations"
import "../../App.css"

export default function Menu() {
    const isCollapsed = useSelector((state: RootState) => state.menu.isCollapsed)
    const activeItem = useSelector((state: RootState) => state.menu.activeItem)
    const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage)
    const dispatch = useDispatch()
    
    const menuItems = [
        { key: 'dashboard', icon: DashboardOutlined, labelKey: 'dashboard' as const },
        { key: 'account', icon: UserOutlined, labelKey: 'account' as const },
        { key: 'assets', icon: DollarOutlined, labelKey: 'assets' as const },
        { key: 'statistics', icon: LineChartOutlined, labelKey: 'statistics' as const },
        { key: 'documents', icon: FileTextOutlined, labelKey: 'documents' as const }
    ]
    
    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : 'expanded'}`}>
            <div className="menu-items">
                {menuItems.map((item) => {
                    const IconComponent = item.icon
                    return (
                        <div 
                            key={item.key}
                            className={`menu-item ${activeItem === item.key ? 'active' : ''}`}
                            onClick={() => dispatch(setActiveItem(item.key))}
                        >
                            <IconComponent className="menu-icon" />
                            {!isCollapsed && <span className="menu-label">{translations[currentLanguage][item.labelKey]}</span>}
                        </div>
                    )
                })}
            </div>
            
            <div className="menu-toggle" onClick={() => dispatch(toggleMenu())}>
                <MenuFoldOutlined className="toggle-icon" />
            </div>
        </div>
    )
}
