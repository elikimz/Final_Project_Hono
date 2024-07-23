"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCheckoutSessionController = exports.updatePaymentsData = exports.insertPaymentsData = exports.deletePaymentsData = exports.getOnePaymentsData = exports.getAllPaymentsData = void 0;
const Payments__services_1 = require("./Payments .services");
const stripe_1 = require("stripe");
const sripe_1 = require("../Payments/sripe"); // Ensure this path is correct
const stripe = new stripe_1.default('sk_test_51PfIZ9DBJdkd6Rdp0IzGYIwqpMc6gHYvzHNPj0Bc9GorPjislH360KSA0tGYThIkCbSinj3xYnSv5JTAAljgDBL1006Wvqo9tW', { apiVersion: '2024-06-20' }); // Replace with your Stripe secret key
const getAllPaymentsData = async (c) => {
    try {
        const data = await (0, Payments__services_1.getAllPayments)();
        return c.json(data, 200);
    }
    catch (err) {
        if (err instanceof Error) {
            return c.json({ "message": err.message }, 500); // Ensure err.message is a string
        }
        else {
            return c.json({ "message": "An unknown error occurred" }, 500);
        }
    }
};
exports.getAllPaymentsData = getAllPaymentsData;
const getOnePaymentsData = async (c) => {
    const id = c.req.param("id");
    try {
        const data = await (0, Payments__services_1.getOnePayments)(Number(id));
        return c.json(data, 200);
    }
    catch (err) {
        if (err instanceof Error) {
            return c.json({ "message": err.message }, 500);
        }
        else {
            return c.json({ "message": "An unknown error occurred" }, 500);
        }
    }
};
exports.getOnePaymentsData = getOnePaymentsData;
const deletePaymentsData = async (c) => {
    const id = c.req.param("id");
    try {
        const data = await (0, Payments__services_1.deletePayments)(Number(id));
        return c.json({ message: data }, 200);
    }
    catch (err) {
        if (err instanceof Error) {
            return c.json({ "message": err.message }, 500);
        }
        else {
            return c.json({ "message": "An unknown error occurred" }, 500);
        }
    }
};
exports.deletePaymentsData = deletePaymentsData;
const insertPaymentsData = async (c) => {
    try {
        const data = await c.req.json();
        const result = await (0, Payments__services_1.insertPayments)(data);
        return c.json({ message: result }, 200);
    }
    catch (err) {
        if (err instanceof Error) {
            return c.json({ "message": err.message }, 400);
        }
        else {
            return c.json({ "message": "An unknown error occurred" }, 400);
        }
    }
};
exports.insertPaymentsData = insertPaymentsData;
const updatePaymentsData = async (c) => {
    const id = c.req.param("id");
    try {
        const data = await c.req.json();
        const result = await (0, Payments__services_1.updatePayments)(Number(id), data);
        return c.json({ message: result }, 200);
    }
    catch (err) {
        if (err instanceof Error) {
            return c.json({ "message": err.message }, 400);
        }
        else {
            return c.json({ "message": "An unknown error occurred" }, 400);
        }
    }
};
exports.updatePaymentsData = updatePaymentsData;
const createCheckoutSessionController = async (c) => {
    let booking;
    try {
        booking = await c.req.json();
        console.log('Received booking:', booking);
    }
    catch (error) {
        return c.json({ message: "Booking not found" }, 404);
    }
    try {
        if (!booking.booking_id)
            return c.json({ message: "Booking ID is Required" }, 400);
        const line_items = [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Car Rental',
                    },
                    unit_amount: Math.round(booking.total_amount * 100),
                },
                quantity: 1,
            }];
        const sessionParams = {
            payment_method_types: ['card'],
            line_items,
            mode: 'payment',
            success_url: `${sripe_1.ClientURL}/SuccessPage`,
            cancel_url: `${sripe_1.ClientURL}/payment-canceled`,
        };
        const session = await stripe.checkout.sessions.create(sessionParams);
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
        const createPayment = await (0, Payments__services_1.insertPayments)(paymentDetails);
        return c.json({ sessionId: session.id, url: session.url, payment: createPayment }, 200);
    }
    catch (error) {
        return c.json({ message: error.message }, 400);
    }
};
exports.createCheckoutSessionController = createCheckoutSessionController;
