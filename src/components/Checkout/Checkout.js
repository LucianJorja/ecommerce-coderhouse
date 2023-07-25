import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import "./checkout.css"

import { handleOnChange, getOrder } from "./utils/helpers";

const initialForm = {
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
};

const Checkout = () => {
    const {cart, totalPrice} = useCartContext();
    
    const [form, setForm] = useState(initialForm);
    const [id, setId] = useState();
   
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');

    const { firstName, lastName, email, phone } = form;

    const getForm = {
        fullname : `${firstName} ${lastName}`,
        email: email,
        phone: phone,
    };

    const handleOnSubmit = (ev) => {
        ev.preventDefault();
       
        addDoc(ordersCollection, getOrder(getForm, cart, totalPrice))
        .then((data) => {
            console.log(data.id)
            setForm(initialForm);
            setId(data.id);
        })
        .catch((error) => console.log(error))
    };

    return(
        <>
            <div className="container">
                <form onSubmit={handleOnSubmit}>
                    <div className="title">Escribe tus datos para completar la orden </div>
                    <div className="input-box">
                        <label className="user-details" htmlFor="firstName">Nombre</label>
                        <input
                            name="firstName"
                            id="firstName"
                            value={form.firstName}
                            onChange={(ev) =>  handleOnChange(ev, form, setForm)}
                            placeholder="Escribe tu nombre..."
                            required
                        />
                    </div>
                    <div className="input-box">
                        <label className="user-details" htmlFor="lastName">Apellidos</label>
                        <input
                            name="lastName"
                            id="lastName"
                            value={form.lastName}
                            onChange={(ev) =>  handleOnChange(ev, form, setForm)}
                            placeholder="Escribe tus apellidos..."
                            required
                        />
                    </div>
                    <div className="input-box">
                        <label className="user-details" htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={form.email}
                            onChange={(ev) =>  handleOnChange(ev, form, setForm)}
                            placeholder="Escribe tu email de contacto..."
                            required
                            />
                    </div>
                    <div className="input-box">
                        <label className="user-details" htmlFor="phone">Teléfono</label>
                        <input
                            name="phone"
                            id="phone"
                            value={form.phone}
                            onChange={(ev) =>  handleOnChange(ev, form, setForm)}
                            placeholder="Escribe tu número de teléfono..."
                        />
                    </div>
                    <button className="purchase-button">Finalizar compra</button>
                </form>
            </div>
            <div>
                    {id && (
                        <p className="id">Su compra se ha enviado con el id: {id}</p>
                    )}
            </div>
        </>
    );
};

export default Checkout;
