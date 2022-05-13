import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import uploadService from "../../services/upload.service"
const NewExperienceForm = ({ fireFinalActions }) => {
    const [experienceData, setExperienceData] = useState({
        name: '',
        place: '',
        price: 0,
        imageExp: '',
        descriptionExp: '',
    })
    const [loadingImage, setLoadingImage] = useState(false)
    const handleInputChange = e => {
        const { name, value } = e.currentTarget
        setExperienceData({
            ...experienceData,
            [name]: value
        })
    }
    const handleImageUpload = e => {
        setLoadingImage(true)
        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])
        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setExperienceData({ ...experienceData, imageExp: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }
    const handleSubmit = e => {
        e.preventDefault()
            .experienceDefault()
            .saveExperience(experienceData)
            .then(response => {
                fireFinalActions()
            })
            .catch(err => console.log(err))
    }
    const { name, place, price, descriptionExp } = experienceData
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="place">
                <Form.Label>Place</Form.Label>
                <Form.Control type="text" value={place} onChange={handleInputChange} name="place" />
                <Form.Text className="text-muted">Minimum length 50 characters</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" value={price} onChange={handleInputChange} name="price" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="descriptionExp">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" value={descriptionExp} onChange={handleInputChange} name="descriptionExp" />
                <Form.Text className="text-muted">Mínimo 20 caracteres</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="imageExp">
                <Form.Label>Experience Image</Form.Label>
                <Form.Control type="text" onChange={handleImageUpload} />
            </Form.Group>
            <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Uploading image...' : 'Create new Experience'}</Button>
        </Form>
    )
}
export default NewExperienceForm