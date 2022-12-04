class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }
  purchaseBike(units) {
    this.value = this.paymentProcessor.pay(units * 23.0);
  }
}

class StripeProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }
  pay(value) {
    return this.stripe.makePayment(value);
  }
}

class PayUProcessor {
  constructor(user) {
    this.payu = new PayU(user);
  }
  pay(value) {
    return this.payu.makePayment(value);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }
  makePayment(value) {
    return `${this.user} has payed ${value}`;
  }
}

class PayU {
  constructor(user) {
    this.user = user;
  }
  makePayment(value) {
    return `${this.user} has payed ${value}`;
  }
}

const myStore = new Store(new StripeProcessor("mario"));

myStore.paymentProcessor = new PayUProcessor("cano");

myStore.purchaseBike(1);
console.log(myStore.value);
