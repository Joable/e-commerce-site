import styles from './ProductItem.module.css';

import { Link } from 'react-router-dom';

function ProductItem({id, productData}) {

    return (  
        <Link className={styles.item} to={`/product/${id}`} target="_blank">
                    <img src={productData.images[0]} alt="Product"/>

                    <div className={styles.itemBody}>
                        <h4>{productData.name}</h4>

                        <h3>{productData.price}$</h3>
                    </div>
       </Link>

    );
}

export default ProductItem;