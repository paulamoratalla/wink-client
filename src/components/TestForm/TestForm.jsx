import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import testService from "../../services/test.service"

const TestForm = ({ fireFinalActions }) => {

    const [testData, setTestData] = useState({})

    const handleInputChange = e => {
        const { name, value } = e.currentTarget

        setTestData({
            ...testData,
            [name]: value
        })
    }

    const handleSubmit = e => {

        e.preventDefault()

        testService
            .saveTest(testData)
            .then(response => {
                fireFinalActions()
            })
            .catch(err => console.log(err))
    }


    return (
        <Form onSubmit={handleSubmit}>
            <h3>What would be your perfect date?</h3>
            <Form.Group className="mb-3">
                <Form.Check
                    type="checkbox"
                    label="A romantic dinner in a fabulous restaurant"
                    value={answer11}
                    onChange={handleInputChange}
                    name="answer11"
                />
                <Form.Check
                    type="checkbox"
                    label="Enjoying a hike in nature"
                    value={answer12}
                    onChange={handleInputChange}
                    name="answer12"
                />
                <Form.Check
                    type="checkbox"
                    label="Dancing in a concert"
                    value={answer13}
                    onChange={handleInputChange}
                    name="answer13"
                />
            </Form.Group>

            <h3>What do you value the most in a partner?</h3>
            <Form.Group className="mb-3">
                <Form.Check
                    type="checkbox"
                    label="Intelligence"
                    value={answer21}
                    onChange={handleInputChange}
                    name="answer21"
                />
                <Form.Check
                    type="checkbox"
                    label="Goodness"
                    value={answer22}
                    onChange={handleInputChange}
                    name="answer22"
                />
                <Form.Check
                    type="checkbox"
                    label="Energy and vitality"
                    value={answer23}
                    onChange={handleInputChange}
                    name="answer23"
                />
            </Form.Group>

            <h3>What is the worst for you in a relationship?</h3>
            <Form.Group className="mb-3">
                <Form.Check
                    type="checkbox"
                    label="Monotony"
                    value={answer31}
                    onChange={handleInputChange}
                    name="answer31"
                />
                <Form.Check
                    type="checkbox"
                    label="Lack of affection"
                    value={answer32}
                    onChange={handleInputChange}
                    name="answer32"
                />
                <Form.Check
                    type="checkbox"
                    label="Lack of commitment"
                    value={answer33}
                    onChange={handleInputChange}
                    name="answer33"
                />
            </Form.Group>

            <h3>What are you looking for?</h3>
            <Form.Group className="mb-3">
                <Form.Check
                    type="checkbox"
                    label="Romance"
                    value={answer41}
                    onChange={handleInputChange}
                    name="answer41"
                />
                <Form.Check
                    type="checkbox"
                    label="Fun"
                    value={answer42}
                    onChange={handleInputChange}
                    name="answer42"
                />
                <Form.Check
                    type="checkbox"
                    label="Stability"
                    value={answer43}
                    onChange={handleInputChange}
                    name="answer43"
                />
            </Form.Group>

            <h3>What would be the perfect gift?</h3>
            <Form.Group className="mb-3">
                <Form.Check
                    type="checkbox"
                    label="A trip"
                    value={answer51}
                    onChange={handleInputChange}
                    name="answer51"
                />
                <Form.Check
                    type="checkbox"
                    label="A luxury item"
                    value={answer52}
                    onChange={handleInputChange}
                    name="answer52"
                />
                <Form.Check
                    type="checkbox"
                    label="An adventure pack: diving course, skydiving"
                    value={answer53}
                    onChange={handleInputChange}
                    name="answer53"
                />
            </Form.Group>
            <Button type="submit">Next question</Button>
        </Form>


    )
}

export default TestForm
