import React from "react";
// import {UseNavigate} from "react-router-dom"
// import { AuthContext } from "../../context/AuthContext";
// import { CartContext } from "../../context/CartContext";




// use react-router Link or NavLink
const Link = <a/>;

const Navbar = () => {
  // const {isAuth,logout}=useContext(AuthContext)
  // const {count}=useContext(CartContext)
  // const nav=UseNavigate()
//   const handleChange=()=>{
//     if(isAuth){
//       logout();
//     }
//     else{
//     nav("/login")
//     }
// }
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/">Logo</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button data-cy="navbar-login-logout-button"></button>
    </div>
  );
};

export default Navbar;
