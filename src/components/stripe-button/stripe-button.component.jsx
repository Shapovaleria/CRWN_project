import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripeInCents = price * 100; //цена в центах
  const publishableKey = 'pk_test_51KMDtWDCm56Le2N9mrRL2Sc9SuYjcMECfyOJJCljVdvPwDUofkShBQGIZYYV23TY3YgfZ5iPKLMBxgDx0Io7YDif00NOVqAstT';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripeInCents}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;