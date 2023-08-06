import { useGetAllCategoriesQuery } from "./redux/api/api";

const pcBuilder = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, error, isLoading } = useGetAllCategoriesQuery();

    if (isLoading) {
        <p>Loading</p>
    }
    console.log(data?.data);
    return (
        <div>
            <h2 className="text-5xl text-accent font-bold text-center my-8 tracking-widest">Custom Pc builder</h2>
            <div className="grid grid-cols-1 justify-items-center gap-4">
                {
                    data?.data.map(category => <div key={category._id} className="card w-5/6 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="avatar">
                                <div className="w-24 rounded-xl">
                                    <img src={category?.image} />
                                </div>
                            </div>
                            <p>{category?.category}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-accent tracking-widest">Choose</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default pcBuilder;