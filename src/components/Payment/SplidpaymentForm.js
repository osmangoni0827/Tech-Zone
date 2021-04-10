import React, { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";


const useOptions = () => {
 
  const options = useMemo(
    () => ({
      style: {
        base: {
        //   color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
          }
        },
        invalid: {
        //   color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};

const SplidpaymentForm = (profs) => {
     const{HandlePaymentAndOrder}=profs.HandlePayment;
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [errorPayment,setErrorPayment]=useState(null);
  const [successPayment,setSuccessPayment]=useState(null);
  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    if(payload.error?.message){
      setErrorPayment(payload.error?.message)
      setSuccessPayment(null)
    }
    else if(payload.paymentMethod?.id){
      setSuccessPayment(payload.paymentMethod.id)
      setErrorPayment(null);
      HandlePaymentAndOrder(payload.paymentMethod.id);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card number
        <CardNumberElement
          options={options}
          onReady={() => {
            // console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            // console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            // console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            // console.log("CardNumberElement [focus]");
          }}
        />
      </label><br></br>
      <label>
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label><br></br>
      <label>
        CVC
        <CardCvcElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label><br></br>
      <input type="submit" value='Pay' disabled={!stripe}>
      </input>
      {
        errorPayment&&<p style={{color:'red'}}>{errorPayment}</p>
      }
       {
        successPayment&&<p style={{color:'green'}}>Your Payment is Successfully Done</p>
      }
    </form>
    
  );
};

export default SplidpaymentForm;
