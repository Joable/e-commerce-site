import styles from './Product.module.css';

import { useParams } from 'react-router-dom';
import { 
    useEffect, 
    useState 
} from 'react';

import { getProductById } from '../../Services/getProducts';

import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel';
import ImageSelector from '../../Components/ImageSelector/ImageSelector';
import ProductDescription from '../../Components/ProductDescription/ProductDescription';

function Product() {
    const [product, setProduct] = useState({
        details:[],
        images:[]
    });
    const [isLoading, setIsLoading] = useState(true);
    
    const {id} = useParams();
    
    useEffect(() => {
        const responseProduct = async () =>{
            try{
                const response = await getProductById(id);

                setProduct(response.data());
                
                setIsLoading(false);
            }catch(e){
                console.log(e)
            }
        };

        responseProduct();
    }, []);

    if(isLoading){
        return(
        <>
            Loading...
        </>
        );
    }else{
        return (
            <div className={styles.product}>

                <h2 className={styles.productTitle}>{product.name}</h2>
        
                <div className={styles.productBody}>
                    <ImageSelector images={product.images}/>
        
                    <ProductDescription product={product} id={id}/>
                </div>
                
        
                <div className={styles.detailsSection}>
                    {product.details.map((detail) => <div className={styles.productDetails}><h3>{detail.name}</h3> <h4>{detail.description}</h4></div>)}
                </div>
        
                <div className={styles.trend}>
                    <ProductCarousel/>
                </div>

            </div> 
        );
    }
}

export default Product;