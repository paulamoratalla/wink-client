import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import winkdateService from "../../services/winkdate.service"


const NewWinkdateForm = ({ fireFinalActions }) => {

    const [winkdateData, setWinkdateData] = useState({
        experience: '',
        date: '',
        matches: '',
        creator: '',
    })


    const { experience, date, matches, creator } = winkdateData

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.currentTarget

        setWinkdateData({
            ...winkdateData,
            [name]: value
        })
    }

    const handleSubmit = e => {

        e.preventDefault()

        winkdateService
            .createOneWinkdate(winkdateData)
            .then(() => {
                navigate('/')
                fireFinalActions()
            })
            .catch(err => console.log(err))
    }

    return (

        <Form onSubmit={handleSubmit}>
            {/* <Form.Group className="mb-3" controlId="experience">
                <Form.Label>My experiences</Form.Label>
                <Form.Control type="checkbox" as="select" multiple value={experience} onChange={handleCheckedChange} name="experience">
                    {{ #eachexperience }}
                    <option value='{{experience.id}}'>{{ experience.name }}</option>
                    {{/ each}}
                </Form.Control>
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="date">
                <Form.Label>date</Form.Label>
                <Form.Control type="datetime-local" value={date} onChange={handleInputChange} name="date" />
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
                <Form.Control type="file" onChange={handleImageUpload} />
            </Form.Group>
            <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Uploading image...' : 'Create new Experience'}</Button>
        </Form >
    )
}

export default NewWinkdateForm