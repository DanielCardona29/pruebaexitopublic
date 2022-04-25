import './styles/header.scss';

import { Link } from "react-router-dom";

//Logo
const logo = `https://upload.wikimedia.org/wikipedia/commons/9/9b/Logo_Exito_colombia.png`;

const Header = () => {
    return (
        <header>
            <Link to="/" className='Logo'>
                <h1 className="name">
                    EmiExito
                </h1>
                <img src={logo} alt="logo" />
            </Link>
        </header>
    );
}

export default Header;