import React, { useState, useEffect, useCallback } from 'react';
import { Button, Modal, Space, Table } from 'antd';
import type { TableProps } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const Body: React.FC = () => {
    interface DataType {
        key: number;
        name: string;
    }

    const getBooksFromStorage = useCallback((): DataType[] => {
        const data = localStorage.getItem('books');
        return data ? JSON.parse(data) : [
            { key: 1, name: 'John Brown' },
            { key: 2, name: 'Jim Green' },
            { key: 3, name: 'Joe Black' }
        ];
    }, []);
    
    function saveBooksToStorage(books: DataType[]) {
        localStorage.setItem('books', JSON.stringify(books));
    }
    const handleAdd = (newBook: DataType) => {
        const newData = [...data, newBook];
        setData(newData);
        saveBooksToStorage(newData);
    }
    const handleDelete = (key: number) => {
        const newData = data.filter(item => item.key !== key);
        setData(newData);
        saveBooksToStorage(newData);
        setIsModalOpenDel(false);
    }
    const handleEdit = (editedBook: DataType) => {
        const newData = data.map(item => item.key === editedBook.key ? { ...item, name: editedBook.name } : item);
        setData(newData);
        saveBooksToStorage(newData);
    }
    const [formData, setFormData] = useState<{ key: number; name: string }>({ key: 0, name: '' });
    const [editFormData, setEditFormData] = useState<{ name: string }>({ name: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setEditFormData({ name: value });
    }
    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'Key',
            dataIndex: 'key',
            key: 'key',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <p>{text}</p>,
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <button className='border border-solid rounded-full w-8 h-8 hover:bg-sky-200' onClick={() => showModalEdit(record.key)}><EditOutlined /></button>
                    <button className='border border-solid rounded-full w-8 h-8 text-red-400 hover:bg-red-100' onClick={() => showModalDel(record.key)}><DeleteOutlined /></button>
                </Space>
            ),
        },
    ];
    const [data, setData] = useState<DataType[]>(getBooksFromStorage());
    useEffect(() => {
        const savedData = getBooksFromStorage();
        setData(savedData);
    }, [getBooksFromStorage]);

    const [isModalOpenDel, setIsModalOpenDel] = useState(false);
    const [bookKey, setBookKey] = useState<number>(0);
    const showModalDel = (key: number) => {
        setIsModalOpenDel(true);
        setBookKey(key);
    };

    const handleOk = (key: number) => {
        handleDelete(key);
        setIsModalOpenDel(false);
    };

    const handleCancel = () => {
        setIsModalOpenDel(false);
    };
    const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
    const showModalEdit = (key: number) => {
        const currentItem = data.find(item => item.key === key);
        if (currentItem) {
            setEditFormData({ name: currentItem.name });
        }
        setIsModalOpenEdit(true);
        setBookKey(key);
    };
    const handleOkEdit = (key: number) => {
        handleEdit({ key: key, name: editFormData.name });
        setIsModalOpenEdit(false);
    }
    const handleCancelEdit = () => {
        setIsModalOpenEdit(false);
    };
    return (
        <>
            <div className='flex justify-center-safe pt-5'>
                <input 
                    className='w-[50%] border border-solid rounded-md' 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder='Nhập tiêu đề sách ' 
                    value={formData.name}
                    onChange={handleChange} 
                />
                <Button className='bg-blue-500 text-white rounded-md px-4 py-2' onClick={() => {
                    const newKey = data.length > 0 ? Math.max(...data.map(item => item.key)) + 1 : 1;
                    handleAdd({ key: newKey, name: formData.name });
                    setFormData({ key: 0, name: '' });
                }}>+ Thêm sách</Button>
            </div>
            <Table<DataType> columns={columns} dataSource={data} />
            <Modal
                title="Bạn có chắc chắn muốn xoá không"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpenDel}
                onOk={() => handleOk(bookKey)}
                onCancel={handleCancel}
            >
            </Modal>
            <Modal
                title="Bạn có muốn sửa không "
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpenEdit}
                onOk={() => handleOkEdit(bookKey)}
                onCancel={handleCancelEdit}
            >
                <input
                    className='border border-solid rounded-md w-full'
                    type="text"
                    placeholder="Nhập tên mới"
                    value={editFormData.name}
                    onChange={handleEditChange}
                />
            </Modal>
        </>
    );
};

export default Body
