import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className={styles.navbar}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h2 className={styles.navbar__logo}>AK Shopping Cart</h2>
      </Link>
      <Link to="/cart" style={{ textDecoration: 'none' }}>
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}>Cart</h3>
          <div style={{ display: "flex" }}>
            <AiOutlineShoppingCart style={{ fontSize: "xx-large" }} />
            {cartCount !== 0 && (
              <div className={styles.cart__counter}>{cartCount}</div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
