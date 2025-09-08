import { Button, Card } from "antd";

export default function ProductItem(props: { product: { id: number; name: string } }) {
  const { id, name } = props.product
  return (
    <Card
      hoverable
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <div className='border p-4'>
        <h1 className='text-lg font-bold'>{name}</h1>
        <p className='text-gray-600'>ID: {id}</p>
        <Button>Add to Cart</Button>
      </div>
    </Card>
  )
}
