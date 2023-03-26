import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import "./checkout.css"
const formBase = {
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
};

const Checkout = () => {
    const [form, setForm] = useState(formBase);

    const [id, setId] = useState();

    const {cart, totalPrice} = useCartContext();

    const submitHandler = (ev) => {
        ev.preventDefault();
        const myform = {
            fullname : `${form.firstName} ${form.lastName}`,
            email: form.email,
            phone: form.phone,
        };

        const order = {
            buyer: myform,
            items: Array.isArray(cart) ? cart.map(product => ({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: product.quantity})) : [],
            timestamp: Date.now(),
            total: totalPrice(),
        };
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
    
        addDoc(ordersCollection, order).then((info) => {
            setForm(formBase);
            setId(info.id);
        });         
    };

    const inputChangeHandler = (ev) =>{
        const {name , value} = ev.target
        setForm({...form, [name]: value})
    };

    return(
        <div>
            <div className="container">
                <form onSubmit={submitHandler}>
                    <div class="title">Escribe tus datos para completar la orden </div>
                    <div className="input-box">
                        <label className="user-details" htmlFor="firstName">Nombre</label>
                        <input
                            name="firstName"
                            id="firstName"
                            value={form.firstName}
                            onChange={inputChangeHandler}
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
                            onChange={inputChangeHandler}
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
                            onChange={inputChangeHandler}
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
                            onChange={inputChangeHandler}
                            placeholder="Escribe tu número de teléfono..."
                        />
                    </div>
                    <button className="purchase-button">Finalizar compra</button>
                </form>
            </div>
            <div>
                    {typeof id !== 'undefined' ? (
                        <p className="id">Su compra se ha enviado con el id: {id}</p>
                    ) : ('')}
            </div>
        </div>
    );
};

export default Checkout;
