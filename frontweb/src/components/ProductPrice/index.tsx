import './styles.css';

function ProductPrice(){
    return(
        <div className="product-price-container">
            <span>R$</span>
            <h3>
                2.799
                <span className="price-decimal">,00</span>
            </h3>
        </div>
    );
}

export default ProductPrice;