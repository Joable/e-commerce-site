import styles from './Nav.module.css';
import Logo from './Logo.svg';

import { Link } from 'react-router-dom'; 

import Cart from '../Cart/Cart';


function Nav() {
    let prevScrollPos = window.pageYOffset;

    window.onscroll = () => {
        var currentScrollPos = window.pageYOffset;
        
        if (prevScrollPos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-121px";
        }
        prevScrollPos = currentScrollPos;
    } 

    return ( 
        <>
        <nav id='navbar'>
            <div className={styles.navContainer}>
                <Link className={styles.navLogo} to='ecommerceBuild/'>
                    <img src={Logo} alt="E-Commerce Site Logo" />
                </Link>

                <div className={styles.navButtons}>
                    <Link to='ecommerceBuild/categories/all'>Categories</Link>

                    <Link to='ecommerceBuild/product/1s9b7PcLGhK4yiwsFvG5'>Product Page</Link>

                    <Cart/>
                </div>
            </div>
        </nav>
        </>
     );
}

export default Nav;