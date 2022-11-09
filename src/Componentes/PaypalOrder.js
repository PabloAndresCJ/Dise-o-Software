import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import PayPalButton from "./BotónPayPal";
import {useCart} from "react-use-cart";
import {useAuth0} from "@auth0/auth0-react";
import {LoginButton} from "./LoginButton";

const PaypalOrder = () => {

    const {isAuthenticated} = useAuth0;

    const initialOptions = {
        "client-id": "test",
        currency: "USD",
        intent: "capture"
    };

    const createOrderHandler = (data, actions) => {
        // Set up the transaction
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "15"
                    }
                }
            ]
        });
    };

    const onApproveHandler = (data, actions) => {
        // This function captures the funds from the transaction.
        return actions.order.capture().then(function (details) {
            // This function shows a transaction success message to your buyer.
            alert("Transaction completed by " + details.payer.name.given_name);
        });
    };

    const {
        cartTotal,
    } = useCart();


    return (

        <div>
            <br/>
            <br/>
            <h3>Total a pagar: ${cartTotal.toLocaleString(undefined, {maximumFractionDigits:2})}</h3>
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButton
                    createOrder={createOrderHandler}
                    onApprove={onApproveHandler}
                />
            </PayPalScriptProvider>
        </div>



    );
};

export default PaypalOrder;
