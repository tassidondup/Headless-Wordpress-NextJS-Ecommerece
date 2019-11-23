const Product = (props) => {
    const { product } = props
    return(
        <div className="col-lg-3 colmd-6 col-sm-12 card mb-3 text-center">
            <h3 className="card-header">{product.name}</h3>
            <img className="" src={product.images[0].src} alt="Product image" />
            <div className="card-body">
                <h6 className="card-subtitle text-muted">AU {product.price}</h6>
                <a href="" className="btn btn-secondary text-center">View</a>
            </div>
        </div>
    );
}

export default Product;