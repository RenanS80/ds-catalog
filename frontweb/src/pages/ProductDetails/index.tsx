import './styles.css';

import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ProductPrice from 'components/ProductPrice';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from 'utils/requests';
import { useEffect, useState } from 'react';
import { Product } from 'types/product';
import ProductInfoLoader from './ProductInfoLoader';
import ProductDetailsLoader from './ProductDetailsLoader';


type urlParams = {
    productId: string;
}

function ProductDetails() {

    const { productId } = useParams<urlParams>();
    const [isLoading, setIsLoading] = useState(false);

    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${BASE_URL}/products/${productId}`)
            .then(response => {
                setProduct(response.data);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [productId]);



    return (
        <section className="product-details-container">
            <div className="base-card product-details-card">
                <Link to="/products">
                    <div className="goback-container">
                        <ArrowIcon />
                        <h2>Voltar</h2>
                    </div>
                </Link>

                <div className="row">
                    <div className="col-xl-6">
                        {isLoading ? <ProductInfoLoader /> : (
                            <>
                                <div className="img-container">
                                    <img src={product?.imgUrl} alt={product?.name} />
                                </div>
                                <div className="name-price-container">
                                    <h1>{product?.name}</h1>
                                    {product && <ProductPrice price={product?.price} />}
                                </div>
                            </>
                        )
                        }
                    </div>

                    <div className="col-xl-6">
                        {isLoading ? <ProductDetailsLoader /> : (
                            <div className="description-container">
                                <h2>Descri????o do produto</h2>
                                <p>{product?.description}</p>
                            </div>
                        )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;