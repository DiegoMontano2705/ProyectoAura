import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";

export default function PaymentForm(props) {
  const { amount, onSuccess } = props;
  return (
    <PayPalButton
      amount={amount}
      onSuccess={(details, data) => onSuccess(details, data)}
      options={{
        clientId: "ATVHYxYNmPyfwLUDXJ74B463_JtzpV9lUvM25TL0NblpwVwk3pNGqc4NHdba6-rN7PAipy_WFPoxEN_R",
        currency: "MXN"
      }}
    />
  );
};
