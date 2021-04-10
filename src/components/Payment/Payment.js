import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import SplidpaymentForm from './SplidpaymentForm';
const Payment = (HandlePaymentAndOrder) => {
   
    const stripePromise = loadStripe(

        'pk_test_51IeMHCDxOVqYVf88Vca9XqWPlZtT7mHNsNvR5w46YemHApUUgOqLSNitfzyRQYSm3IBwUcMtDCsIWEzT4S6XclbD00FewspEPl'
    );
    return (
        <div>
            <Elements stripe={stripePromise}>
              <SplidpaymentForm HandlePayment={HandlePaymentAndOrder}></SplidpaymentForm>
            </Elements>
        </div>
    );
};

export default Payment;