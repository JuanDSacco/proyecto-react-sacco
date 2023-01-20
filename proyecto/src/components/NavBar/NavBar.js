import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './navBar.css' 

const NavBar = () => {
    return (
        <div>
            <ul className="ul">
                <li>
                    <Link className="home" to="/">Inicio</Link>
                </li>
                <li>
                    <Link className="prod" to="/productos">Productos</Link>
                </li>
                <li>
                    <Link className="moni" to={'/categoria/monitores'}>Monitores</Link>
                </li>
                <li>
                    <Link className="placa" to={'/categoria/cpu'}>CPU</Link>
                </li>
                <CartWidget/>
            </ul>
        </div>
    
    )
}

export default NavBar;

