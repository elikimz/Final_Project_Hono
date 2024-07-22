import { Context } from "hono";
import { insertPayments, deletePayments, getAllPayments, getOnePayments, updatePayments } from "./Payments .services";
import Stripe from "stripe";
import { ClientURL } from "../Payments/sripe"; // Ensure this path is correct

const stripe = new Stripe('sk_test_51PfIZ9DBJdkd6Rdp0IzGYIwqpMc6gHYvzHNPj0Bc9GorPjislH360KSA0tGYThIkCbSinj3xYnSv5JTAAljgDBL1006Wvqo9tW', { apiVersion: '2024-06-20' }); // Replace with your Stripe secret key

export const getAllPaymentsData = async (c: Context) => {
    try {
        const data = await getAllPayments();
        return c.json(data, 200);
    } catch (err: unknown) {
        if (err instanceof Error) {
            return c.json({ "message": err.message }, 500); // Ensure err.message is a string
        } else {
            return c.json({ "message": "An unknown error occurred" }, 500);
        }
    }
};

export const getOnePaymentsData = async (c: Context) => {
    const id = c.req.param("id");
    try {
        const data = await getOnePayments(Number(id));
        return c.json(data, 200);
    } catch (err: unknown) {
        if (err instanceof Error) {
            return c.json({ "message": err.message }, 500);
        } else {
            return c.json({ "message": "An unknown error occurred" }, 500);
        }
    }
};

export const deletePaymentsData = async (c: Context) => {
    const id = c.req.param("id");
    try {
        const data = await deletePayments(Number(id));
        return c.json({ message: data }, 200);
    } catch (err: unknown) {
        if (err instanceof Error) {
            return c.json({ "message": err.message }, 500);
        } else {
            return c.json({ "message": "An unknown error occurred" }, 500);
        }
    }
};

export const insertPaymentsData = async (c: Context) => {
    try {
        const data = await c.req.json();
        const result = await insertPayments(data);
        return c.json({ message: result }, 200);
    } catch (err: unknown) {
        if (err instanceof Error) {
            return c.json({ "message": err.message }, 400);
        } else {
            return c.json({ "message": "An unknown error occurred" }, 400);
        }
    }
};

export const updatePaymentsData = async (c: Context) => {
    const id = c.req.param("id");
    try {
        const data = await c.req.json();
        const result = await updatePayments(Number(id), data);
        return c.json({ message: result }, 200);
    } catch (err: unknown) {
        if (err instanceof Error) {
            return c.json({ "message": err.message }, 400);
        } else {
            return c.json({ "message": "An unknown error occurred" }, 400);
        }
    }
};

export const createCheckoutSessionController = async (c: Context) => {
    let booking;
    try {
        booking = await c.req.json();
        console.log('Received booking:', booking);
    } catch (error: any) {
        return c.json({ message: "Booking not found" }, 404);
    }

    try {
        if (!booking.booking_id) return c.json({ message: "Booking ID is Required" }, 400);

        const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [{
            price_data: {
                currency: 'usd',
                product_data: {
                    name: 'Car Rental',
                },
                unit_amount: Math.round(booking.total_amount * 100),
            },
            quantity: 1,
        }];

        const sessionParams: Stripe.Checkout.SessionCreateParams = {
            payment_method_types: ['card'],
            line_items,
            mode: 'payment',
            success_url: `${ClientURL}/SuccessPage`,
            cancel_url: `${ClientURL}/payment-canceled`,
        };

        const session: Stripe.Checkout.Session = await stripe.checkout.sessions.create(sessionParams);
        console.log(`Checkout session URL: ${session.url}`);

        const paymentDetails = {
            booking_id: booking.booking_id,
            amount: booking.total_amount.toString(),
            user_id: booking.user_id,
            payment_date: new Date().toISOString(),
            payment_method: 'card',
            transaction_id: session.id,
        };

        console.log('Saving payment details:', paymentDetails);
        const createPayment = await insertPayments(paymentDetails);
        return c.json({ sessionId: session.id, url: session.url, payment: createPayment }, 200);
    } catch (error: any) {
        return c.json({ message: error.message }, 400);
    }
};
