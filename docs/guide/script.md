# Script

This function allows you to add a custom third-party script to the DOM.

## State

The `useScript` function exposes the following reactive state:

```js
import { useScript } from 'vue-use-web';

const { isLoading, error } = useScript({
  src: '{script_url}'
});
```

| State     | Type      | Description                              |
| --------- | --------- | ---------------------------------------- |
| isLoading | `Boolean` | If the script is still downloading.      |
| error     | `Boolean` | If the script didn't download correctly. |

## Methods

`useScript` exposes a `toPromise` method that returns a promise when the script loads successfully.

```js
import { useScript } from 'vue-use-web';

useScript({
  src: '{script_url}'
})
  .toPromise()
  .then(() => {
    // whatever you want after the script loads.
  });
```

## Config

`useScript` function takes an options object, the object must contain a `src` property.

```js
import { useScript } from 'vue-use-web';

const { isLoading, error } = useScript({
  src: 'script_url'
});
```

| Config | Type     | Description               |
| ------ | -------- | ------------------------- |
| src    | `String` | The 3rd party script URL. |

## Example

This example implements a [Stripe elements](https://stripe.com/docs/payments/cards/collecting/web) example.

```vue
<template>
  <form action="/charge" method="post" id="payment-form">
    <div class="form-row">
      <label for="card-element">Credit or debit card</label>
      <div id="card-element">
        <!-- A Stripe Element will be inserted here. -->
      </div>

      <!-- Used to display form errors. -->
      <div id="card-errors" role="alert"></div>
    </div>

    <button>Submit Payment</button>
  </form>
</template>

<script>
import { useScript } from 'vue-use-web';

export default {
  setup() {
    useScript({ src: 'https://js.stripe.com/v3/' })
      .toPromise()
      .then(() => {
        const stripe = window.Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

        const elements = stripe.elements();

        // Custom styling can be passed to options when creating an Element.
        // (Note that this demo uses a wider set of styles than the guide below.)
        const style = {
          base: {
            color: '#32325d',
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
            '::placeholder': {
              color: '#aab7c4'
            }
          },
          invalid: {
            color: '#fa755a',
            iconColor: '#fa755a'
          }
        };

        // Create an instance of the card Element.
        const card = elements.create('card', { style: style });

        // Add an instance of the card Element into the `card-element` <div>.
        card.mount('#card-element');
      });

    return {};
  }
};
</script>
```

<iframe src="https://codesandbox.io/embed/vue-use-web-use-window-size-gz80s?fontsize=14&module=%2Fsrc%2FApp.vue" title="vue-use-web: use script" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
