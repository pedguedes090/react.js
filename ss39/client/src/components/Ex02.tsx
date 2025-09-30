import axios from 'axios';
import React from 'react'

function Ex02() {
    const [images, setImages] = React.useState<FileList | null>(null);
    const [fileUrls, setFileUrls] = React.useState<string[]>([]);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setImages(event.target.files);
        }
    }

    const saveImages = async () => {
        if (!images) return;
        try {
            const uploadPromises = Array.from(images).map(async (image: File) => {
                const formData = new FormData();
                formData.append('file', image);
                formData.append('upload_preset', import.meta.env.VITE_PROJECT_NAME);
                formData.append('cloud_name', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);
                const res = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, formData);
                return res.data.secure_url;
            })

            const uploadedUrls = await Promise.all(uploadPromises);
            setFileUrls(uploadedUrls);
        } catch (error) {
            console.error('Error uploading images:', error);
        }
    }
    return (
        <div>
            <input type="file" multiple onChange={handleChange} />
            <button onClick={saveImages}>Upload</button>
            {fileUrls.map((url, index) => (
                <img key={index} src={url} alt={`Uploaded file ${index}`} />
            ))}
        </div>
    )
}

export default Ex02