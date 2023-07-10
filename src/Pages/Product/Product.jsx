import styles from './Product.module.css';
import productImg from '../../img/goatsuba.jpg';
import productImg2 from '../../img/goatsuba2.png';
import productImg3 from '../../img/goatsuba3.jpg'

import TrendItems from '../../Components/TrendItems/TrendItems';

function Product() {
    return (
        <>
        <h2 className={styles.productTitle}>Product Page</h2>

        <div className={styles.productBody}>
            <div className={styles.productImages}>
                <img src={productImg} alt="Product"/>

                <div className={styles.imageSelector}>
                    <img src={productImg} alt="Product"/>

                    <img src={productImg2} alt="Product" />

                    <img src={productImg3} alt="Product" />
                </div>
            </div>

            <div className={styles.productDetails}>
                <p>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Sed eleifend leo pellentesque, pharetra ex eget, tempor risus.
                </p>

                <div className={styles.productPrice}>
                    <h3>Quantity</h3>

                    <p>quiantity counter</p>

                    <h3>Price</h3>
                </div>

                <div className={styles.productButtons}>
                    <button className={styles.whiteButton}>ADD TO CART</button>

                    <button className={styles.redButton}>BUY NOW</button>
                </div>
            </div>
        </div>

        <div className={styles.trend}>
            <TrendItems/>
        </div>
        </> 
    );
}

export default Product;