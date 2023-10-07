import { Link, NavLink } from "react-router-dom"; 
import Logo from "../assets/logo.png"
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo navItems noUnderline">
        <img src={Logo} alt="Shopmate Logo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link navItems noUnderline" end>Home</NavLink>
        <NavLink to="/cart" className="link navItems noUnderline">Cart</NavLink>
      </nav>
      <Link to="/cart" className="navItems noUnderline">
        <span>Cart: 2</span>
      </Link>
    </header>
  )
}