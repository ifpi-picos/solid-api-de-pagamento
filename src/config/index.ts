import Stripe from "stripe";

export class StripeConfig {
  public stripe;
  constructor() {
    let apiVersion = process.env.STRIPE_API_VERSION as any
    let stripeKey = process.env.STRIPE_KEY
    this.stripe = new Stripe(stripeKey, { apiVersion })
  }
}