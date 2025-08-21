import Bai1 from './components/Bai1'
import Bai2 from './components/Bai2'
import Bai3 from './components/Bai3'
import Parent_Comp from './components/Parent_Comp'
import Parent from './components/Parent'
import DetailPost from './components/DetailPost'
import Bai7 from './components/Bai7'
function App() {
  

  return (
    <>
      <Bai1 />
      <Bai2 />
      <Bai3 />
      <Parent_Comp />
      <Parent />
      <DetailPost id={1} name="A" content="TA" author="A" />
      <Bai7 />
    </>
  )
}

export default App
