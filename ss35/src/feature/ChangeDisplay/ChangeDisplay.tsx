import { useAppDispatch, useAppSelector } from '../../hook/useHook'
import { ChangeDisplay as changeDisplayAction } from '../ChangeDisplay/ChangeDisplaySlice';
function ChangeDisplay() {
  const dispatch = useAppDispatch();
  const display = useAppSelector((state) => state.changeDisplay);
    console.log(display);
  const handleChangeDisplay = () => {
    dispatch(changeDisplayAction());
  };

  return (
    <>
    <button onClick={handleChangeDisplay}>Toggle Display</button>
      <div style={{
        display: 'flex',
        flexDirection: display.value === 'list' ? 'column' : 'row',
        gap: '10px'
      }}>
        <div style={{height: '100px', width: '100px', backgroundColor: 'red'}}>1</div>
        <div style={{height: '100px', width: '100px', backgroundColor: 'red'}}>1</div>
        <div style={{height: '100px', width: '100px', backgroundColor: 'red'}}>1</div>
        <div style={{height: '100px', width: '100px', backgroundColor: 'red'}}>1</div>
      </div>
    </>
  )
}

export default ChangeDisplay
