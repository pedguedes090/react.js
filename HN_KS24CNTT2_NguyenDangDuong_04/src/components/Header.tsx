import React from 'react'
import { BookOutlined } from '@ant-design/icons';
function Header() {
    return (
        <>
            <div className='bg-black text-white p-5'>
                <h1 className='text-6xl flex justify-center m-[2rem]'><BookOutlined />Quản lý sách</h1>
                <p className='flex justify-center'>Quản lý chỉnh sửa và cập nhật danh sách trong hệ thống</p>
            </div>

        </>
    )
}

export default Header
