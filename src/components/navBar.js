import CartWidget from './CartWidget';
export default function NavBar(){


    return <nav className="nav">
        <a href="/" className="site-title">xlClothes</a>
        <ul>
            <li>
                <a href="Remeras">Remeras</a>
            </li>
            <li>
                <a href="Buzos">Buzos</a>
            </li>
            <li>
                <a href="Pantalones">Pantalones</a>
            </li>
            <li>
                <CartWidget/>
            </li>
        </ul>
    </nav>
}

