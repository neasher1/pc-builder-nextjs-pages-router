import Link from "next/link";

const RandomProducts = ({ randProducts }) => {
    return (
        <div>
            <h2 className="text-5xl text-accent font-bold text-center my-8 tracking-widest">Top Rated Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
                {
                    randProducts?.map(product => <div key={product.id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={product.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product?.productName}</h2>
                            <p>category: {product?.category}</p>
                            <p>price: {product?.price}</p>
                            <p>status: {product?.status}</p>
                            <p>rating: {product?.rating}</p>
                            <div className="card-actions">
                                <Link href={`/details/${product._id}`} className="btn btn-accent tracking-widest">View Details</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default RandomProducts;

