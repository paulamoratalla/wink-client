import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import uploadService from '../../services/upload.service'
import { useParams } from 'react-router-dom'
import usersService from '../../services/users.service'


const GalleryProfileForm = ({ closeModal, refreshDetails }) => {


    const [galleryProfile, setGalleryProfile] = useState({
        images: []
    })
    const [loadingImage, setLoadingImage] = useState(false)

    const { _id } = useParams()

    const uploadGalleryProfile = e => {

        setLoadingImage(true)

        const formData = new FormData();
        for (let i = 0; i < e.target.files.length; i++) {
            formData.append('photos', e.target.files[i]);
        }

        uploadService
            .uploadImage(formData)
            .then(({ data }) => {
                setLoadingImage(false)
                setGalleryProfile({ ...galleryProfile, images: data.cloudinary_urls })
            })
            .catch(err => console.log(err))

    }

    function handleSubmit(e) {
        e.preventDefault()

        usersService
            .uploadImages(_id, galleryProfile)
            .then(() => {
                closeModal()
                refreshDetails()
            })
    }

    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="gallery">
                <Form.Label>Photo gallery</Form.Label>
                <Form.Control type="file" onChange={uploadGalleryProfile} multiple />
            </Form.Group>

            <div className='modalBtnDiv'>
                <Button variant="dark" type="submit" disabled={loadingImage} className='myBtn'>Upload images</Button>
            </div>

        </Form>
    )
}

export default GalleryProfileForm