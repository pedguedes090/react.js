import { useAppDispatch, useAppSelector } from '../../hook/useHook'
import { toggleDarkLight } from './DarkLightSlice'

function ChangeDarkLight() {
  const dispatch = useAppDispatch();
  const currentMode = useAppSelector((state: any) => state.darkLight.value);

  const handleToggle = () => {
    dispatch(toggleDarkLight());
  };

  return (
    <div style={{
      backgroundColor: currentMode === 'light' ? '#ffffff' : '#333333',
      color: currentMode === 'light' ? '#000000' : '#ffffff',
    }}>
      <button onClick={handleToggle}>
        Switch to {currentMode === 'light' ? 'dark' : 'light'} mode
      </button>
    </div>
  )
}

export default ChangeDarkLight
