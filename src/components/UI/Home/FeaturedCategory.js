import Link from "next/link";

// const categories = [
//     {
//         category: "Processor",
//         image: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/03/Intel-Rocker-Lake-2-e1615908186584-920x614.jpg",
//     },
//     {
//         category: "Motherboard",
//         image: "https://i0.wp.com/gamingph.com/wp-content/uploads/2022/05/rog-strix-b660-f-gaming-wifi-the-motherboard.jpg?fit=1200%2C800&ssl=1",
//     },
//     {
//         category: "RAM",
//         image: "https://www.pandasecurity.com/en/mediacenter/src/uploads/2020/03/how-to-free-up-RAM-hero.jpg",
//     },
//     {
//         category: "Power Supply Unit",
//         image: "https://cdn.mos.cms.futurecdn.net/hNcMBdLW7wrypXrRTKHemN-1200-80.jpg",
//     },
//     {
//         category: "Storage Device",
//         image: "https://cms-media.bartleby.com/wp-content/uploads/sites/2/2021/11/16094151/ANK-4-1024x786.jpg",
//     },
//     {
//         category: "Monitor",
//         image: "https://www.cnet.com/a/img/resize/8d47065f9ecb62603a14d9b33f02e3e5c91a512e/hub/2021/05/12/0ad36336-efa0-4310-aff2-c268fec45350/samsung-lf27t350fhnxza-monitor.png?auto=webp&fit=crop&height=900&precrop=885,498,x0,y0&width=1200",
//     },
//     {
//         category: "Others",
//         image: "https://static.toiimg.com/thumb/msid-93155131,width-400,resizemode-4/93155131.jpg",
//     },
// ];

const FeaturedCategory = ({ categories }) => {
    return (
        <div className="mt-24">
            <h2 className="text-5xl text-accent font-bold text-center my-8 tracking-widest">Featured Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
                {categories?.map((categoryObj) => (
                    <div key={categoryObj.category} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <Link href={`/categories/${categoryObj.category}`}>
                            <figure>
                                <img src={categoryObj.image} alt="category" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{categoryObj.category}</h2>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedCategory;
