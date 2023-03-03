import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
export default function NavBar(){


    return <nav className="nav">
        <NavLink className="site-title" to= "/" >xlClothes</NavLink>
        <ul>
            <li>
                <NavLink to= "/categoria/remeras" >Remeras</NavLink>
            </li>
            <li>
                <NavLink to= "/categoria/pantalones" >Pantalones</NavLink>
            </li>
            <li>
                <NavLink to=''>
                    <CartWidget/>
                </NavLink>
            </li>
        </ul>
    </nav>
}

