import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import { Col, Container, Form, Row } from "react-bootstrap"


const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}

const PaymentForm = () => {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post("http://localhost:5005/api/payment/checkout", {
                    amount: 99000,
                    id
                })

                if (response.data.success) {
                    console.log("Successful payment")
                    setSuccess(true)
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }

    return (
        <>
            <Container>
                <Row>
                    <Col className='mb-3' md={{ span: 6, offset: 3 }}>
                        {!success ?
                            <Form onSubmit={handleSubmit}>
                                <fieldset className="FormGroup">
                                    <div className="FormRow">
                                        <CardElement options={CARD_OPTIONS} />
                                    </div>
                                </fieldset>
                                <button>Pay</button>
                            </Form>
                            :
                            <div>
                                <h5>You just bought an amazing experience!</h5>
                            </div>
                        }
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default PaymentForm

//     < Container >
//                 <h1>{name}</h1>
//                 <hr />
// {
//     showExperience ? (
//         <CheckoutForm />
//     ) : (
//         <Row>
//             <Col className='mb-3' md={{ span: 4, offset: 1 }}>
//                 <h3>{experienceDetails.place}</h3>
//                 <p>{descriptionExp}</p>
//                 <p>${price} USD</p>
//                 <Button className='mb-3' onClick={() => setShowExperience(true)}>Buy experience</Button>
//                 <Link to="/experiences">
//                     <Button variant="dark">Back to experiences</Button>
//                 </Link>
//                 <Link to='/{:_id}/delete'>
//                     <Button variant="dark">Delete</Button>
//                 </Link>
//             </Col>
//             <Col className='mb-3' md={{ span: 6 }}>
//                 <img style={{ width: '100%' }} src={imageExp} alt={name} />
//             </Col>

//         </Row>
//     )
// }
//             </Container >