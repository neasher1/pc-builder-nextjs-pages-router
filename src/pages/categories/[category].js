import Link from "next/link";
import { useRouter } from "next/router";

const CategoriesProduct = ({ products }) => {
    const router = useRouter();
    const category = router.query.category;

    const filteredProducts = products.filter(
        (product) => product.category === category
    );

    console.log(filteredProducts);

    return (
        <div className="min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
                {
                    filteredProducts.map(product => <div key={product.id} className="card w-96 glass">
                        <figure>
                            <img src={product.image} alt="product" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product?.productName}</h2>
                            <p>category: {product?.category}</p>
                            <p>price: {product?.price}</p>
                            <p>status: {product?.status}</p>
                            <p>rating: {product?.rating}</p>
                            <div className="card-actions">
                                <Link href={`/details/${product._id}`} className="btn btn-accent text-white tracking-widest">View More!</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CategoriesProduct;

//SSR
export const getServerSideProps = async () => {

    const res = await fetch("http://localhost:3000/api/products");
    const data = await res.json();
    const allProducts = data.data;

    return {
        props: {
            products: allProducts
        }
    }
}
