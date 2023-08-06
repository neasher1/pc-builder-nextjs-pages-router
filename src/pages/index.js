import Banner from "@/components/UI/Home/Banner";
import FeaturedCategory from "@/components/UI/Home/FeaturedCategory";
import RandomProducts from "@/components/UI/Home/RandomProducts";

const index = ({ randProducts, categories }) => {
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <RandomProducts randProducts={randProducts}></RandomProducts>
      <FeaturedCategory categories={categories}></FeaturedCategory>
    </div >
  );
};

export default index;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  const allProducts = data.data;
  const shuffledData = allProducts.sort(() => 0.5 - Math.random());
  const randomProducts = shuffledData.slice(0, 6);

  const categoriesRes = await fetch("http://localhost:3000/api/categories");
  const categoriesData = await categoriesRes.json();

  return {
    props: {
      randProducts: randomProducts,
      categories: categoriesData.data,
    },
    revalidate: 10,
  };
};
