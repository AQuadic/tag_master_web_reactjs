import MainHome from "@/components/HomePage/MainHome";
import { getProducts } from "@/api/products/getProducts";

const ProductsPage = async () => {
  const data = await getProducts(1);

  return <MainHome data={data} />;
};

export default ProductsPage;
