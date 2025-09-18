import React, { useEffect, useState } from 'react'
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Modal } from 'antd';
import MDEditor from '@uiw/react-md-editor';
import axios from 'axios';
import './PostList.css';
interface Post {
    id: number;
    title: string;
    img: string;
    date: string;
    status: string;
}


const items: MenuProps['items'] = [
    {
        label: (
            <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
                1st menu item
            </a>
        ),
        key: '0',
    },
    {
        label: (
            <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
                2nd menu item
            </a>
        ),
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: '3rd menu item',
        key: '3',
    },
];

function PostList() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingPost, setEditingPost] = useState<Post | null>(null);
    const [postTitle, setPostTitle] = useState('');
    const [postImage, setPostImage] = useState('');
    const [value, setValue] = React.useState<string | undefined>('');

    useEffect(() => {
        handelgetAllPost()
    }, [])
    useEffect(() => {
        if (searchQuery.trim() === '') {
            setFilteredPosts(posts);
        } else {
            const filtered = posts.filter(post =>
                post.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredPosts(filtered);
        }
    }, [posts, searchQuery])

    const handelgetAllPost = () => {
        axios.get('http://localhost:8080/possts')
            .then(res => {
                setPosts(res.data);
                setFilteredPosts(res.data);
            })
            .catch(err => console.log(err))
    }

    const handelSearchPost = (query: string) => {
        setSearchQuery(query);
        if (query.trim() === '') {
            setFilteredPosts(posts);
        } else {
            const filtered = posts.filter(post =>
                post.title.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredPosts(filtered);
        }
    }

    console.log(posts)

    const handelAddPost = (title: string, image: string) => {
        const newPost: Post = {
            id: posts.length + 1,
            title: title,
            img: image,
            date: new Date().toLocaleDateString(),
            status: 'active'
        }
        axios.post('http://localhost:8080/possts', newPost)
            .then(() => {
                handelgetAllPost();
                // Reset form
                setPostTitle('');
                setPostImage('');
                setValue('');
                setIsModalOpen(false);
            })
            .catch(err => console.log(err));
    };
    const handelBlockPost = (id: number, currentStatus: string) => {
        const newStatus = currentStatus === 'active' ? 'block' : 'active';
        axios.patch(`http://localhost:8080/possts/${id}`, { status: newStatus })
            .then(() => {
                handelgetAllPost();
            })
            .catch(err => console.log('Error blocking/unblocking post:', err));
    }

    const handelEditPost = (post: Post) => {
        setEditingPost(post);
        setPostTitle(post.title);
        setPostImage(post.img);
        setValue('');
        setIsEditModalOpen(true);
    }

    const handelUpdatePost = () => {
        if (!editingPost || !postTitle.trim() || !postImage.trim()) {
            return;
        }

        const updatedPost = {
            ...editingPost,
            title: postTitle,
            img: postImage,
        };

        axios.put(`http://localhost:8080/possts/${editingPost.id}`, updatedPost)
            .then(() => {
                handelgetAllPost();
                handelCancelEdit();
            })
            .catch(err => console.log('Error updating post:', err));
    }

    const handelCancelEdit = () => {
        setIsEditModalOpen(false);
        setEditingPost(null);
        setPostTitle('');
        setPostImage('');
        setValue('');
    }

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        if (postTitle.trim() && postImage.trim()) {
            handelAddPost(postTitle, postImage);
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setPostTitle('');
        setPostImage('');
        setValue('');
    };
    return (
        <div className="container">
            <div className="main-content">
                

                <div className="search-section">
                    <div className="search-bar">
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                            <input
                                type="text"
                                placeholder="Nhập từ khóa tìm kiếm..."
                                className="search-input"
                                value={searchQuery}
                                onChange={(e) => handelSearchPost(e.target.value)}
                            />
                            <Dropdown menu={{ items }} trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()} className="filter-button">
                                    <Space>
                                        Lọc bài viết
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                        <button
                            onClick={showModal}
                            className="add-button"
                        >
                            Thêm mới bài viết
                        </button>
                    </div>
                </div>
                <div className="table-container">
                    <table className="table">
                        <thead className="table-header">
                            <tr>
                                <th>STT</th>
                                <th>Tiêu đề</th>
                                <th>Hình ảnh</th>
                                <th>Ngày viết</th>
                                <th>Trạng thái</th>
                                <th>Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPosts.map((post, index) => (
                                <tr key={post.id} className="table-row">
                                    <td className="table-cell">{index + 1}</td>
                                    <td className="table-cell">
                                        <div className="post-title">{post.title}</div>
                                    </td>
                                    <td className="table-cell">
                                        <img
                                            src={post.img}
                                            className="post-image"
                                            alt="Post thumbnail"
                                        />
                                    </td>
                                    <td className="table-cell">{post.date}</td>
                                    <td className="table-cell">
                                        <span className={`status-badge ${post.status === 'active' ? 'status-active' : 'status-blocked'}`}>
                                            {post.status === 'active' ? 'Đã xuất bản' : 'Chặn'}
                                        </span>
                                    </td>
                                    <td className="table-cell">
                                        <button
                                            onClick={() => {
                                                handelBlockPost(post.id, post.status)
                                            }}
                                            className={`action-button ${post.status === 'active' ? 'button-block' : 'button-unblock'}`}
                                        >
                                            {post.status === 'active' ? 'Chặn' : 'Bỏ chặn'}
                                        </button>
                                        <button
                                            onClick={() => handelEditPost(post)}
                                            className="action-button button-edit"
                                        >
                                            Sửa
                                        </button>
                                        <button className="action-button button-delete">
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <Modal
                    title={<span style={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>Thêm mới bài viết</span>}
                    closable={{ 'aria-label': 'Custom Close Button' }}
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    style={{ top: '80px' }}
                    okText="Lưu bài viết"
                    cancelText="Hủy"
                    okButtonProps={{
                        style: { backgroundColor: '#007bff', borderColor: '#007bff' }
                    }}
                >
                    <div className="modal-content">
                        <div className="form-group">
                            <label htmlFor="post-title" className="form-label">
                                Tiêu đề
                            </label>
                            <input
                                type="text"
                                id="post-title"
                                className="form-input"
                                placeholder="Nhập tiêu đề bài viết..."
                                value={postTitle}
                                onChange={(e) => setPostTitle(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="post-image" className="form-label">
                                Hình ảnh
                            </label>
                            <input
                                type="text"
                                id="post-image"
                                className="form-input"
                                placeholder="Nhập URL hình ảnh..."
                                value={postImage}
                                onChange={(e) => setPostImage(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">
                                Nội dung
                            </label>
                            <div className="editor-container">
                                <MDEditor height={200} value={value} onChange={setValue} />
                            </div>
                        </div>
                    </div>
                </Modal>

                <Modal
                    title={<span style={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>Chỉnh sửa bài viết</span>}
                    closable={{ 'aria-label': 'Custom Close Button' }}
                    open={isEditModalOpen}
                    onOk={handelUpdatePost}
                    onCancel={handelCancelEdit}
                    style={{ top: '80px' }}
                    okText="Cập nhật bài viết"
                    cancelText="Hủy"
                    okButtonProps={{
                        style: { backgroundColor: '#007bff', borderColor: '#007bff' }
                    }}
                >
                    <div className="modal-content">
                        <div className="form-group">
                            <label htmlFor="edit-post-title" className="form-label">
                                Tiêu đề
                            </label>
                            <input
                                type="text"
                                id="edit-post-title"
                                className="form-input"
                                placeholder="Nhập tiêu đề bài viết..."
                                value={postTitle}
                                onChange={(e) => setPostTitle(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="edit-post-image" className="form-label">
                                Hình ảnh
                            </label>
                            <input
                                type="text"
                                id="edit-post-image"
                                className="form-input"
                                placeholder="Nhập URL hình ảnh..."
                                value={postImage}
                                onChange={(e) => setPostImage(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">
                                Nội dung
                            </label>
                            <div className="editor-container">
                                <MDEditor height={200} value={value} onChange={setValue} />
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default PostList
