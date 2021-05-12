const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51InnnZSBzPgSMpAG9UVHzWFhaudNlIg2fHXzIogFewjkjkL1TrWEzVgFU8xhrTiwvTf6XmhB1116K6QGEsPMHt1H00dhGKTpmU')

// API setup

// -App Config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("PAYMENT REQUEST RECEIVED for this amount : ",total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // Sub units of the currency
        currency: "inr",
    });

    // 201 status means that : everything went OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// -Listen Command
exports.api = functions.https.onRequest(app)

// Example end-point
// http://localhost:5001/clone-d2987/us-central1/api