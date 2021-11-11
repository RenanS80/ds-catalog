import './styles.css';

import Navbar from 'components/Navbar';
import ProductCard from 'components/ProductCard';

function Catalog(){
    return(
        <>
            <Navbar />

            <div className="container-fluid my-4">
                <div className="row row-cols-xl-5">
                    <div className="col-sm-6 col-lg-4">
                        <ProductCard />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <ProductCard />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <ProductCard />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <ProductCard />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <ProductCard />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <ProductCard />
                    </div>
                </div>
                
                
            </div>
        </>

    );
}

export default Catalog;