import { useProduct } from '../Context/global'
import ProductItem from './ProductItem'
export default function Product() {
  const products = useProduct()
  if (!products || products.length === 0) return <div>Khong co san pham nao</div>
  return (
    <div className='grid grid-cols-4 gap-4' >
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}
