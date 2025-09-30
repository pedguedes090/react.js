import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store/slice';
import { addProduct, getAllProducts, deleteProduct } from '../store/slice/productSlice';
import axios from 'axios';

function ProductManager() {
    const dispatch = useDispatch<AppDispatch>();
    const { products, error } = useSelector((state: RootState) => state.products)
    const [formData, setFormData] = React.useState({
        name: '',
        price: '',
        description: '',
    });
    const [selectedFiles, setSelectedFiles] = React.useState<FileList | null>(null);
    const [isUploading, setIsUploading] = React.useState(false);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [errors, setErrors] = React.useState({
        name: '',
        price: '',
        image: ''
    });
    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch]);

    const selectedImage = selectedFiles && selectedFiles.length > 0 ? selectedFiles[0] : null;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFiles(e.target.files);
        }
    }

    const uploadImage = async (image: File): Promise<string | null> => {
        setIsUploading(true);
        try {
            const formData = new FormData();
            formData.append('file', image);
            formData.append('upload_preset', import.meta.env.VITE_PROJECT_NAME);
            formData.append('cloud_name', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

            const res = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, formData);
            return res.data.secure_url;

        } catch (error) {
            console.error('Error uploading image:', error);
            setErrors(prev => ({
                ...prev,
                image: 'Lỗi khi upload ảnh. Vui lòng thử lại!'
            }));
            return null;
        }
        finally {
            setIsUploading(false);
        }
    }

    const validateForm = () => {
        const newErrors = {
            name: '',
            price: '',
            image: ''
        };

        if (!formData.name.trim()) {
            newErrors.name = 'Tên sản phẩm là bắt buộc.';
        }
        if (!formData.price.trim()) {
            newErrors.price = 'Giá sản phẩm là bắt buộc.';
        }
        if (!selectedFiles) {
            newErrors.image = 'Hình ảnh sản phẩm là bắt buộc.';
        }
        setErrors(newErrors);
        return !newErrors.name && !newErrors.price && !newErrors.image;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsSubmitting(true);
        try {
            const imageUrls = await uploadImage(selectedFiles![0]);
            if (!imageUrls) {
                setIsSubmitting(false);
                return;
            }
            const newProduct = {
                name: formData.name.trim(),
                price: parseFloat(formData.price),
                description: formData.description.trim(),
                imageUrl: imageUrls
            };

            dispatch(addProduct(newProduct));
            dispatch(getAllProducts());
            setFormData({
                name: '',
                price: '',
                description: '',
            });
            setSelectedFiles(null);
            setErrors({
                name: '',
                price: '',
                image: ''
            });
            const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
            if (fileInput)
                fileInput.value = '';
            alert('Thêm sản phẩm thành công!');
        } catch (error) {
            console.error('Error uploading image:', error);
        } finally {
            setIsSubmitting(false);
        }
    }
    const handleDeleteProduct = (productId: number) => {
        if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
            dispatch(deleteProduct(productId));
        }
    }

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    }
    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h2 style={{ marginBottom: '30px', color: '#333' }}>Quản lý sản phẩm</h2>
            {error && (
                <div style={{
                    backgroundColor: '#f8d7da',
                    color: '#721c24',
                    padding: '10px',
                    borderRadius: '4px',
                    marginBottom: '20px',
                    border: '1px solid #f5c6cb'
                }}>
                    Lỗi từ server: {error}
                </div>
            )}
            <form onSubmit={handleSubmit} style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '30px',
                backgroundColor: '#f9f9f9'
            }}>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '5px',
                        fontWeight: 'bold',
                        color: '#333'
                    }}>
                        * Tên sản phẩm
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Nhập tên sản phẩm"
                        disabled={isSubmitting}
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: errors.name ? '1px solid #dc3545' : '1px solid #ccc',
                            borderRadius: '4px',
                            fontSize: '14px',
                            boxSizing: 'border-box'
                        }}
                    />
                    {errors.name && (
                        <div style={{
                            color: '#dc3545',
                            fontSize: '12px',
                            marginTop: '5px'
                        }}>
                            {errors.name}
                        </div>
                    )}
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '5px',
                        fontWeight: 'bold',
                        color: '#333'
                    }}>
                        * Giá
                    </label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder="Nhập giá sản phẩm"
                        min="0"
                        step="1000"
                        disabled={isSubmitting}
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: errors.price ? '1px solid #dc3545' : '1px solid #ccc',
                            borderRadius: '4px',
                            fontSize: '14px',
                            boxSizing: 'border-box'
                        }}
                    />
                    {errors.price && (
                        <div style={{
                            color: '#dc3545',
                            fontSize: '12px',
                            marginTop: '5px'
                        }}>
                            {errors.price}
                        </div>
                    )}
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '5px',
                        fontWeight: 'bold',
                        color: '#333'
                    }}>
                        Mô tả
                    </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Nhập mô tả sản phẩm"
                        rows={4}
                        disabled={isSubmitting}
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            fontSize: '14px',
                            resize: 'vertical',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '5px',
                        fontWeight: 'bold',
                        color: '#333'
                    }}>
                        * Ảnh sản phẩm
                    </label>

                    <div style={{
                        border: errors.image ? '2px dashed #dc3545' : '2px dashed #ccc',
                        borderRadius: '8px',
                        padding: '20px',
                        textAlign: 'center',
                        backgroundColor: 'white'
                    }}>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            disabled={isSubmitting}
                            style={{ marginBottom: '10px' }}
                        />
                        <br />
                        <span style={{ color: '#666', fontSize: '14px' }}>
                            {selectedImage
                                ? `Đã chọn: ${selectedImage.name}`
                                : 'Upload ảnh sản phẩm'
                            }
                        </span>

                        {selectedImage && (
                            <div style={{ marginTop: '15px' }}>
                                <img
                                    src={URL.createObjectURL(selectedImage)}
                                    alt="Preview"
                                    style={{
                                        width: '150px',
                                        height: '150px',
                                        objectFit: 'cover',
                                        border: '1px solid #ddd',
                                        borderRadius: '4px'
                                    }}
                                />
                            </div>
                        )}
                    </div>
                    {errors.image && (
                        <div style={{
                            color: '#dc3545',
                            fontSize: '12px',
                            marginTop: '5px'
                        }}>
                            {errors.image}
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting || isUploading}
                    style={{
                        backgroundColor: isSubmitting ? '#6c757d' : '#007bff',
                        color: 'white',
                        border: 'none',
                        padding: '12px 24px',
                        borderRadius: '4px',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        fontSize: '14px',
                        fontWeight: 'bold'
                    }}
                >
                    {isSubmitting ? 'Đang thêm...' : isUploading ? 'Đang upload...' : 'Thêm sản phẩm'}
                </button>
            </form>

            <div>
                <h3>Danh sách sản phẩm</h3>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '20px'
                }}>
                    {products.map((product: any) => (
                        <div key={product.id} style={{
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            padding: '15px',
                            backgroundColor: 'white',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}>
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x150?text=No+Image';
                                }}
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover',
                                    borderRadius: '4px',
                                    marginBottom: '10px'
                                }}
                            />

                            <h4 style={{ margin: '0 0 5px 0', color: '#333' }}>
                                {product.name}
                            </h4>

                            <div style={{
                                fontSize: '16px',
                                fontWeight: 'bold',
                                color: '#e74c3c',
                                marginBottom: '10px'
                            }}>
                                {formatPrice(product.price)}
                            </div>

                            {product.description && (
                                <p style={{
                                    margin: '0 0 15px 0',
                                    color: '#666',
                                    fontSize: '14px',
                                    lineHeight: '1.4'
                                }}>
                                    {product.description}
                                </p>
                            )}

                            <button
                                onClick={() => handleDeleteProduct(product.id)}
                                style={{
                                    backgroundColor: '#dc3545',
                                    color: 'white',
                                    border: 'none',
                                    padding: '8px 16px',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '12px',
                                    width: '100%'
                                }}
                            >
                                Xóa
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductManager