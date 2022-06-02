import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from '../PaymentForm/PaymentForm'

const PUBLIC_KEY = 'pk_test_51Kyz3BHX6DgoaEYy6rmCy0o35XiNx9FwIL9orp16WJkkaZUr1GJmj4IzJjAdSDhtN94d8pPXomyDArha5bzDv5mi00RzAGlmqv'

const stripePromise = loadStripe(PUBLIC_KEY)


export default function CheckoutForm() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  )
}