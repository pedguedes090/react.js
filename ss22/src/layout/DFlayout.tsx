import { Button, Input, Modal, Space, Table } from 'antd'
import type { TableProps } from 'antd'
import Header from '../components/Header'
import AddMem from './../components/addMem'
import { useReducer, useState } from 'react'

export default function DFlayout() {
  const initial = { name: '', phone: '' }
  const reducer = (state: typeof initial, action: any) => {
    switch (action.type) {
      case 'name':
        return { ...state, name: action.payload }
      case 'phone':
        return { ...state, phone: action.payload }
      default:
        throw new Error()
    }
  }

  interface DataType {
    key: string
    name: string
    age: number
    address: string
    tags: string[]
  }

  const [data, setData] = useState<DataType[]>([
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ])
  const [state, dispatch] = useReducer(reducer, initial)
  const [error, setError] = useState({ name: false, phone: false })
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { placeholder, value } = e.target
    if (placeholder === "Ten thanh vien") {
      dispatch({ type: 'name', payload: value })
      setError(prev => ({ ...prev, name: false }))
    } else if (placeholder === "So dien thoai") {
      dispatch({ type: 'phone', payload: value })
      setError(prev => ({ ...prev, phone: false }))
    }
  }

  const handleAdd = () => {
    let hasError = false
    if (!state.name.trim()) {
      setError(prev => ({ ...prev, name: true }))
      hasError = true
    }
    if (!state.phone?.trim()) {
      setError(prev => ({ ...prev, phone: true }))
      hasError = true
    }
    if (!hasError) {
      setData(prev => [
        ...prev,
        {
          key: (prev.length + 1).toString(),
          name: state.name,
          age: 0,
          address: state.phone,
          tags: [],
        },
      ])
      setIsModalOpen(true)
      dispatch({ type: 'name', payload: '' })
      dispatch({ type: 'phone', payload: '' })
    }
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  // Hàm xóa thành viên
  const handleDelete = (key: string) => {
    setData(prev => prev.filter(item => item.key !== key))
  }

  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a style={{ color: 'red', cursor: 'pointer' }} onClick={() => handleDelete(record.key)}>
            Delete
          </a>
        </Space>
      ),
    },
  ]

  return (
    <div className='bg-slate-100 h-screen pt-10 '>
      <div className='w-[80%]  bg-blue-500 p-5 text-center justify-center m-auto text-white rounded-2xl '>
        <Header />
      </div>
      <div className='w-[80%]  bg-white p-5  justify-center m-auto mt-5 rounded-2xl shadow-lg'>
        <AddMem />
        <div className='flex gap-5 mt-5'>
          <Input
            status={error.name ? "error" : undefined}
            onChange={handleChange}
            placeholder="Ten thanh vien"
            style={{ width: '17%' }}
            value={state.name}
          />
          <Input
            status={error.phone ? "error" : undefined}
            onChange={handleChange}
            placeholder="So dien thoai"
            style={{ width: '17%' }}
            value={state.phone}
          />
          <Button type='primary' onClick={handleAdd}>Thêm</Button>
          <Modal
            onCancel={handleCancel}
            open={isModalOpen}
            title="Basic Modal"
            footer={null}
          >
            <p>Thêm thành viên thành công!</p>
          </Modal>
        </div>
      </div>
      <div className='w-[80%]  bg-white p-5  justify-center m-auto mt-5 rounded-2xl shadow-lg'>
        <Table<DataType> columns={columns} dataSource={data} />
      </div>
    </div>
  )
}