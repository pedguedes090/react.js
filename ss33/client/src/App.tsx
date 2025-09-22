
import './App.css'
import ListProducts from './components/ListProducts'
import YourCart from './components/YourCart'
function App() {
  

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
        <div className="flex-1">
          <ListProducts />
        </div>
        <div className="w-full lg:w-96">
          <YourCart />
        </div>
      </div>
    </div>
  )
}

export default App
