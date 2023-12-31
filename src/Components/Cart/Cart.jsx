import styles from './Cart.module.css';
import Logo from './Cart.svg';

import { 
    useState, 
    useEffect,
    useContext
} from 'react';

import { CartContext } from '../../Context/CartContext';

import CartItem from '../CartItem/CartItem';
import Subtotal from '../Subtotal/Subtotal';
import Spinner from '../Spinner/Spinner';


export default function Cart() {
    const [cartModal, setCartModal] = useState("");
    const {cartProducts, setCartProducts} = useContext(CartContext);

    useEffect(() => setCartModal(document.getElementById('modal')), []);

    const handleOpen = () => {
        cartModal.style.setProperty("display", "block")
        document.body.style.setProperty("overflow", "hidden");
    };

    const handleClose = () => {
        cartModal.style.setProperty("display", "none")
        document.body.style.setProperty("overflow", "auto");
    };

    window.onclick = (e) => {
        if(e.target === cartModal) {
            handleClose();
        };
    };

    const displayCartItems = () => {
        let productsArray = [];

        if(cartProducts.length < 1){
            return(
                <div className={styles.loading}>
                    <Spinner/>
                    <h2>Loading...</h2>
                </div>
            );
        }else{    
            Object.keys(cartProducts).forEach((key) => productsArray.push(
                <CartItem 
                id={key} 
                product={cartProducts[key]}
                image={cartProducts[key].image}
                />
                ));
                
                return productsArray;
        }
    };

    return (
        <>
        <button onClick={handleOpen} className={styles.cartButton}><img src={Logo} alt="Cart"/></button>

        <div id='modal' className={styles.modal} >

            <div className={styles.cartContent}>

                <div className={styles.cartHeader}>
                    <p>Your Shopping Cart</p>
                    
                    <button className={styles.close} onClick={handleClose}>X</button>
                </div>

                <div className={styles.cartBody}>
                    {displayCartItems()}
                </div>

                <div className={styles.cartFooter}>
                    <Subtotal/>

                    <button> BUY </button>
                </div>

            </div>
        </div>
        </> 
     );
}
