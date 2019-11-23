const Product = (props) => {
    const { product } = props
    return(
        <div className="card mb-3">
            <h3 className="card-header">{product.name}</h3>
            <img className="product-img" src={product.images[0].src} alt="Product image" />
            <div className="card-body">
                <h6 className="card-subtitle text-muted">{product.price}</h6>
            </div>
            <button type="button" className="btn btn-secondary">View</button>
        </div>
    );
}

export default Product;