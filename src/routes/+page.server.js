import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '$env/static/private'

export async function load() {
    const stripe = new Stripe(STRIPE_SECRET_KEY);
    const products = await stripe.products.list({
        limit: 25,
    });

    return {
        products
    };
}