import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addComponent } from "../redux/feature/builder/builderSlice";

const AddBuilder = ({ products }) => {
    const router = useRouter();
    const category = router.query.addBuilder;

    const filteredProducts = products?.filter(
        (product) => product.category === category
    );

    // console.log(filteredProducts);
    const dispatch = useDispatch();

    const handleAddToBuilder = (selectedCategory, selectedComponent) => {
        dispatch(addComponent({ category: selectedCategory, component: selectedComponent }));
        console.log(selectedCategory, selectedComponent);
    };

    return (
        <div className="min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 justify-items-center">
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
                                <Link href={`/pc-builder`} onClick={() => handleAddToBuilder(category, product)} className="btn btn-accent text-white tracking-widest">Add to Builder</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AddBuilder;


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
