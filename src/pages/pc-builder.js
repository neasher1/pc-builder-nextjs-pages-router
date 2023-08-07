import Link from "next/link";
import { useGetAllCategoriesQuery } from "./redux/api/api";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const pcBuilder = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, error, isLoading } = useGetAllCategoriesQuery();

    if (isLoading) {
        <p>Loading</p>
    }
    // console.log(data?.data);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const selectedComponents = useSelector((state) => state.builder.selectedComponents);

    const handleCompleteButton = () => {
        toast.success("Build completed successfully!");
    }

    return (
        <div>
            <h2 className="text-5xl text-accent font-bold text-center my-8 tracking-widest">Custom Pc builder</h2>
            <div className="grid grid-cols-1 justify-items-center gap-4 mb-4">
                {
                    data?.data.map(category => <div key={category._id} className="card w-5/6 md:w-3/4 bg-base-100 shadow-xl">
                        <div className="card-body grid grid-cols-2 gap-8">
                            <div>
                                <div className="avatar">
                                    <div className="w-24 rounded-xl">
                                        <img src={category?.image} />
                                    </div>
                                </div>
                                <p>{category?.category}</p>
                            </div>
                            <div>
                                <Link href={`/builder/${category?.category}`} className="btn btn-accent tracking-widest">Choose</Link>
                            </div>
                        </div>
                    </div>)
                }

                {/* Display selected components */}
                <div>
                    {
                        Object.keys(selectedComponents).length > 1 && <h2 className="text-2xl mt-8 font-bold">Selected Components:</h2>
                    }
                    <div className="grid grid-cols-1 gap-4 my-2 mb-4 card bg-base-100 shadow-xl justify-items-center w-full">
                        {Object.entries(selectedComponents).map(([category, component]) => (
                            <div key={category} className="card-body card">
                                <div className="card-body grid grid-cols-2 gap-4">
                                    <div className="avatar">
                                        <div className="w-24 rounded-xl">
                                            <img src={component?.image} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">{component?.productName}</h3>
                                        <p>Category: {component?.category}</p>
                                        <p>Price: {component?.price}</p>
                                        <p>Rating: {component?.rating}</p>
                                        <p>Status: {component?.status}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {
                    Object.keys(selectedComponents).length < 5 ? <button className="btn btn-disabled" tabIndex="-1" role="button" aria-disabled="true">Complete Button</button> : <button onClick={handleCompleteButton} className="btn btn-outline btn-accent">Complete Button</button>
                }

            </div>




        </div >
    );
};

export default pcBuilder;