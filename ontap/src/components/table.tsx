import React, { useState } from 'react';
import { Button, Modal, Space, Table, Form, Input, InputNumber, Checkbox } from 'antd';
import type { TableProps } from 'antd';

const MyTable: React.FC = () => {
  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
    completed?: boolean;
  }

  const [data, setData] = useState<DataType[]>([
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
      completed: false,
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
      completed: false,
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
      completed: false,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [form] = Form.useForm();

  const handleDelete = (key: string) => {
    setData(data.filter(item => item.key !== key));
  };

  const handleToggleCompleted = (key: string) => {
    setData(data.map(item => 
      item.key === key ? { ...item, completed: !item.completed } : item
    ));
  };

  const handleAdd = (values: any) => {
    const newPerson = {
      key: Date.now().toString(),
      name: values.name,
      age: values.age,
      address: values.address,
      tags: values.tags ? values.tags.split(',').map((tag: string) => tag.trim()) : [],
      completed: false,
    };
    setData([...data, newPerson]);
    setIsAddModalOpen(false);
    form.resetFields();
  };

  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <a style={{ 
          textDecoration: record.completed ? 'line-through' : 'none',
          color: record.completed ? '#999' : 'inherit'
        }}>
          {text}
        </a>
      ),
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
      title: 'Completed',
      key: 'completed',
      render: (_, record) => (
        <Checkbox 
          checked={record.completed}
          onChange={() => handleToggleCompleted(record.key)}
        />
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <Button danger onClick={() => handleDelete(record.key)}>
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={() => setIsAddModalOpen(true)}>
          Thêm người
        </Button>
      </div>
      <Table<DataType> columns={columns} dataSource={data} />
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      
      <Modal
        title="Thêm người mới"
        open={isAddModalOpen}
        onOk={() => form.submit()}
        onCancel={() => {
          setIsAddModalOpen(false);
          form.resetFields();
        }}
        okText="Thêm"
        cancelText="Hủy"
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleAdd}
        >
          <Form.Item
            label="Tên"
            name="name"
            rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
          >
            <Input placeholder="Nhập tên" />
          </Form.Item>
          <Form.Item
            label="Tuổi"
            name="age"
            rules={[{ required: true, message: 'Vui lòng nhập tuổi!' }]}
          >
            <InputNumber min={1} max={100} placeholder="Nhập tuổi" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            label="Địa chỉ"
            name="address"
            rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
          >
            <Input placeholder="Nhập địa chỉ" />
          </Form.Item>
          <Form.Item
            label="Tags (cách nhau bằng dấu phẩy)"
            name="tags"
          >
            <Input placeholder="Ví dụ: nice, developer, cool" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default MyTable;