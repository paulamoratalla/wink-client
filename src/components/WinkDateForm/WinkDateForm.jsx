import { useState } from "react";
import { Form, Button } from 'react-bootstrap'
import uploadService from "../../services/upload.service";

const WinkdateForm = ({ fireFinalActions }) => {

    const [winkdateData, setWinkdateData] = useState({
        experience: '',
        date: '',
        lover: '',
        creator: '',
    })

    const handleSubmit = e => {
        e.preventDefault()

            .winkdateDefault()
            .saveWinkdate(winkdateData)
            .then(response => {
                fireFinalActions()
            })
            .catch(err => console.log(err))
    }

    const { experience, date, lover, creator } = winkdateData

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="experience">
                <Form.Label>Experience</Form.Label>
                <Form.Control type="text" value={name} onChange={handleInputChange} name="experience" />
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
        </Form >
    )
}

export default WinkdateForm


