export const handleOnChange = (ev, form, setForm) =>{
    const {name , value} = ev.target
    setForm({...form, [name]: value})
};

export const getOrder = (form, cart, totalPrice) => ({
    buyer: form,
    items: Array.isArray(cart) ? cart.map(({ id, name, price, quantity}) => ({
        id: id,
        name: name,
        price: price,
        quantity: quantity})) : [],
    timestamp: Date.now(),
    total: totalPrice(),
})