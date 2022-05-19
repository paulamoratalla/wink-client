import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import uploadService from '../../services/upload.service'
import { useParams } from 'react-router-dom'
import usersService from '../../services/users.service'



const GalleryProfileForm = ({ closeModal, refreshDetails }) => {


    const [galleryProfile, setGalleryProfile] = useState({
        gallery: []
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
            .uploadImages(formData)
            .then(({ data }) => {
                setLoadingImage(false)
                setGalleryProfile({ ...galleryProfile, gallery: data.cloudinary_urls })
            })


    }

    function saveImages() {

        usersService
            .uploadImages(_id, galleryProfile)
            .then(() => {

            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="gallery">
                    <Form.Label>Photo gallery</Form.Label>
                    <Form.Control type="file" onChange={uploadGalleryProfile} multiple />
                </Form.Group>

                <Button onClick={saveImages} variant="dark" disabled={loadingImage}>Save images</Button>
            </Form>


        </>

    )
}

export default GalleryProfileForm