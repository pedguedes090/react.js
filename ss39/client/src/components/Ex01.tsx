import axios from 'axios';
import React from 'react'

function Ex01() {
    const [image, setImage] = React.useState<File | null>(null);
    const [fileUrl, setFileUrl] = React.useState<string>('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setImage(event.target.files[0]);
        }
    }
    const saveImage = async () => {
        if (!image) return;
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', import.meta.env.VITE_PROJECT_NAME);
        formData.append('cloud_name', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);
        const res = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, formData);
        setFileUrl(res.data.secure_url);
    }
    return (
        <div>
            <input type="file" onChange={handleChange} />
            <button onClick={saveImage}>Upload</button>
            <img src={fileUrl} alt="" />
        </div>
    )
}

export default Ex01