import type { RequestHandler } from "./$types";
import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '$env/static/private'

const stripe = new Stripe(STRIPE_SECRET_KEY);

export const POST: RequestHandler = async ({request}) => {
    const data = await request.json();
    const items = data.items;

    let lineItems : any = [];
    items.forEach((item: any) => {
        lineItems.push( { price: item.id, quantity: item.quantity } )
    });

    // It gives us a URL for the person to check out with
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel"
    });

    return new Response(
        JSON.stringify({ url: session.url }),
        {
            status: 200,
            headers: { 'content-type': 'application/json'}
        }
    )
}